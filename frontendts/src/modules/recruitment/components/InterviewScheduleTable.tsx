import { interviewTableData } from "../constants/interviewTableData";
import { Pencil } from "lucide-react";
import InterviewStatusBadge from "./InterviewStatusBadge";
import { Modal } from "../../../shared/components/Modal";
import { useState } from "react";
import InterviewScheduleForm from "../forms/InterviewScheduleForm";
import type { InterviewFormValues } from "../validations/interview.schema";
import Select from "../../../shared/components/Select";
import { interviewStatus } from "../constants/interviewStatus";


type candidateIdProps = {
  id?: number | string | null;
};

const tableDataClass =
  "whitespace-nowrap px-1.5 py-1 text-slate-800 group-hover:bg-slate-50";
const iconStyle = "text-sm font-medium mr-2 h-5 w-5";
const tableHeadClass = `${tableDataClass} font-semibold uppercase bg-slate-200`;

function InterviewScheduleTable({ id }: candidateIdProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedInterview, setSelectedInterview] =
    useState<InterviewFormValues | null>(null);

  //Update Candidate id & status based on oarmas or dropdown filter
  const [filters, setFilters] = useState("Scheduled");
  const idParam = Number(id);

  //for Edit Schedule table & open modal
  const handleEditModal = (interviewRow: InterviewFormValues) => {
    setSelectedInterview(interviewRow);
    setIsModalOpen(true);
  };

  const handleFilterstatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(() => (e.target.value || "Scheduled" ));
  };

  //get candidate Id and filter the table data based on it
  const filteredData = interviewTableData.filter((row) => {
    const matchCandidate = idParam ? row.candidateId === idParam : true;
    const matchChangedstatus = filters
      ? row.interviewRoundStatus === filters
      : true;
    return matchCandidate && matchChangedstatus;
  });

  return (
    <div className="card p-3">
      <div className="w-full flex">
        <h2 className="text-2xl font-semibold">Scheduled Interview</h2>
        <div className="ml-auto">
          <Select
            options={interviewStatus}
            className="mb-3 lg:w-36"
            onChange={handleFilterstatus}
          />
        </div>
      </div>
      <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
        <table className="is-hoverable w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className={tableHeadClass}>Interview Date</th>
              <th className={tableHeadClass}>Interview Time</th>
              <th className={tableHeadClass}>Round</th>
              <th className={tableHeadClass}>Interviewer</th>
              <th className={tableHeadClass}>Interviewer Mode</th>
              <th className={tableHeadClass}>Interviewer Status</th>
              <th className={tableHeadClass}>Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {filteredData.map((interviewRow) => {
              const formatInterviewDate = new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short", // "Jan", "Feb"
                day: "2-digit", // "01", "02"
              }).format(new Date(interviewRow["interviewDate"]));

              return (
                <tr
                  className="border-y border-transparent border-b-slate-200 hover:bg-slate-50"
                  key={interviewRow.candidateId}
                >
                  <td className={`${tableDataClass} `}>
                    {formatInterviewDate}
                  </td>
                  <td>{interviewRow.interviewTime}</td>
                  <td className={`${tableDataClass} `}>
                    {interviewRow.interviewType}
                  </td>
                  <td className={`${tableDataClass} `}>
                    {interviewRow.interviewer}
                  </td>
                  <td className={`${tableDataClass} `}>
                    {interviewRow.interviewMode}
                  </td>
                  <td className={`${tableDataClass} `}>
                    <InterviewStatusBadge
                      badge={interviewRow["interviewRoundStatus"]}
                    />
                  </td>
                  <td className={`${tableDataClass} `}>
                    {interviewRow["interviewRoundStatus"] === "Scheduled" && (
                      <button onClick={() => handleEditModal(interviewRow)}>
                        <Pencil
                          className={`${iconStyle} text-amber-600 hover:text-amber-600`}
                        />
                      </button>
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
          title="Edit Interview"
        >
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Modify your application profile attributes below.
            </p>
            {selectedInterview && (
              <InterviewScheduleForm
                defaultValues={selectedInterview}
                handleCloseModal={() => setIsModalOpen(false)}
              />
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default InterviewScheduleTable;
