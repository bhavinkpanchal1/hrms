import { z } from "zod";

export const candidateSchema = z.object({
  id: z.number().optional(),
  firstName: z.string().min(1, "First name required"),
  lastName: z.string().min(1, "Last name required"),
  email: z.email("Invalid email address"),
  phone: z
    .string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^\d+$/, "Only numbers allowed"),
  experience: z
    .string()
    .min(1, "Experience is required")
    .regex(/^\d+$/, "Only numbers allowed")
    .refine((val) => Number(val) <= 55, {
      message: "Experience cannot exceed 55 years",
    }),
  skills: z.string().min(1, "Skills is required"),
  currentCompany: z.string().min(1, "Current Company is required"),

  status: z
    .enum(["Created", "Shortlisted", "Technical", "Hired", "Rejected"]),
});

export type candidateFormValues = z.infer<typeof candidateSchema>;
