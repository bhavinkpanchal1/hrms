import { z } from "zod";

export const candidateSchema = z.object({
  firstName: z.string().min(1, "First name required"),
  lastName: z.string().min(1, "Last name required"),
  email: z.email("Invalid email address"),
  phone: z.string().min(10, "Enter valid phone number"),
  experience: z.string().min(1, "Experience is required"),
  skills: z.string().min(1, "Skills is required"),
  currentCompany: z.string().min(1, "Current Company is required"),
});