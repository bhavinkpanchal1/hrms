import { Link, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-900 text-stone-50 p-4">
        Sidebar
        <ul>
          <li>
            <Link to={"/recruitment/candidates"}>Recruitment</Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1 min-100 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;