import {z} from "zod"
 
 

export const SignInSchema= z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  });


  export const SignUpSchema= z.object({
     email: z.string().email({ message: "Invalid email address" }),
     name: z.string().min(1, { message: "Name is required" }),
     password: z
       .string().min(8, { message: "Password must be at least 8 characters long" }),
      avatar:z.string().min(1, { message: "Avatar is required" }),
       
  })