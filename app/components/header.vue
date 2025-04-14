<script setup lang="ts"></script>

<template>
  <header class="bg-background sticky top-0 left-0 z-10 block border border-b px-5">
    <div class="container mx-auto flex items-center justify-between py-2">
      <NuxtLink to="/" class="inline-flex items-center gap-1">
        <NuxtImg src="/hero-logo.avif" class="mr-1.5 size-6 dark:invert" />
        <span class="font-semibold"> peterk.dev </span>
      </NuxtLink>
      <ClientOnly>
        <ColorMode />
        <template #fallback>
          <Button size="icon" variant="outline"> </Button>
        </template>
      </ClientOnly>
    </div>
  </header>
</template>

<style scoped></style>
