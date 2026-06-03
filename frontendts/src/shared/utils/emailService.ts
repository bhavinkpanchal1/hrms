import emailjs from "@emailjs/browser";
import type { InterviewFormValues } from "../../modules/recruitment/validations/interview.schema";


const candidateEmail = "bhavin@techoma.io";
const candidateName = "Bhavin Test";

export const sendInterviewEmail = async (
  candidate: InterviewFormValues
) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        candidate_name: candidateName,
        candidate_email: candidateEmail,
        interview_date: candidate.interviewDate,
        interview_time: candidate.interviewTime,
        interview_mode: candidate.interviewMode,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return response;
  } catch (error) {
    console.error("Email Error:", error);
    throw error;
  }
};