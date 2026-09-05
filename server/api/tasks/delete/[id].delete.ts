import prisma from "../../../utils/prisma";

export default defineEventHandler(async (event) => {
	const taskId = getRouterParam(event, 'id', { required: true, type: 'number' });

	await prisma.listItem.delete({
        where: {
            id: Number(taskId), 
        }
    }).catch((error) => {
        throw Error("error deleting task: " + error);
    });
})
