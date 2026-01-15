import AgentManagementSection from "../components/AgentManagementSection";
import Header from "../components/Header";
import LeadManagementSection from "../components/LeadManagementSection";
import Sidebar from "../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

function SettingPage() {
  return (
    <>
      <main>
        <div className="row m-0">
          <div className="d-md-none bg-light p-0">
            <button
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbarOffcanvas"
              aria-controls="navbarOffcanvas"
            >
              <GiHamburgerMenu size={24} />
            </button>
          </div>

          <div
            className="offcanvas offcanvas-start p-0 w-50 bg-dark"
            data-bs-scroll="true"
            tabIndex="-1"
            id="navbarOffcanvas"
            aria-labelledby="navbarOffcanvasLabel"
          >
            <div className="offcanvas-body p-0">
              <Sidebar />
            </div>
          </div>

          <div className="d-none d-md-block col-md-3 col-lg-2 col-xxl-3 p-0 bg-dark">
            <Sidebar />
          </div>

          <div
            className="col-md-9 col-lg-10 col-xxl-9"
            style={{ minHeight: "100dvh" }}
          >
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
