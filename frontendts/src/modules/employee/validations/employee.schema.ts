import {z} from "zod";
import { departments } from "../../../shared/constants/departments";
import { designation } from "../../../shared/constants/designation";
import { employmentStatus } from "../../../shared/constants/employmentStatus";

export const employeeSchema = z.object({
 id: z.string().optional(),
  firstName: z.string().min(1, "First name required"),
  lastName: z.string().min(1, "Last name required"),
  email: z.email("Invalid email address"),
  phone: z
    .string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^\d+$/, "Only numbers allowed"),
  dateOfBirth: z.string().optional(),
  officialEmail: z.email("Invalid Email"),
  workLocation: z.string(),
  department: z.enum(departments).optional(),
  designation: z.enum(designation).optional(),
  dateOfJoining: z.string().optional(),
  document: z.string().optional(),
  employmentStatus: z.enum(employmentStatus)
}); 

export type EmployeeFormValues = z.infer<typeof employeeSchema>;