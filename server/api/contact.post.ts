import { contactFormSchema } from '~~/shared/schema'
import { tables, useDrizzle } from '../utils/drizzle'

export default defineEventHandler(async event => {
  await new Promise(res => setTimeout(res, 3000))
  const body = await readBody(event)
  const result = contactFormSchema.safeParse(body)
  if (!result.success) {
    console.log({ body })
    throw createError({
      statusCode: 400,
      statusMessage: 'Something went wrong, please provide correct data',
    })
  }
  console.log(result.data)
  const message = await useDrizzle().insert(tables.messages).values(result.data).returning().get()
  console.log({ message })

  return 'Hello route'
})
