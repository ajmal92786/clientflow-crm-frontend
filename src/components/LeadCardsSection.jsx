import useLeadContext from "../contexts/LeadContext";
import LeadCard from "./LeadCard";

function LeadCardsSection() {
  const { leads, leadsLoading, leadsError } = useLeadContext();

  return (
    <div className="">
      {leadsLoading && (
        <div className="w-100 text-center p-3">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!leadsLoading && leadsError && (
        <div className="p-3 text-danger">Something went wrong!</div>
      )}

      {!leadsLoading && !leadsError && (
        <>
          <h4 className="py-3 my-2 text-center">Recent Leads</h4>
          {leads.length > 0 ? (
            <div className="row gx-5 m-0  justify-content-center mb-4">
              {leads.slice(0, 4).map((lead) => (
                <div key={lead.id} className="col-md-2">
                  <LeadCard lead={lead} />
                </div>
              ))}
            </div>
          ) : (
            <div className="p-3">No leads found.</div>
          )}
        </>
      )}
    </div>
  );
}

export default LeadCardsSection;
