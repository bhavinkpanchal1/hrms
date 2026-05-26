import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { CandidateFormValues } from "../types/candidate.types";

import { candidateSchema } from "../validations/candidate.schema";
import Button from "../../../shared/components/Button";
import FormField from "../../../shared/components/FormField";
import { formFieldData } from "./../constants/candidateFormFields"

function CandidateForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CandidateFormValues>({
    resolver: zodResolver(candidateSchema),
  });

  const inputTextStyle = "w-full border rounded-lg p-3";


  const onSubmit = (data: CandidateFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 md:grid-cols-2">
        {formFieldData.map((item) => (
          <FormField
            key={item.name}
            label={item.label}
            type={item.type}
            className={inputTextStyle}
            placeholder={item.placeholder}
            {...register(item.name)}
            error={errors[item.name]?.message}
          />
        ))
        }
        <Button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Create Candidate
        </Button>
      </div>
    </form>
  );
}

export default CandidateForm;
