import { interviewTableData } from "../constants/interviewTableData";
import { Pencil } from "lucide-react";
import InterviewStatusBadge from "./InterviewStatusBadge";

function InterviewScheduleTable() {
  const tableDataClass =
    "whitespace-nowrap px-1.5 py-1 text-slate-800 group-hover:bg-slate-50";
  const iconStyle = "text-sm font-medium mr-2 h-5 w-5";
	const tableHeadClass = `${tableDataClass} font-semibold uppercaseb bg-slate-200`;

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
            {interviewTableData.map((interviewRow) => {
              console.log(interviewRow);
							const formatInterviewDate = new Intl.DateTimeFormat('en-US', {
        				year: 'numeric',
        				month: 'short', // "Jan", "Feb"
        				day: '2-digit'  // "01", "02"
      				}).format(new Date(interviewRow["interviewDate"]));

              return (
                <tr className="border-y border-transparent border-b-slate-200 hover:bg-slate-50"
                  key={interviewRow["candidateId"]}
									>
                  <td className={`${tableDataClass} `}>{formatInterviewDate}</td>
                  <td className={`${tableDataClass} `}>{interviewRow["interviewType"]}</td>
                  <td className={`${tableDataClass} `}>{interviewRow["time"]}</td>
                  <td className={`${tableDataClass} `}>{interviewRow["interviewer"]}</td>
                  <td className={`${tableDataClass} `}>{interviewRow["interviewMode"]}</td>
                  <td className={`${tableDataClass} `}>
										<InterviewStatusBadge badge={interviewRow["interviewRoundStatus"]}/>
										</td>
                  <td className={`${tableDataClass} `}>
                    <Pencil
                      className={`${iconStyle} text-amber-600 hover:text-amber-600`}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default InterviewScheduleTable;