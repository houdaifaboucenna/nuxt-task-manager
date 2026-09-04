<template>
    <!-- List Item -->
    <div class="flex justify-between items-center w-full bg-white rounded-lg p-2 relative">
        <h3 class="text-lg">{{ title }}</h3>
        <!-- delete button -->
        <button @click="deleteTask"
            class="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-sm">
            <Icon name="mdi:delete-outline" color="white" size="16" />
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
const deleteTask = () => {
    console.log(props.title);
}
</script>