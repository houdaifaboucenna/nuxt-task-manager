<template>
    <!-- Add Task Button -->
    <div>
        <button @click="addTask"
            class="mt-2 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors flex items-center justify-center gap-2 p-2 font-medium">
            <Icon name="mdi:plus" color="white" size="24" />
            Add Task
        </button>
    </div>
</template>

<script setup lang="ts">
const addTask = () => {
    console.log('Add Task');
}
</script>