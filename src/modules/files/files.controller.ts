import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  InternalServerErrorException,
  ParseFilePipeBuilder,
  Post,
  Query,
  Res,
  StreamableFile,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import type { Response } from 'express';
import { createReadStream, createWriteStream, existsSync, mkdirSync } from 'fs';
import { extname, join, parse } from 'path';

@Controller('files')
export class FilesController {
  @Get()
  getFile(
    @Res({ passthrough: true }) res: Response,
    @Query('path') path: string,
  ): Promise<StreamableFile> {
    return new Promise((resolve, reject) => {
      const prefix = './uploads';

      // Prevent directory traversal attacks and ensure path is confined to the intended directory
      if (path.includes('..') || !path.startsWith(prefix)) {
        reject(new BadRequestException('Invalid file path'));
      }

      const filePath = join(process.cwd(), `${path}`);
      const file = createReadStream(filePath);

      file.on('error', (err) => {
        console.error('Error reading file:', err);
        reject(new BadRequestException('File not found'));
      });

      const filename = path.split('/').pop();
      const extension = extname(filename).slice(1); // Remove the dot

      const mimeTypes: { [key: string]: string } = {
        jpeg: 'image/jpeg',
        jpg: 'image/jpeg',
        png: 'image/png',
        gif: 'image/gif',
        pdf: 'application/pdf',
        doc: 'application/msword',
        docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        xls: 'application/vnd.ms-excel',
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ppt: 'application/vnd.ms-powerpoint',
        pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      };

      const contentType = mimeTypes[extension] || 'application/octet-stream'; // Fallback if no known extension

      res.set({
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${filename}"`,
      });

      resolve(new StreamableFile(file));
    });
  }

  @Post('single-upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /jpeg|jpg|png|gif|pdf|doc|docx|xls|xlsx|ppt|pptx/,
        })
        .addMaxSizeValidator({
          maxSize: 100000,
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
    @Body('directory') directory: string,
  ) {
    directory = directory ?? 'etc';
    const dir = `./uploads/${directory}`;
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    // Extract original file extension
    const originalExt = parse(file.originalname).ext;

    // Generate a unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const filename = `${uniqueSuffix}${originalExt}`;

    const writeStream = createWriteStream(join(dir, filename));

    writeStream.write(file.buffer);
    writeStream.end();

    writeStream.on('finish', () => {
      console.log(`File ${filename} has been written`);
    });

    writeStream.on('error', (err) => {
      throw new InternalServerErrorException(err);
    });

    return {
      data: `${dir}/${filename}`,
    };
  }

  @Post('multiple-upload')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFiles(
    @UploadedFiles() files: Express.Multer.File[],
    @Body('directory') directory: string,
  ) {
    directory = directory ?? 'etc';
    const dir = `./uploads/${directory}`;
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    const responses = files.map((file) => {
      // Extract original file extension
      const originalExt = parse(file.originalname).ext;

      // Generate a unique filename
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const filename = `${uniqueSuffix}${originalExt}`;

      const writeStream = createWriteStream(join(dir, filename));

      writeStream.write(file.buffer);
      writeStream.end();

      writeStream.on('finish', () => {
        console.log(`File ${filename} has been written`);
      });

      writeStream.on('error', (err) => {
        throw new InternalServerErrorException(err);
      });

      return {
        message: `File ${filename} uploaded successfully`,
      };
    });

    return Promise.all(responses);
  }
}
