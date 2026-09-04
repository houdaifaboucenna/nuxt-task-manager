<template>
    <!-- Board List -->
    <div class="flex flex-col w-64 h-96 bg-gray-300 rounded-lg p-4">
        <!-- Board List Header -->
        <div class="flex justify-between items-center gap-2 mb-5">
            <h3 class="text-lg font-semibold">{{ title }}</h3>
            <p class="w-6 h-6 text-blue-500 bg-blue-100 rounded-full flex items-center justify-center text-sm">
                0
            </p>
        </div>
        <!-- Board List Content -->
        <div class="flex flex-col gap-2">
            <!-- List Item -->
            <BoardListItem title="Task 1" />
            <BoardListItem title="Task 2" />
            <BoardListItem title="Task 3" />

            <!-- Add Task Button -->
            <BoardAddTask />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>