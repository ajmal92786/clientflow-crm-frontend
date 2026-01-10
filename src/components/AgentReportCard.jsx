import LeadsByAgentBarChart from "./LeadsByAgentBarChart";

function AgentReportCard({ loading, error, data }) {
  return (
    <div className="col-md-5 mb-3">
      <div className="card border-0 shadow-sm">
        <h5 className="card-header">Leads Closed by Sales Agent</h5>

        <div className="card-body">
          {loading && (
            <div className="w-100 text-center p-3">
              <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {!loading && error && (
            <div className="p-3 text-danger fw-semibold">
              Something went wrong!
            </div>
          )}

          {!loading && !error && (
            <>
              {data.length > 0 ? (
                <LeadsByAgentBarChart data={data} />
              ) : (
                <div className="text-center text-danger">
                  No data available.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AgentReportCard;
