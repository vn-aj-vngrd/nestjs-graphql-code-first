-- CreateEnum
CREATE TYPE "Permission" AS ENUM ('ADMIN', 'USER', 'GUEST');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "permission" "Permission" NOT NULL DEFAULT 'GUEST';
