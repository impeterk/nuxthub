<script setup lang="ts">
  const colorMode = useColorMode()
</script>

<template>
  <div class="inline-flex">
    <ClientOnly>
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
      <Button
        size="icon"
        :variant="colorMode.preference === 'light' ? 'secondary' : 'outline'"
        class="rounded-l-xl rounded-r-none border border-r-0"
        @click="colorMode.preference = 'light'"
      >
        <Icon
          name="lucide:sun"
          class="text-lg"
          :class="{ 'text-indigo-500': colorMode.preference === 'light' }"
        />
      </Button>
      <Button
        size="icon"
        :variant="colorMode.preference === 'dark' ? 'secondary' : 'outline'"
        class="rounded-none border border-r-0 border-l-0"
        @click="colorMode.preference = 'dark'"
      >
        <Icon
          name="lucide:moon"
          :class="{ 'text-indigo-500': colorMode.preference === 'dark' }"
          class="text-lg"
        />
      </Button>
      <Button
        size="icon"
        :variant="colorMode.preference === 'system' ? 'secondary' : 'outline'"
        class="rounded-l-none rounded-r-xl border border-l-0"
        @click="colorMode.preference = 'system'"
      >
        <Icon
          name="lucide:monitor"
          :class="{ 'text-indigo-500': colorMode.preference === 'system' }"
          class="text-lg"
        />
      </Button>
    </ClientOnly>
  </div>
</template>

<style scoped></style>
