
import {z} from 'zod';


export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(10, "Password must be at least 10 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });


  export type TSignUpSchema = z.infer<typeof signUpSchema>;