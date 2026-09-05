<template>
    <div>
        <section class="flex flex-col w-full justify-center">
            <div class="w-full h-full flex justify-center items-center gap-4">
                <BoardList v-for="list in data?.lists" :list="list" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import type { BoardListPayload } from '~/types/Board';

useHead({
    title: "Board",
});

const { data } = await useFetch<BoardListPayload>("/api/lists");
</script>