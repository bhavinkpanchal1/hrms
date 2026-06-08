import emailjs from "@emailjs/browser";

export type InterviewEmailPayload = {
  candidateName: string;
  candidateEmail: string;
  interviewDate: string;
  interviewTime: string;
  interviewMode: string;
};

export const sendInterviewEmail = async (
   payload: InterviewEmailPayload
) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        candidate_name:
        payload.candidateName,

      candidate_email:
        payload.candidateEmail,

      interview_date:
        payload.interviewDate,

      interview_time:
        payload.interviewTime,

      interview_mode:
        payload.interviewMode,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return response;
  } catch (error) {
    console.error("Email Error:", error);
    throw error;
  }
};