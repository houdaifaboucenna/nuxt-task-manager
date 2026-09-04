<template>
    <div>
        <section class="flex flex-col w-full justify-center">
            <div class="w-full h-full flex justify-center items-center gap-4">
                <!-- Board Column -->
                <div class="flex flex-col w-64 h-96 bg-gray-300 rounded-lg p-4">
                    <!-- Board Column Header -->
                    <div class="flex justify-between items-center gap-2 mb-5">
                        <h3 class="text-lg font-semibold">TODO</h3>
                        <p
                            class="w-6 h-6 text-blue-500 bg-blue-100 rounded-full flex items-center justify-center text-sm">
                            0
                        </p>
                    </div>
                    <!-- Board Column Content -->
                    <div class="flex flex-col">
                        <!-- Task Card -->
                        <div class="flex justify-between items-center w-full bg-white rounded-lg p-2 relative">
                            <h3 class="text-lg">Task Title</h3>
                            <!-- delete button -->
                            <button
                                class="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-sm">
                                <Icon name="mdi:delete-outline" color="white" size="16" />
                            </button>
                        </div>
                        <!-- Add Task Button -->
                        <button
                            class="mt-2 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors flex items-center justify-center gap-2 p-2 font-medium">
                            <Icon name="mdi:plus" color="white" size="24" />
                            Add Task
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>