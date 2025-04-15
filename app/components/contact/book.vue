<script setup lang="ts">
  import {
    DateFormatter,
    type DateValue,
    getLocalTimeZone,
    parseDate,
    today,
  } from '@internationalized/date'
  import { toast } from 'vue-sonner'
  const day = ref(today(getLocalTimeZone())) as Ref<DateValue>
  const hour = ref('')
  const email = ref('')
  const df = new DateFormatter('sk-SK')

  const date = computed(() => df.format(day.value.toDate('Europe/Bratislava')))

  const { data, error, execute, status } = useFetch('/api/consultation', {
    watch: false,
    immediate: false,
    method: 'post',
    body: { date, hour, email },
  })

  async function submitConsultation() {
    if (status.value === 'pending') {
      return null
    }
    await execute()
  }
</script>
<template>
  <form class="w-full" @submit.prevent="submitConsultation">
    <Card>
      <CardHeader>
        <CardTitle>Book a meeting </CardTitle>
        {{ day }}
      </CardHeader>
      <CardContent class="grid grid-cols-2">
        <Calendar
          v-model="day"
          :weekday-format="'short'"
          :week-starts-on="1"
          class="flex flex-col items-center"
        />
        <div class="flex flex-col">
          <ContactTimeGrid v-model="hour" />
          <Label>email</Label>
          <Input v-model="email" required name="email" type="email" />
        </div>
      </CardContent>
      <CardFooter>
        <Button class="w-full" :disabled="status === 'pending'" type="submit">
          <Icon name="lucide:calendar-check" type="submit" />Request a meeting</Button
        >
      </CardFooter>
    </Card>
  </form>
</template>

<style scoped></style>
