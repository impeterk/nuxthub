<script setup lang="ts"></script>

<template>
  <div class="grid min-h-full grid-rows-[auto_1fr_auto]">
    <Header />
    <main class="min-h-[1000px]">
      <slot />
    </main>
    <footer>
      <Button variant="ghost" @click="console.log('hello')">Yes</Button>
    </footer>
  </div>
</template>

<style scoped></style>
