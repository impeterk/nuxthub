<script setup lang="ts"></script>

<template>
  <div class="grid h-full grid-rows-[1fr_auto] sm:grid-rows-[auto_1fr_auto]">
    <Header />
    <main class="min-h-[1000px]">
      <slot />
    </main>
    <footer class="bg-background bottom-0 left-0 z-10 max-sm:sticky">yes</footer>
  </div>
</template>

<style scoped></style>
