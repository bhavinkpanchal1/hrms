import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { candidateSchema } from "../validations/candidate.schema";
import Button from "../../../../shared/components/Button";
import FormField from "../../../../shared/components/FormField";

import { useEffect } from "react";
import type { CandidateFormValues } from "../types/candidate.types";
import { formFieldData } from "../constants/candidateFormFields";

type CandidateFormProps = {
  defaultValues?: CandidateFormValues;
  isEditMode?: boolean;
};

function CandidateForm({ defaultValues, isEditMode }: CandidateFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(candidateSchema),
    defaultValues,
  });

  useEffect(() => {
 if(defaultValues){
   reset(defaultValues);
 }
}, [defaultValues, reset]);

  const inputTextStyle = "w-full border rounded-lg p-3";

  const onSubmit = (data: CandidateFormValues) => {
    console.log(data);
  };

  //Added only for testing
  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="grid gap-4 md:grid-cols-2">
          {formFieldData.map((item) => (
            <FormField
              key={item.name}
              label={item.label}
              type={item.type}
              className={inputTextStyle}
              placeholder={item.placeholder}
              {...register(item.name)}
              error={errors[item.name]?.message || ""}
            />
          ))}
        </div>
        <div className="w-full mx-auto">
          <Button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mt-3"
          >
            {isEditMode ? "Update Candidate" : "Create Candidate"}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default CandidateForm;
