<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/board">Board</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <p>Copyright © 2026 Task Manager App. All rights reserved.</p>
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>