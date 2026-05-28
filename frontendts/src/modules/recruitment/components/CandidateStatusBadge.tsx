import type { CandidateFormValues } from "../types/candidate.types";

type CandidateStatusBadgeProps = {
  badge: CandidateFormValues["status"];
};

function CandidateStatusBadge({ badge }: CandidateStatusBadgeProps) {
  const statusStyles = {
    Created: "bg-blue-100 text-blue-700",
  	Screenning: "bg-yellow-100 text-yellow-700",
  	Technical: "bg-purple-100 text-purple-700",
  	Hired: "bg-green-100 text-green-700",
  	Rejected: "bg-red-100 text-red-700",
  } as const;
  return (
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusStyles[badge]} `} >
			{badge}
		</span>
  );
}

export default CandidateStatusBadge;
