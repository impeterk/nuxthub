<script setup lang="ts">
  const hours = [9, 10, 11, 12, 13, 14, 15, 16]
  const mins = ['00', '30']
  const active = defineModel()
</script>
<template>
  <div class="flex flex-col items-center justify-center gap-4">
    <CardTitle class=""> Pick time </CardTitle>
    <div class="grid auto-rows-min grid-cols-4 gap-x-2 gap-y-3">
      <template v-for="h in hours" :key="h">
        <div class="flex flex-col gap-2 rounded-none">
          <template v-for="m in mins" :key="m">
            <Button
              @click.prevent="active = `${h}:${m}`"
              :variant="active === `${h}:${m}` ? 'default' : 'ghost'"
            >
              {{ h }}: {{ m }}
            </Button>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>
