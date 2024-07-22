import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+?[1-9][0-9]{7,14}$/i, "Invalid phone number"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  company: z.string().optional(),
  title: z.string().optional(),
  image: z.any().optional(),
});
