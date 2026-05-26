export type CandidateFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  skills: string;
  currentCompany: string;
};

export type FormFieldConfig = {
  name: keyof CandidateFormValues;
  label: string;
  type: string;
  placeholder: string;
};