import LeadsPieChart from "./LeadsPieChart";

function PipelineReportCard({ loading, error, stats }) {
  return (
    <div className="col-md-10 mb-3">
      <div className="card border-0 shadow-sm">
        <h5 className="card-header">Total Leads Closed & In Pipeline</h5>

        <div className="card-body col-md-5">
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

          {!loading && !error && stats && (
            <LeadsPieChart
              closedLeads={stats.totalClosedLeads}
              pipelineLeads={stats.totalLeadsInPipeline}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PipelineReportCard;
