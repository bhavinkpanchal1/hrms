import { Link } from "react-router-dom";
import { CandidateTableData } from "../constants/candidateTableData";
import { tableHeaders } from "../constants/candidateTableHeader";
import CandidateStatusBadge from "./CandidateStatusBadge";


function CandidateTable() {
  const tableDataClass ="whitespace-nowrap px-1.5 py-1 text-slate-800 group-hover:bg-slate-50";
  return (
    <div className="card p-3">
      <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
        <table className="is-hoverable w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              {tableHeaders.map((columnHead) => (
                <th
                  key={columnHead.key}
                  className={tableDataClass+` font-semibold uppercaseb bg-slate-200`}
                >
                  {columnHead.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {CandidateTableData.map((candidateRow) => (
              <tr
                key={candidateRow.id}
                className="border-y border-transparent border-b-slate-200 hover:bg-slate-50"
              >
                <td className={tableDataClass}>
                  {candidateRow.id}
                </td>

                <td className={tableDataClass}>
                  {candidateRow.firstName}
                </td>

                <td className={tableDataClass}>
                  {candidateRow.lastName}
                </td>

                <td className={tableDataClass}>
                  {candidateRow.email}
                </td>

                <td className={tableDataClass}>
                  {candidateRow.phone}
                </td>

                <td className={tableDataClass}>
                  {candidateRow.skills}
                </td>

                <td className={tableDataClass}>
                  {candidateRow.experience}
                </td>
                 <td className={tableDataClass}>
                  <CandidateStatusBadge badge={candidateRow.status}/>
                </td>

                <td className={tableDataClass}>
                  <Link
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    to={`/recruitment/candidates/${candidateRow.id}`}
                  >
                    View Details
                  </Link>
                  <button>update Status</button>

                  <Link to={`/recruitment/candidates/form/${candidateRow.id}`}><i className=""></i>edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CandidateTable;
