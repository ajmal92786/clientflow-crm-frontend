import { useParams } from "react-router-dom";
import Header from "../components/Header";
import LeadForm from "../components/LeadForm";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import useLeadContext from "../contexts/LeadContext";

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
          <Sidebar />

          <div className="col-md-10">
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
