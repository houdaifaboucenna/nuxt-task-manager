import prisma from "../utils/prisma";


export default defineEventHandler(async () => {
    const lists = await prisma.boardList
        .findMany({
            take: 10,
            orderBy: {
                createdAt: "asc",
            },
            include: {
                listItems: true
            }
        })
        .then((rows) =>
            rows.map((boardList) => ({
                ...boardList,
                createdAt: boardList.createdAt.toISOString(),
            }))
        )
        .catch((error) => {
            console.error("Failed to query lists:", error);
            return undefined;
        });

    if (!lists) {
        return {
            error: "Could not query lists yet.",
            lists: [],
        };
    }

    return { lists };
})