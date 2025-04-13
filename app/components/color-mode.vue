<script setup lang="ts">
  const colorMode = useColorMode()

  function setColor(color: typeof colorMode.preference) {
    colorMode.preference = color
  }
</script>

<template>
  <div class="inline-flex">
    <Button
      size="icon"
      :variant="colorMode.preference === 'light' ? 'secondary' : 'outline'"
      class="rounded-l-xl rounded-r-none border border-r-0"
      @click="() => setColor('light')"
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
      @click="() => setColor('dark')"
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
      @click="() => setColor('system')"
    >
      <Icon
        name="lucide:monitor"
        :class="{ 'text-indigo-500': colorMode.preference === 'system' }"
        class="text-lg"
      />
    </Button>
  </div>
</template>

<style scoped></style>
