import type { BoardListPayload } from "~/types/Board";

export function useBoard() {
    const { data, error, refresh } = useFetch<BoardListPayload>('/api/lists', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const addTask = async (task: { name: string; listId: number }) => {
        await useFetch('/api/tasks/add', { method: 'POST', body: { name: task.name, listId: task.listId } })
            .then(() => refresh())
            .catch((error) => console.error('Error adding task:', error));
    }

    const deleteTask = async (taskId: number) => {
        await useFetch(`/api/tasks/delete/${taskId}`, { method: 'DELETE' })
            .then(() => refresh())
            .catch((error) => console.error('Error deleting task:', error));
    }

    const toggleTask = async (taskId: number) => {
        await useFetch(`/api/tasks/toggle/${taskId}`, { method: 'PUT' })
            .then(() => refresh())
            .catch((error) => console.error('Error toggling task:', error));
    }

    return {
        data,
        error,
        refresh,
        addTask,
        deleteTask,
        toggleTask
    };
}