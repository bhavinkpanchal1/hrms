import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import CandidateListPage from "../../modules/recruitment/candidate/pages/CandidateListPage";
import CandidateFormPage from "../../modules/recruitment/candidate/pages/CandidateFormPage";
import CandidateDetailsPage from "../../modules/recruitment/candidate/pages/CandidateDetailsPage";
import InterviewScheduleTable from "../../modules/recruitment/interview/components/InterviewScheduleTable";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "recruitment/candidates",
        element: <CandidateListPage />,
      },
      {
        path: "recruitment/candidates/form",
        element: <CandidateFormPage />,
      },
      {
        path: "recruitment/candidates/form/:id",
        element: <CandidateFormPage />,
      },
      {
        path: "recruitment/candidates/:id",
        element: <CandidateDetailsPage />,
      },
      {
				path: "recruitment/interview",
				element: <InterviewScheduleTable />,
			},
    ],
  },
]);
