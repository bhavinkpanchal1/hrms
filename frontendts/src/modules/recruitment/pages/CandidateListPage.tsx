import { Link } from "react-router-dom";
import CandidateTable from "../components/CandidateTable";

function CandidateListPage() {
  return (
    <>
      <div>
        <h2>Candidate List page</h2>
        <div className="flex mt-1 mb-2">
        <Link
          to="/recruitment/candidates/create"
          className="bg-violet-700 text-sm rounded-xl text-white px-3 py-2 ml-auto"
        >
          Create Candidate
        </Link>
        </div>
        
        <CandidateTable />
      </div>
    </>
  );
}

export default CandidateListPage;