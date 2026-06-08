export const employmentStatus = [
  "Active",
  "Inactive",
  "Probation",
  "Notice Period",
  "Terminated",
  "Resigned",
  "On Leave",
] as const;

export type EmploymentStatus = (typeof employmentStatus)[number];