import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      id: '-1',
      name: faker.person.fullName(),
      username: 'username',
      password: await argon2.hash('password'),
      permissions: ['ADMIN'],
    },
  });

  // Create a user
  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        id: i.toString(),
        name: faker.person.fullName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
      },
    });
  }

  // Create a ship
  for (let i = 0; i < 10; i++) {
    await prisma.ship.create({
      data: {
        id: i.toString(),
        name: faker.person.fullName(),
        createdBy: {
          connect: {
            id: i.toString(),
          },
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
