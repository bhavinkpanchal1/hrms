import { Link, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-100">
      <aside className="fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-slate-900 text-white transition-transform duration-300 md:static md:translate-x-0 -translate-x-full">
        {/* <!-- Sidebar Header --> */}
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-800">
          <span className="text-xl font-bold tracking-wider">BRAND</span>
          {/* <!-- Mobile Close Button (Hidden on Desktop) --> */}
          <button className="p-1 rounded md:hidden hover:bg-slate-800">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* <!-- Sidebar Links --> */}
        <nav className="flex-1 space-y-1 px-4 py-6 overflow-y-auto">
          <a
            href="#"
            className="flex items-center space-x-3 rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-medium text-white"
          >
            <span>Dashboard</span>
          </a>
          <Link
            to={"/recruitment/candidates"}
            className="flex items-center space-x-3 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <span>Recruitment</span>
          </Link>
          <Link
            to="/recruitment/interview"
            className="flex items-center space-x-3 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <span>Scheduled Interivew</span>
          </Link>

           <Link
            to="employee/list"
            className="flex items-center space-x-3 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <span>Employees</span>
          </Link>
        </nav>
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* <!-- Top Navbar --> */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          {/* <!-- Mobile Menu Toggle (Hidden on Desktop) --> */}
          <button className="rounded p-1 text-gray-600 hover:bg-gray-100 md:hidden">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 rounded-full bg-gray-300"></div>
          </div>
        </header>
        {/* <!-- Main Content Area --> */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* <!-- Responsive Inner Content Container --> */}
          {/* <div className="mx-auto max-w-7xl"> */}
            {/* <h1 className="text-2xl font-bold text-gray-900">Overview</h1> */}

            {/* <!-- Grid Content Area --> */}
            {/* <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="h-32 rounded-xl bg-white p-6 shadow-sm">
                Card 1
              </div>
              <div className="h-32 rounded-xl bg-white p-6 shadow-sm">
                Card 2
              </div>
              <div className="h-32 rounded-xl bg-white p-6 shadow-sm">
                Card 3
              </div>
            </div> */}
          {/* </div> */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
