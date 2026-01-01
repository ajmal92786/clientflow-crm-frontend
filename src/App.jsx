import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LeadProvider } from "./contexts/LeadContext";
import { SalesAgentProvider } from "./contexts/SalesAgentContext";
import DashboardPage from "./pages/DashboardPage";
import LeadsPage from "./pages/LeadListPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CreateLeadPage from "./pages/CreateLeadPage";

const router = createBrowserRouter([
  { path: "/", element: <DashboardPage /> },
  { path: "/leads", element: <LeadsPage /> },
  { path: "/leads/new", element: <CreateLeadPage /> },
]);

function App() {
  return (
    <>
      <LeadProvider>
        <SalesAgentProvider>
          <RouterProvider router={router} />
        </SalesAgentProvider>
      </LeadProvider>
    </>
  );
}

export default App;
