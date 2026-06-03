import { useForm } from "react-hook-form";
import Input from "../../../shared/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  interviewSchema,
  type InterviewFormValues,
} from "../validations/interview.schema";
import { departments } from "../../../shared/constants/departments";
import Select from "../../../shared/components/Select";
import { interviewRounds } from "../constants/interviewRound";
import { interviewModes } from "../constants/interviewModes";
import { interviewStatus } from "../constants/interviewStatus";
import { useEffect, useState } from "react";
import { sendInterviewEmail } from "../../../shared/utils/emailService";
import Swal from "sweetalert2";
import { hideLoader, showLoader } from "../../../shared/utils/swal";
import Button from "../../../shared/components/Button";

type interviewFormProps = {
  defaultValues?: InterviewFormValues;
  handleCloseModal?: () => void;
};

function InterviewScheduleForm({
  defaultValues,
  handleCloseModal,
}: interviewFormProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<InterviewFormValues>({
    resolver: zodResolver(interviewSchema),
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);
  const errorStyle = "text-red-500 text-sm mt-1 mb-1";

  const onSubmit = async (data: InterviewFormValues) => {
    try {
      setIsSubmitting(true);
      showLoader("Sending Email...");
      console.log(data);
      const emailResponse = await sendInterviewEmail(data);

      hideLoader();

      await Swal.fire({
        icon: "success",
        title: "Success",
        text: "Interview scheduled and email sent successfully.",
      });

      console.log(emailResponse);

      handleCloseModal?.();
    } catch (error) {
      hideLoader();
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Email Failed",
        text: error instanceof Error ? error.message : "Something went wrong",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col">
          <label className="text-xs">Department</label>
          <Select
            options={departments}
            placeholder="Select department"
            {...register("departments")}
          />
          <p className={errorStyle}>{errors["departments"]?.message || ""}</p>
        </div>
        <div className="flex flex-col">
          <label>Date</label>
          <Input
            type="date"
            placeholder="Enter Date"
            {...register("interviewDate")}
          />
          <p className={errorStyle}>{errors["interviewDate"]?.message || ""}</p>
        </div>

        <div className="flex flex-col">
          <label>Time</label>
          <Input
            type="time"
            placeholder="Enter Time"
            {...register("interviewTime")}
          />
          <p className={errorStyle}>{errors["interviewTime"]?.message || ""}</p>
        </div>

        <div className="flex flex-col">
          <label>Round</label>
          <Select
            options={interviewRounds}
            placehoder="Select Round"
            {...register("interviewType")}
          />
          <p className={errorStyle}>{errors["interviewType"]?.message || ""}</p>
        </div>

        <div className="flex flex-col">
          <label>Interview mode</label>
          <Select
            options={interviewModes}
            placehoder="Select Mode"
            {...register("interviewMode")}
          />
          <p className={errorStyle}>{errors["interviewMode"]?.message || ""}</p>
        </div>
        <div className="flex flex-col">
          <label>Interviewer</label>
          <select
            {...register("interviewer")}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Interviewer</option>
            <option value="Bhavin Patel">Bhavin Patel</option>
          </select>
          <p className={errorStyle}>{errors["interviewer"]?.message || ""}</p>
        </div>

        <div className="flex flex-col">
          <label>Interview Status</label>
          <Select
            options={interviewStatus}
            placehoder="Select Status"
            {...register("interviewRoundStatus")}
          />
          <p className={errorStyle}>
            {errors["interviewRoundStatus"]?.message || ""}
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={handleCloseModal}
          className="px-4 py-2 border rounded"
        >
          Cancel
        </button>
        <Button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
          loading={isSubmitting}
        >
          Save
        </Button>
      </div>
    </form>
  );
}

export default InterviewScheduleForm;
