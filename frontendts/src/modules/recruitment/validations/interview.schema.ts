import { z } from "zod"

export const interviewSchema = z.object({
    id: z.number().optional(),
    candidateId: z.number(),
    interviewDate: z.string(),
    time: z.string(),
    interviewType: z.enum([
    "HR",
    "Technical",
    "Managerial",
  ]),
    interviewer: z.string().min(1),
    interviewMode: z.enum([
    "Online",
    "Offline",
  ]),
    interviewRoundStatus: z.enum([
    "Scheduled",
    "Completed",
    "Cancelled",
  ]),
    remark: z.string().optional(),
});

export type InterviewFormValues  = z.infer<typeof interviewSchema>

