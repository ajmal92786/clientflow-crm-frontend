import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";

function DashboardPage() {
  return (
    <>
      <main>
        <div className="row m-0">
          <Sidebar />
          <Dashboard />
        </div>
      </main>
    </>
  );
}

export default DashboardPage;
