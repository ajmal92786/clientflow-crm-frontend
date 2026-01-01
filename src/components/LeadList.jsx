import Header from "../components/Header";
import useLeadContext from "../contexts/LeadContext";
import AddNewLeadComponent from "./AddNewLeadComponent";
import LeadFilters from "./LeadFilters";

function LeadList() {
  const { leads, loading, error } = useLeadContext();

  return (
    <div className="col-md-10">
      <Header />
      <LeadFilters />

      <div>
        {loading && (
          <div className="w-100 text-center p-3">
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="p-3 text-danger">Something went wrong!</div>
        )}

        {!loading && !error && (
          <>
            {leads.length > 0 ? (
              <div className="card mb-4 border-0">
                <div className="card-body">
                  <table className="table">
                    <thead className="table-secondary">
                      <tr>
                        <th>Lead</th>
                        <th>Status</th>
                        <th>Sales Agent</th>
                        <th>Priority</th>
                        <th>Time To Close</th>
                        <th className="text-end">Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((lead) => (
                        <tr key={lead.id}>
                          <td className="fw-bold">{lead.name}</td>
                          <td>
                            <div
                              className={`badge py-2 ${
                                lead.status === "Closed"
                                  ? "bg-danger"
                                  : lead.status === "New"
                                  ? "bg-success"
                                  : "bg-primary"
                              }`}
                            >
                              {lead.status}
                            </div>
                          </td>
                          <td>{lead.salesAgent.name}</td>
                          <td>
                            <div
                              className={`badge py-2 ${
                                lead.priority === "High"
                                  ? "bg-danger"
                                  : lead.priority === "Medium"
                                  ? "bg-warning text-dark"
                                  : "bg-success"
                              }`}
                            >
                              {lead.priority}
                            </div>
                          </td>
                          <td>{lead.timeToClose}</td>
                          <td className="text-end">{lead.source}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
