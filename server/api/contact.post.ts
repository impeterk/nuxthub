import { contactFormSchema } from '~~/shared/schema'
import { tables, useDrizzle } from '../utils/drizzle'

export default defineEventHandler(async event => {
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
  const message = useDrizzle().insert(tables.messages).values(result.data).returning()
  console.log({ message })

  return 'Hello route'
})
