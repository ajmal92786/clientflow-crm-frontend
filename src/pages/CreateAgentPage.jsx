import Header from "../components/Header";
import AgentForm from "../components/AgentForm";
import Sidebar from "../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

function CreateAgentPage() {
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
            className="offcanvas offcanvas-start p-0 w-50"
            tabindex="-1"
            id="navbarOffcanvas"
            aria-labelledby="navbarOffcanvasLabel"
          >
            <div className="offcanvas-body p-0 bg-dark">
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
            <AgentForm />
          </div>
        </div>
      </main>
    </>
  );
}

export default CreateAgentPage;
