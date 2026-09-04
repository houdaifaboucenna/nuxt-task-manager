<template>
    <div>
        <header>
            <nav class="flex w-full justify-start px-8 bg-blue-600 p-4 text-white">
                <ul class="flex justify-start gap-8 text-lg font-medium ">
                    <li class="hover:bg-blue-700 p-2 rounded-md cursor-pointer transition-colors">
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li class="hover:bg-blue-700 p-2 rounded-md cursor-pointer transition-colors">
                        <NuxtLink to="/board">Board</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main class="flex w-full justify-center min-h-screen py-10 px-16 bg-white">
            <slot />
        </main>
        <footer class="flex w-full justify-center bg-blue-600 p-4 text-white">
            <p>Copyright © {{ new Date().getFullYear() }} Task Manager App. All rights reserved.</p>
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>