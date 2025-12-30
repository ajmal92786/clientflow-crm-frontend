import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LeadProvider } from "./contexts/LeadContext";
import DashboardPage from "./pages/DashboardPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const router = createBrowserRouter([{ path: "/", element: <DashboardPage /> }]);

function App() {
  return (
    <>
      <LeadProvider>
        <RouterProvider router={router} />
      </LeadProvider>
    </>
  );
}

export default App;
