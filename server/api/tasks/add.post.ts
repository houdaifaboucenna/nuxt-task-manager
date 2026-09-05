import prisma from "../../utils/prisma";

export default defineEventHandler(async (event) => {
	const task = await readBody<Record<string, unknown>>(event)

	if (!task || typeof task !== 'object' || Array.isArray(task)) {
		throw createError({
			statusCode: 400,
			statusMessage: 'A valid task object is required',
		})
	}

	const newTask = await prisma.listItem.create({
        data: {
            name: task.name as string,
            listId: task.listId as number,
        }
    }).then((newTask) => {
        console.log('New task created:', newTask);
    }).catch((error) => {
        console.error('Failed to create task:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to create task',
        });
    });
	

	return newTask
})
