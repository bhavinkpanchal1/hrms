import {Outlet } from 'react-router-dom';

function DashboardLayout() {
    return ( 
        <div className="min-h-screen flex">
            <aside className="w-64 bg-gray-900 text-white p-4">
                Sidebar
            </aside>
            <main className="flex-1 min-100 p-6 bg-gray-100">
                <Outlet />
            </main>
        </div>
     );
}

export default DashboardLayout;