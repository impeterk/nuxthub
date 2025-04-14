export default defineEventHandler(async () => {
  const messages = await useDrizzle().select().from(tables.messages).all()
  return messages
})
