import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LeadProvider } from "./contexts/LeadContext";
import { SalesAgentProvider } from "./contexts/SalesAgentContext";
import { CommentProvider } from "./contexts/CommentContext";
import { ToastProvider } from "./contexts/ToastContext";
import DashboardPage from "./pages/DashboardPage";
import LeadListPage from "./pages/LeadListPage";
import LeadDetailsPage from "./pages/LeadDetailsPage";
import CreateLeadPage from "./pages/CreateLeadPage";
import EditLeadPage from "./pages/EditLeadPage";
import LeadsByAgentPage from "./pages/LeadsByAgentPage";
import SalesAgentListPage from "./pages/SalesAgentListPage";
import ReportPage from "./pages/ReportPage";
import SettingPage from "./pages/SettingPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const router = createBrowserRouter([
  { path: "/", element: <DashboardPage /> },
  { path: "/leads", element: <LeadListPage /> },
  { path: "/leads/:leadId", element: <LeadDetailsPage /> },
  { path: "/leads/new", element: <CreateLeadPage /> },
  { path: "/leads/:id/edit", element: <EditLeadPage /> },
  { path: "/sales", element: <LeadsByAgentPage /> },
  { path: "/agents", element: <SalesAgentListPage /> },
  { path: "/reports", element: <ReportPage /> },
  { path: "/settings", element: <SettingPage /> },
]);

function App() {
  return (
    <>
      <LeadProvider>
        <SalesAgentProvider>
          <CommentProvider>
            <ToastProvider>
              <RouterProvider router={router} />
            </ToastProvider>
          </CommentProvider>
        </SalesAgentProvider>
      </LeadProvider>
    </>
  );
}

export default App;
