import { useEffect } from "react";
import useLeadContext from "../contexts/LeadContext";
import StatusDistributionChart from "./StatusDistributionChart";

function LeadStatusReportCard() {
  const { leads, leadsLoading, leadsError, fetchLeads } = useLeadContext();

  const statusData = leads.reduce((acc, lead) => {
    const status = lead.status;

    const existing = acc.find((item) => item.status === status);

    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ status, count: 1 });
    }

    return acc;
  }, []);

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="col-md-5 mb-3">
      <div className="card border-0 shadow-sm">
        <h5 className="card-header">Lead Status Distribution</h5>
        <div className="card-body">
          {leadsLoading && (
            <div className="w-100 text-center p-3">
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {!leadsLoading && leadsError && (
            <div className="p-3 text-danger fw-semibold">
              Something went wrong!
            </div>
          )}

          {!leadsLoading && !leadsError && (
            <>
              {leads.length > 0 ? (
                <StatusDistributionChart data={statusData} />
              ) : (
                <div className="text-center text-danger">
                  No leads available
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeadStatusReportCard;
