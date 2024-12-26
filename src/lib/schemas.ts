import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot be longer than 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes",
    )
    .refine(
      (value) => value.trim().length > 0,
      "Name cannot be empty or just whitespace",
    ),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email cannot be longer than 254 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message cannot be longer than 500 characters")
    .refine(
      (value) => value.trim().length > 0,
      "Message cannot be empty or just whitespace",
    ),
});
