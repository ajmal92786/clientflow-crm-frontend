import Sidebar from "../components/Sidebar";
import LeadList from "../components/LeadList";

function LeadListPage() {
  return (
    <>
      <main>
        <div className="row m-0">
          <Sidebar />
          <LeadList />
        </div>
      </main>
    </>
  );
}

export default LeadListPage;
