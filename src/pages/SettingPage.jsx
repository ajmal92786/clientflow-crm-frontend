import AgentManagementSection from "../components/AgentManagementSection";
import Header from "../components/Header";
import LeadManagementSection from "../components/LeadManagementSection";
import Sidebar from "../components/Sidebar";

function SettingPage() {
  return (
    <>
      <main>
        <div className="row m-0">
          <Sidebar />

          <div className="col-md-10">
            <Header />

            <div className="py-3">
              <h2 className="text-center">Settings</h2>

              <div className="mt-3 d-flex justify-content-center">
                <div className="col-md-8">
                  <LeadManagementSection />

                  <AgentManagementSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SettingPage;
