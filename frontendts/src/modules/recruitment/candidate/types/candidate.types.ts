import type { candidateFormValues } from "../validations/candidate.schema";

export type CandidateFormValues = candidateFormValues;

export type FormFieldConfig = {
  name: keyof CandidateFormValues;
  label: string;
  type: string;
  placeholder: string;
};