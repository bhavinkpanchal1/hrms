import { useNavigate } from "react-router-dom";
import Button from "../../../shared/components/Button";
import CandidateForm from "../forms/CandidateForm";

function CreateCandidatePage() {
  const navigate = useNavigate();
  return (
    <>
      <Button className="bg-violet-700 text-sm rounded-xl text-white px-3 py-2 ml-auto" onClick={() => navigate(-1)} value="Back">
        Back
      </Button>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-center">Create Candidate Page</h1>
        {/* test */}
        <CandidateForm />
      </div>
    </>
  );
}

export default CreateCandidatePage;