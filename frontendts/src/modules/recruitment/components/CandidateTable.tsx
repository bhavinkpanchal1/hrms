import { Link } from "react-router-dom";
import { CandidateTableData } from "../constants/candidateTableData";
import { tableHeaders } from "../constants/candidateTableHeader";
import { Pencil, Trash2, Eye, Calendar } from "lucide-react";
import CandidateStatusBadge from "./CandidateStatusBadge";
//import Modal from "../../../shared/components/Modal";
import { useState } from "react";
import { Modal } from "../../../shared/components/Modal";
import InterviewScheduleForm from "../forms/InterviewScheduleForm";
import Button from "../../../shared/components/Button";

const HIDDEN_STATUSES = ["Created", "Rejected", "Hired"];

const tableDataClass =
  "whitespace-nowrap px-1.5 py-1 text-slate-800 group-hover:bg-slate-50";
const iconStyle = "text-sm font-medium mr-2 h-5 w-5";

function CandidateTable() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [interviews, setInterviews] = useState(CandidateTableData);
  //Delete Candidate
  const handleDelete = (candidateId: number) => {
    console.log(candidateId);
    setInterviews((prev) => prev.filter((row) => row.id !== candidateId));
  };
  
  return (
    <div className="card p-3">
      <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
        <table className="is-hoverable w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              {tableHeaders.map((columnHead) => (
                <th
                  key={columnHead.key}
                  className={
                    tableDataClass + ` font-semibold uppercaseb bg-slate-200`
                  }
                >
                  {columnHead.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {interviews.map((candidateRow) => {
              const canSchedule = !HIDDEN_STATUSES.includes(
                candidateRow.status,
              );
              return (
                <tr
                  key={candidateRow.id}
                  className="border-y border-transparent border-b-slate-200 hover:bg-slate-50"
                >
                  <td className={tableDataClass}>{candidateRow.id}</td>
                  <td className={tableDataClass}>{candidateRow.firstName}</td>
                  <td className={tableDataClass}>{candidateRow.lastName}</td>
                  <td className={tableDataClass}>{candidateRow.email}</td>
                  <td className={tableDataClass}>{candidateRow.phone}</td>
                  <td className={tableDataClass}>{candidateRow.skills}</td>
                  <td className={tableDataClass}>{candidateRow.experience}</td>
                  <td className={tableDataClass}>
                    <CandidateStatusBadge badge={candidateRow.status} />
                  </td>
                  <td className={`${tableDataClass} flex items-center`}>
                    <Link
                      className={`${iconStyle} text-blue-600 hover:text-blue-800`}
                      to={`/recruitment/candidates/${candidateRow.id}`}
                    >
                      <Eye />
                    </Link>
                    <Link
                      to={`/recruitment/candidates/form/${candidateRow.id}`}
                    >
                      <Pencil
                        className={`${iconStyle} text-amber-600 hover:text-amber-600`}
                      />
                    </Link>
                    <Button
                      type="button"
                      onClick={() => handleDelete(candidateRow.id)}
                    >
                      <Trash2
                        className={`${iconStyle} text-red-600 hover:text-red-800`}
                      />
                    </Button>
                    <Link
                      to={`/recruitment/candidates/form/${candidateRow.id}`}
                    ></Link>

                    {canSchedule && (
                      <>
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="font-medium"
                        >
                          <Calendar
                            className={`${iconStyle} text-green-600 hover:text-green-600`}
                          />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Schedule Interview"
        >
          {/* Everything passed down here becomes the 'children' prop */}
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Modify your application profile attributes below.
            </p>
            <InterviewScheduleForm
              handleCloseModal={() => setIsModalOpen(false)}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default CandidateTable;
