import { departments } from "../../../shared/constants/departments";
import { designation } from "../../../shared/constants/designation";
import type { EmployeeFormValues } from "../validations/employee.schema";

type EmployeeFormField = {
  name: keyof EmployeeFormValues;
  label: string;
  type:| "text"
    | "email"
    | "date"
    | "select"
    | "file";
    placeholder?: string;
    options?: readonly string[];
}
export const employeeFormField: EmployeeFormField[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter first name",
  },

  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter last name",
  },

  {
    name: "email",
    label: "Personal Email",
    type: "email",
    placeholder: "Enter personal email",
  },

  {
    name: "phone",
    label: "Phone",
    type: "text",
    placeholder: "Enter phone number",
  },

  {
    name: "dateOfBirth",
    label: "Date of Birth",
    type: "date",
    placeholder: "",
  },

  {
    name: "officialEmail",
    label: "Official Email",
    type: "email",
    placeholder: "Enter official email",
  },

  {
    name: "workLocation",
    label: "Work Location",
    type: "text",
    placeholder: "Enter work location",
  },

  {
    name: "department",
    label: "Department",
    type: "select",
    options: departments,
  },

  {
    name: "designation",
    label: "Designation",
    type: "select",
    options: designation,
  },

  {
    name: "dateOfJoining",
    label: "Date Of Joining",
    type: "date",
    placeholder: "",
  },

  {
    name: "document",
    label: "Document",
    type: "file",
    placeholder: "",
  },

  {
    name: "employmentStatus",
    label: "Employment Status",
    type: "select",
    placeholder: "Select status",
  },
] as const;
