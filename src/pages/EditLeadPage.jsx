import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import LeadForm from "../components/LeadForm";
import Sidebar from "../components/Sidebar";
import useLeadContext from "../contexts/LeadContext";
import { GiHamburgerMenu } from "react-icons/gi";

function EditLeadPage() {
  const { leadDetails, leadDetailsLoading, leadDetailsError, getLeadById } =
    useLeadContext();
  const { id } = useParams();

  useEffect(() => {
    getLeadById(id);
  }, [id]);

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

            {leadDetailsLoading && (
              <div className="w-100 text-center p-3">
                <div className="spinner-border text-dark" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {!leadDetailsLoading && leadDetailsError && (
              <div className="p-3 text-danger text-center">
                Something went wrong!
              </div>
            )}

            {!leadDetailsLoading && !leadDetailsError && (
              <>
                {leadDetails ? (
                  <LeadForm mode="edit" initialValues={leadDetails} />
                ) : (
                  <div className="p-3 fs-5 text-center fw-semibold">
                    Lead not found.
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default EditLeadPage;
