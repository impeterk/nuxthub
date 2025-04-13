<script setup lang="ts"></script>

<template>
  <header class="bg-background sticky top-0 left-0 z-10 hidden border border-b px-5 sm:block">
    <div class="container mx-auto flex items-center justify-between py-2">
      <NuxtLink to="/" class="inline-flex items-center gap-1">
        <Icon name="mdi:console-line" class="text-2xl" />
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
