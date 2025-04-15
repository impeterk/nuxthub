import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

export const messages = sqliteTable('messages', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
})

export const consutations = sqliteTable('consultations', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull(),
  date: text('date').notNull(),
  time: text('time').notNull(),
  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
})
