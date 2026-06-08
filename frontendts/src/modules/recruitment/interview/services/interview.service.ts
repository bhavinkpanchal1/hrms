import { sendInterviewEmail } from "../../../../shared/services/emaill.service";
import { CandidateTableData } from "../../candidate/constants/candidateTableData";

import type { InterviewFormValues } from "../validations/interview.schema";

async function scheduleInterview(interview: InterviewFormValues) {
  const candidate = CandidateTableData.find(
    (candiateRow) => candiateRow.id === interview.candidateId,
  ); //later await getCandidateById() for api

  if (!candidate) {
    throw new Error("Candidate not found");
  }
  const candidateFullName = `${candidate.firstName} ${candidate.lastName}`;
  
  await new Promise((r) => setTimeout(r, 3000));

  return await sendInterviewEmail({
    candidateName: candidateFullName,
    candidateEmail: candidate.email,

    interviewDate: interview.interviewDate,

    interviewTime: interview.interviewTime,

    interviewMode: interview.interviewMode,
  });
}

export default scheduleInterview;
