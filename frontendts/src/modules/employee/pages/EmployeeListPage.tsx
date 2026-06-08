import { Link } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";

function EmployeeListPage() {
  return(
    <>
       <div>
        <h2 className="text-2xl font-semibold">Employee List page</h2>
        <div className="flex mt-1 mb-2">
        <Link
          to="/recruitment/candidates/form"
          className="bg-violet-700 text-sm rounded-xl text-white px-3 py-2 ml-auto"
        >
          Create Employee
        </Link>
        </div>
        
        <EmployeeTable />
      </div>
    {console.log("Employee List")}
    </>
  )
}

export default EmployeeListPage;
