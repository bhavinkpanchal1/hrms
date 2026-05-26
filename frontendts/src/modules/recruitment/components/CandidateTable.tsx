import { Link } from "react-router-dom";
import { CandidateTableData } from "../constants/candidateTableData";
import { tableHeaders } from "../constants/candidateTableHeader";

function CandidateTable() {
  return (
    <>
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {tableHeaders.map((columnHead) => (
                <th
                  key={columnHead.key}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-700"
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
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-gray-700">
                  {candidateRow.id}
                </td>

                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {candidateRow.firstName}
                </td>

                <td className="px-6 py-4 text-sm text-gray-700">
                  {candidateRow.lastName}
                </td>

                <td className="px-6 py-4 text-sm text-gray-700">
                  {candidateRow.email}
                </td>

                <td className="px-6 py-4 text-sm text-gray-700">
                  {candidateRow.phone}
                </td>

                <td className="px-6 py-4 text-sm text-gray-700">
                  {candidateRow.skills}
                </td>

                <td className="px-6 py-4 text-sm text-gray-700">
                  {candidateRow.experience}
                </td>

                <td className="px-6 py-4">
                  <Link
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    to={`/recruitment/candidates/${candidateRow.id}`}
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CandidateTable;
