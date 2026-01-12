import useLeadContext from "../contexts/LeadContext";
import LeadCard from "./LeadCard";

function LeadCardsSection() {
  const { leads, leadsLoading, leadsError } = useLeadContext();

  return (
    <div>
      {leadsLoading && (
        <div className="w-100 text-center p-3">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!leadsLoading && leadsError && (
        <div className="p-3 fw-semibold text-center text-danger">
          Something went wrong!
        </div>
      )}

      {!leadsLoading && !leadsError && (
        <>
          <h4 className="py-3 my-2 text-center">Recent Leads</h4>
          {leads.length > 0 ? (
            <div className="gx-5 gy-3 m-0 mb-4 row justify-content-center">
              {leads.slice(0, 4).map((lead) => (
                <div key={lead.id} className="col-5 col-md-3 col-lg-2">
                  <LeadCard lead={lead} />
                </div>
              ))}
            </div>
          ) : (
            <div className="p-3 text-center text-danger">No leads found.</div>
          )}
        </>
      )}
    </div>
  );
}

export default LeadCardsSection;
