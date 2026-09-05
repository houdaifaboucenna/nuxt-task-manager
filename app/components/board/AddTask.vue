<template>
    <!-- Add Task Button -->
    <div class="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg">
        <!-- Form fields for task details -->
        <input v-model="taskName" v-show="showInput" type="text" id="taskName" name="taskName" placeholder="Task Name" required
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200" />
        <button @click="add({ name: taskName, listId: listId })"
            class="mt-2 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors flex items-center justify-center gap-2 p-2 font-medium">
            <Icon name="mdi:plus" color="white" size="24" />
            Add Task
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    listId: {
        type: Number,
        required: true
    }
});

const showInput = ref(false);
const taskName = ref('');
const { addTask } = useBoard();

const add = async (task: { name: string, listId: number }) => {
    if (showInput.value === false) {
        showInput.value = true;
        return;
    }
    
    if (!task.name) {
        alert('Task name is required');
        return;
    }

    try {
        await addTask(task);
        taskName.value = '';
        showInput.value = false;
    } catch (error) {
        console.error('Error adding task:', error);
    }
};
</script>