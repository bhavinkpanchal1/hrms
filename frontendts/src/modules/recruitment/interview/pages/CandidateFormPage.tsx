import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../shared/components/Button";
import CandidateForm from "../forms/CandidateForm";
import { CandidateTableData } from "../constants/candidateTableData";
import { ArrowLeft } from "lucide-react";

function CandidateFormPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditMode = Boolean(id);

  const candidate = CandidateTableData.find(
    (item) => item.id.toString() === id,
  );

  return (
    <>
      <Button
        type="button"
        onClick={() => navigate(-1)}
        className="ml-auto flex items-center gap-2 rounded-xl bg-violet-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-800"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-center text-3xl mb-4">
          {isEditMode ? "Edit Candidate Page" : "Create Candidate Page"}
        </h1>
        {/* test */}
        <CandidateForm defaultValues={candidate} isEditMode={isEditMode} />
      </div>
    </>
  );
}

export default CandidateFormPage;
