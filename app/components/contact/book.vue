<script setup lang="ts">
  import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
  const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
</script>
<template>
  <Card>
    <CardHeader>
      <CardTitle>Book a meeting </CardTitle>
    </CardHeader>
    <CardContent class="grid grid-cols-2">
      <Calendar
        v-model="value"
        :weekday-format="'short'"
        :week-starts-on="1"
        class="flex flex-col items-center"
      />

      <ContactTimeGrid />
    </CardContent>
    <CardFooter>
      <Button class="w-full">
        <Icon name="lucide:calendar-check" type="submit" />Request a meeting</Button
      >
    </CardFooter>
  </Card>
</template>

<style scoped></style>
