import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import CandidateListPage from "../../modules/recruitment/pages/CandidateListPage";
import CreateCandidatePage from "../../modules/recruitment/pages/CreateCandidatePage";
import CandidateDetailsPage from "../../modules/recruitment/pages/CandidateDetailsPage";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <DashboardLayout />,
        children: [
            {
                path: "recruitment/candidates",
                element: <CandidateListPage />,
            },
            {
                path: "recruitment/candidates/create",
                element: <CreateCandidatePage />,
            },
            {
                path: "recruitment/candidates/:id",
                element: <CandidateDetailsPage />,
            }
        ]
    }
]);