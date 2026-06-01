import { interviewTableData } from "../constants/interviewTableData";
import { Pencil } from "lucide-react";
import InterviewStatusBadge from "./InterviewStatusBadge";
import { Modal } from "../../../shared/components/Modal";
import { useState } from "react";
import InterviewScheduleForm from "../forms/InterviewScheduleForm";
import type { InterviewFormValues } from "../validations/interview.schema";

type candidateIdProps = {
  id: number | string | null;
};

function InterviewScheduleTable({ id }: candidateIdProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [selectedInterview, setSelectedInterview] =
    useState<InterviewFormValues | null>(null);

  const handleEdit = (interviewRow: InterviewFormValues) => {
    setSelectedInterview(interviewRow);
    setIsModalOpen(true);
  };

  const idParam = Number(id);
  const filteredData = idParam
    ? interviewTableData.filter((row) => row.candidateId === Number(id))
    : interviewTableData;
  console.log(filteredData);

  const tableDataClass =
    "whitespace-nowrap px-1.5 py-1 text-slate-800 group-hover:bg-slate-50";
  const iconStyle = "text-sm font-medium mr-2 h-5 w-5";
  const tableHeadClass = `${tableDataClass} font-semibold uppercase bg-slate-200`;

  return (
    <div className="card p-3">
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
                    <button onClick={() => handleEdit(interviewRow)}>
                      <Pencil
                        className={`${iconStyle} text-amber-600 hover:text-amber-600`}
                      />
                    </button>
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
                onSuccess={() => setIsModalOpen(false)}
              />
            )}

            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default InterviewScheduleTable;
