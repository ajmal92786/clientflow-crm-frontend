import LeadDetails from "../components/LeadDetails";
import Sidebar from "../components/Sidebar";

function LeadDetailsPage() {
  return (
    <>
      <main>
        <div className="row m-0">
          <Sidebar />
          <LeadDetails />
        </div>
      </main>
    </>
  );
}

export default LeadDetailsPage;
