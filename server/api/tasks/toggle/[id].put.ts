import prisma from "../../../utils/prisma";

export default defineEventHandler(async (event) => {
	const taskId = getRouterParam(event, 'id', { required: true, type: 'number' });

    const task = await prisma.listItem.findUnique({
        where: {
            id: Number(taskId),
        },
    });

    if (!task) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Task not found',
        });
    }

	const updatedTask = await prisma.listItem.update({
        where: {
            id: Number(taskId), 
        },
        data: {
            status: {
                set: !task.status,
            },
        },
    }).catch((error) => {
        throw Error("error toggling task: " + error);
    });

    return updatedTask;
})
