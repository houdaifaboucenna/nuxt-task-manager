<template>
    <!-- Board List -->
    <div class="flex flex-col w-64 h-full min-h-96 bg-gray-300 rounded-lg p-4">
        <!-- Board List Header -->
        <div class="flex justify-between items-center gap-2 mb-5">
            <h3 class="text-lg font-semibold">{{ list?.name }}</h3>
            <p class="w-6 h-6 text-blue-500 bg-blue-100 rounded-full flex items-center justify-center text-sm">
                0
            </p>
        </div>
        <!-- Board List Content -->
        <div class="flex flex-col gap-2">
            <!-- List Item -->
            <BoardListItem v-for="item in list?.listItems" :item="item" />

            <!-- Add Task Button -->
            <BoardAddTask :list-id="list?.id"/>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    list: Object
})
</script>