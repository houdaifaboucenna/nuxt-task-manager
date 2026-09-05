import prisma from "../server/utils/prisma";

async function main() {
  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: "alice@prisma.io" },
      update: { name: "Alice" },
      create: {
        email: "alice@prisma.io",
        name: "Alice",
      },
    }),
    prisma.user.upsert({
      where: { email: "bob@prisma.io" },
      update: { name: "Bob" },
      create: {
        email: "bob@prisma.io",
        name: "Bob",
      },
    }),
  ]);

  const lists = await Promise.all([
    prisma.boardList.upsert({
      where: { id: 1 },
      update: { name: "TODO" },
      create: {
        name: "TODO",
        userId: 1
      },
    }),
    prisma.boardList.upsert({
      where: { id: 2 },
      update: { name: "IN PROGRESS" },
      create: {
        name: "IN PROGRESS",
        userId: 1,
      },
    }),
    prisma.boardList.upsert({
      where: { id: 3 },
      update: { name: "DONE" },
      create: {
        name: "DONE",
        userId: 1,
      },
    }),
  ]);


  const items = await Promise.all([
    prisma.listItem.upsert({
      where: { id: 1 },
      update: { name: "Task #1" },
      create: {
        name: "Task #1",
        listId: 1,
      },
    }),
    prisma.listItem.upsert({
      where: { id: 2 },
      update: { name: "Task #2" },
      create: {
        name: "Task #2",
        listId: 1,
      },
    }),
    prisma.listItem.upsert({
      where: { id: 3 },
      update: { name: "Task #3" },
      create: {
        name: "Task #3",
        listId: 2,
      },
    }),
  ]);


  console.log(`Seeded ${users.length} users.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
