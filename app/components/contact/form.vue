<script setup lang="ts">
  import { contactFormSchema } from '~~/shared/schema'
  import { Input } from '../ui/input'
  import { Textarea } from '../ui/textarea'
  import { toast } from 'vue-sonner'
  const state = reactive({
    name: {
      label: 'Name',
      value: '',
      error: '',
      element: shallowRef(Input),
      placeholder: 'What should I call You',
    },
    email: {
      label: 'Email',
      value: '',
      error: '',
      element: shallowRef(Input),
      placeholder: 'you@email.com',
    },
    message: {
      label: 'Message',
      value: '',
      error: '',
      element: shallowRef(Textarea),
      placeholder: 'Your lovely message',
    },
  })

  const payload = ref<object | null>(null)
  const { data, error, execute, status } = useFetch('/api/contact', {
    immediate: false,
    watch: false,
    method: 'post',
    body: payload,
  })

  async function submitForm() {
    const result = contactFormSchema.safeParse({
      name: state.name.value,
      email: state.email.value,
      message: state.message.value,
    })
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors
      state.name.error = errors.name?.[0] || ''
      state.email.error = errors.email?.[0] || ''
      state.message.error = errors.message?.[0] || ''
      return null
    }
    payload.value = result.data
    toast.promise(async () => await execute(), {
      loading: 'Sending message',
      success: () => 'Message has been send ',
    })
    console.log('not waiting')
    console.log(data.value)
  }
  watch(status, v => {
    if (v === 'success') {
      payload.value = null
      state.name.value = ''
      state.email.value = ''
      state.message.value = ''
    }
  })
  function handleChange(field: keyof typeof state) {
    if (state[field]?.error) {
      state[field].error = ''
    }
  }
</script>

<template>
  <form @submit.prevent="submitForm" class="w-full">
    <Card>
      <CardHeader>
        <CardTitle> Get in touch </CardTitle>
      </CardHeader>
      <CardContent class="space-y-2">
        <template v-for="field in state" :key="field">
          <div class="space-y-1">
            <Label>{{ field.label }}</Label>
            <Component
              :is="field.element"
              :name="String(field.label).toLowerCase()"
              type="text"
              required
              v-model="field.value"
              :ariaInvalid="Boolean(field.error)"
              @blur="handleChange(String(field.label).toLowerCase() as keyof typeof state)"
              :placeholder="field.placeholder"
              class="overflow-hidden"
            />
            <Label v-if="field.error" class="text-destructive">{{ field.error }}</Label>
          </div>
        </template>
      </CardContent>
      <CardFooter>
        <Button class="w-full" :disabled="status === 'pending'">
          <Icon name="lucide:send" type="submit" /> Send Message</Button
        >
      </CardFooter>
    </Card>
  </form>
</template>

<style scoped></style>
