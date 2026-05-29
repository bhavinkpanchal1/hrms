import type { InterviewFormValues } from "../validations/interview.schema";

export const interviewTableData: InterviewFormValues[] = [
  {
    id: 1,
    candidateId: 101,
    interviewDate: "2026-05-28",
    time: "10:30 AM",
    interviewType: "Technical",
    interviewer: "Bhavin Patel",
    interviewMode: "Online",
    interviewRoundStatus: "Scheduled",
    remark: "React + TypeScript round",
  },
  {
    id: 2,
    candidateId: 102,
    interviewDate: "2026-05-29",
    time: "02:00 PM",
    interviewType: "HR",
    interviewer: "Neha Sharma",
    interviewMode: "Offline",
    interviewRoundStatus: "Completed",
    remark: "Good communication skills",
  },
  {
    id: 3,
    candidateId: 103,
    interviewDate: "2026-05-30",
    time: "11:15 AM",
    interviewType: "Managerial",
    interviewer: "Amit Verma",
    interviewMode: "Online",
    interviewRoundStatus: "Cancelled",
    remark: "Candidate unavailable",
  },
];
