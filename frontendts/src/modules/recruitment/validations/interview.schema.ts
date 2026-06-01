import { z } from "zod"
import { interviewModes } from "../constants/interviewModes";
import { interviewRounds } from "../constants/interviewRound";
import { interviewStatus } from "../constants/interviewStatus";
import { departments } from "../../../shared/constants/departments";

export const interviewSchema = z.object({
    id: z.number().optional(),
    candidateId: z.number().optional(),
    interviewDate: z.string().min(1, "Interview Date is required"),
    interviewTime: z.string().min(1, "Interview Time is required"),
    departments: z.enum(departments, {
        message: "Department is required",
      }),
    interviewType: z.enum(interviewRounds, {
        message: "Select Round is required"
    }),
    interviewer: z.string().min(1, "Select interviewer"),
    interviewMode: z.enum(interviewModes, {
        message: "Select Mode is required"
    }),
    interviewRoundStatus: z.enum(interviewStatus, {
        message: "Select Status is required"
    }),
    remark: z.string().optional(),
});

export type InterviewFormValues  = z.infer<typeof interviewSchema>

