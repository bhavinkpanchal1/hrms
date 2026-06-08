import { Link, useParams } from "react-router-dom";

import DetailRow from "../../../../shared/components/DetailRow";
import { CandidateTableData } from "../../candidate/constants/candidateTableData";
import InterviewScheduleTable from "../components/InterviewScheduleTable";


function CandidateDetailsPage() {
  const { id } = useParams();

  const candidate = CandidateTableData.find(
    (item) => {
      if (!item.id) return false;
      return item.id.toString() === id;
    }
  );

  if (!candidate) {
    return (
      <div className="p-6 text-red-500">
        Candidate not found.
      </div>
    )
  }
  return (
    <div className="max-w-4xl mx-auto p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Candidate Details
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            View candidate information
          </p>
        </div>

        <Link
          to="/recruitment/candidates"
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← Back To Candidates
        </Link>

      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Basic Information
        </h2>

        <DetailRow label="ID" value={candidate.id ?? ""} />

        <DetailRow
          label="First Name"
          value={candidate.firstName}
        />

        <DetailRow
          label="Last Name"
          value={candidate.lastName}
        />

        <DetailRow
          label="Email"
          value={candidate.email}
        />

        <DetailRow
          label="Phone"
          value={candidate.phone}
        />

        <DetailRow
          label="Skills"
          value={candidate.skills}
        />

        <DetailRow
          label="Experience"
          value={candidate.experience}
        />

      </div>

      <InterviewScheduleTable id={id} />

    </div>
  );
}

export default CandidateDetailsPage;