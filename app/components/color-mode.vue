<script setup lang="ts">
  const colorMode = useColorMode()

  function setColor(color: typeof colorMode.preference) {
    colorMode.preference = color
    open.value = false
  }

  const open = ref(false)
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="icon">
        <Icon
          name="lucide:sun"
          class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        />
        <Icon
          name="lucide:moon"
          class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="colorMode.preference = 'light'">
        <div class="flex"><Icon name="lucide:sun" /></div>
        Light
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'dark'">
        <div class="flex">
          <Icon name="lucide:moon" />
        </div>
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'system'">
        <div class="flex sm:hidden">
          <Icon name="lucide:smartphone" />
        </div>
        <div class="hidden sm:flex">
          <Icon name="lucide:monitor" />
        </div>
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped></style>
