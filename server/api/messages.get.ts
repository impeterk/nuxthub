export default defineEventHandler(async event => {
  if (!event.context.auth) {
    throw createError({
      status: 403,
      message: 'You are not authorized my man',
    })
  }

  const messages = await useDrizzle().select().from(tables.messages).all()
  return messages
})
