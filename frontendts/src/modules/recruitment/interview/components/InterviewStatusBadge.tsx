import type { InterviewFormValues } from "../validations/interview.schema";

type InterviewStatusBadgeprops = {
  badge: InterviewFormValues["interviewRoundStatus"];
};
function InterviewStatusBadge({ badge }: InterviewStatusBadgeprops) {
  const badgeColor = {
    Scheduled: "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
  };
  return (
    <>
      <span
        className={`rounded-full px-2 py-1 text-xs font-medium ${badgeColor[badge]}`}
      >
        {badge}
      </span>
    </>
  );
}

export default InterviewStatusBadge;
