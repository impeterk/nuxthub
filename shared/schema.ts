import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string({ message: 'Please tell me your name ' }),
  email: z.string().email(),
  message: z.string({ message: 'Write something nice' }),
})
