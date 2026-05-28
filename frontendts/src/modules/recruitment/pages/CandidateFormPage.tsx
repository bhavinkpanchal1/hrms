import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../shared/components/Button";
import CandidateForm from "../forms/CandidateForm";
import { CandidateTableData } from "../constants/candidateTableData";

function CandidateFormPage() {
  const navigate = useNavigate();
  const { id } = useParams<{id: string }>();
  const isEditMode = Boolean(id);

  const candidate = CandidateTableData.find(
    (item) => item.id.toString() === id
  );

  return (
    <>
      <Button className="bg-violet-700 text-sm rounded-xl text-white px-3 py-2 ml-auto" onClick={() => navigate(-1)} value="Back">
        Back
      </Button>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-center">{isEditMode ? 'Edit Candidate Page': 'Create Candidate Page'}</h1>
        {/* test */}
        <CandidateForm defaultValues={candidate} isEditMode={isEditMode} />
      </div>
    </>
  );
}

export default CandidateFormPage;