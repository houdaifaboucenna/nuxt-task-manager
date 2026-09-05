<template>
    <!-- List Item -->
    <div class="flex justify-between items-center w-full bg-white rounded-lg p-2 relative">
        <!-- toggle button -->
        <button @click="toggleTask(item.id)" class="w-5 h-5 rounded-full flex items-center justify-center text-sm border border-gray-300 hover:bg-gray-200 transition-colors">
            <Icon v-if="item.status" name="mdi:check" color="white" size="16" class="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm" />
        </button>

        <h3 class="text-lg">{{ item.name }}</h3>
        
        <!-- delete button -->
        <button @click="removeTask"
            class="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-sm">
            <Icon name="mdi:delete-outline" color="white" size="16" />
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
})

const { deleteTask, toggleTask } = useBoard();

const removeTask = () => {
    if(confirm(`Are you sure you want to delete the task "${props.item.name}"?`)) {
        deleteTask(props.item.id);
    }
}
</script>