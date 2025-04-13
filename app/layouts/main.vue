<script setup lang="ts"></script>

<template>
  <div class="grid h-full grid-rows-[1fr_auto] sm:grid-rows-[auto_1fr_auto]">
    <header class="bg-background sticky top-0 left-0 z-10 hidden border border-b sm:block">
      <div class="container mx-auto py-2">
        <ClientOnly>
          <ColorMode />
          <template #fallback>
            <Button size="icon" variant="outline" class="rounded-l-xl rounded-r-none border-r-0">
              <Icon name="lucide:sun" class="text-lg" />
            </Button>
            <Button size="icon" variant="outline" class="rounded-none border-r-0 border-l-0">
              <Icon name="lucide:moon" class="text-lg" />
            </Button>
            <Button size="icon" variant="outline" class="rounded-l-none rounded-r-xl border-l-0">
              <Icon name="lucide:monitor" class="text-lg" />
            </Button>
          </template>
        </ClientOnly>
      </div>
    </header>
    <main class="min-h-[1000px]">
      <slot />
    </main>
    <footer class="bg-background bottom-0 left-0 z-10 max-sm:sticky">
      <Button variant="ghost" @click="console.log('hello')">Yes</Button>
    </footer>
  </div>
</template>

<style scoped></style>
