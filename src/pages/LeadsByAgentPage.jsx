import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function LeadsByAgentPage() {
  return (
    <>
      <main>
        <div className="row m-0">
          <Sidebar />

          <div className="col-md-10">
            <Header />

            <div className="text-center">
              <h2>Leads by Sales Agent</h2>
              <p className="text-danger">This page is under progress</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default LeadsByAgentPage;
