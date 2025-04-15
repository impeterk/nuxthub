export default defineEventHandler(async event => {
  const data = await readBody(event)
  console.log(data)
  const consultation = await useDrizzle().insert(tables.consutations).values(data).returning().get()
  console.log({ consultation })
  return 'Hello meeting'
})
