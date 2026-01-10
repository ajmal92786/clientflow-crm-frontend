import Header from "../components/Header";
import useLeadContext from "../contexts/LeadContext";
import AddNewLeadComponent from "./AddNewLeadComponent";
import LeadFilters from "./LeadFilters";
import LeadTable from "./LeadTable";

function LeadList() {
  const { leads, leadsLoading, leadsError } = useLeadContext();

  return (
    <div className="col-md-10">
      <Header />
      <LeadFilters />

      <div>
        {leadsLoading && (
          <div className="w-100 text-center p-3">
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {!leadsLoading && leadsError && (
          <div className="p-3 text-danger text-center fw-semibold">
            Something went wrong!
          </div>
        )}

        {!leadsLoading && !leadsError && (
          <>
            {leads.length > 0 ? (
              <div className="card mb-4 border-0">
                <div className="card-body">
                  <LeadTable leads={leads} />
                </div>
              </div>
            ) : (
              <div className="p-4 fs-5 fw-semibold text-center text-danger">
                No leads found.
              </div>
            )}
          </>
        )}
      </div>

      <AddNewLeadComponent />
    </div>
  );
}

export default LeadList;
