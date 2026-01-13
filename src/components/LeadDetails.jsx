import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLeadContext from "../contexts/LeadContext";
import Header from "./Header";
import CommentsSection from "./CommentsSection";

function LeadDetails() {
  const { leadDetails, leadDetailsLoading, leadDetailsError, getLeadById } =
    useLeadContext();

  const navigate = useNavigate();
  const params = useParams();

  const handleEditLeadClick = (leadDetails) => {
    navigate(`/leads/${leadDetails.id}/edit`);
  };

  useEffect(() => {
    getLeadById(params.leadId);
  }, []);

  return (
    <div className="col-md-9 col-lg-10 col-xxl-9 p-0">
      <Header />

      {leadDetailsLoading && (
        <div className="w-100 text-center p-3">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!leadDetailsLoading && leadDetailsError && (
        <div className="text-center text-danger">Something went wrong!</div>
      )}

      {!leadDetailsLoading && !leadDetailsError && leadDetails && (
        <>
          <div className="mt-4 mb-3 d-flex flex-column align-items-center">
            <div className="col-10 col-md-8 card border-0 shadow">
              <div className="p-3 card-header d-flex gap-2 flex-wrap justify-content-between align-items-center">
                <h5 className="mb-0">
                  <span className="text-muted">Lead Management:</span>{" "}
                  {leadDetails.name}
                </h5>
                <button
                  onClick={() => handleEditLeadClick(leadDetails)}
                  className="btn btn-sm btn-outline-primary"
                >
                  Edit Lead
                </button>
              </div>

              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-4 fw-semibold text-secondary-emphasis">
                    Lead Name:
                  </div>
                  <div className="col-8">{leadDetails.name}</div>
                </div>

                <div className="row mb-2">
                  <div className="col-4 fw-semibold text-secondary-emphasis">
                    Sales Agent:
                  </div>
                  <div className="col-8">
                    {leadDetails.salesAgent?.name || "-"}
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-4 fw-semibold text-secondary-emphasis">
                    Lead Source:
                  </div>
                  <div className="col-8">{leadDetails.source}</div>
                </div>

                <div className="row mb-2">
                  <div className="col-4 fw-semibold text-secondary-emphasis">
                    Status:
                  </div>
                  <div className="col-8">{leadDetails.status}</div>
                </div>

                <div className="row mb-2">
                  <div className="col-4 fw-semibold text-secondary-emphasis">
                    Priority:
                  </div>
                  <div className="col-8">{leadDetails.priority}</div>
                </div>

                <div className="row mb-2">
                  <div className="col-4 fw-semibold text-secondary-emphasis">
                    Time to Close:
                  </div>
                  <div className="col-8">{leadDetails.timeToClose} days</div>
                </div>
              </div>
            </div>

            <CommentsSection />
          </div>
        </>
      )}
    </div>
  );
}

export default LeadDetails;
