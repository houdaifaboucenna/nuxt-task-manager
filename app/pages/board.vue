<template>
    <div>
        <section class="flex flex-col w-full justify-center">
            <div class="w-full h-full flex justify-center gap-4">
                <BoardList v-for="list in data?.lists" :list="list" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "Board",
});

const { data, error } = useBoard();
</script>