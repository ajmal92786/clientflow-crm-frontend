import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LeadProvider } from "./contexts/LeadContext";
import { SalesAgentProvider } from "./contexts/SalesAgentContext";
import { CommentProvider } from "./contexts/CommentContext";
import DashboardPage from "./pages/DashboardPage";
import LeadListPage from "./pages/LeadListPage";
import CreateLeadPage from "./pages/CreateLeadPage";
import LeadDetailsPage from "./pages/LeadDetailsPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const router = createBrowserRouter([
  { path: "/", element: <DashboardPage /> },
  { path: "/leads", element: <LeadListPage /> },
  { path: "/leads/new", element: <CreateLeadPage /> },
  { path: "/leads/:leadId", element: <LeadDetailsPage /> },
]);

function App() {
  return (
    <>
      <LeadProvider>
        <SalesAgentProvider>
          <CommentProvider>
            <RouterProvider router={router} />
          </CommentProvider>
        </SalesAgentProvider>
      </LeadProvider>
    </>
  );
}

export default App;
