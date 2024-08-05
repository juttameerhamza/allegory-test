import { z } from 'zod';

const signInFormSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Enter a valid email' })
});

export type SignInFormData = z.infer<typeof signInFormSchema>;

export { signInFormSchema };
