import { useState } from "react";
import useLeadContext from "../contexts/LeadContext";
import useToastContext from "../contexts/ToastContext";

function LeadManagementSection() {
  const [deletingId, setDeletingId] = useState(null);
  const { leads, leadsLoading, leadsError, deleteLead } = useLeadContext();
  const { showToast } = useToastContext();

  const handleLeadDelete = async (leadId) => {
    setDeletingId(leadId);

    const result = await deleteLead(leadId);

    setDeletingId(null);
    showToast(result.message, "success");
  };

  return (
    <>
      <h4>Lead Management</h4>
      <div>
        {leadsLoading && (
          <div className="w-100 text-center p-3">
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {!leadsLoading && leadsError && (
          <div className="text-center text-danger">Something went wrong!</div>
        )}

        {!leadsLoading && !leadsError && (
          <>
            {leads.length > 0 ? (
              <div className="card border-0 shadow">
                <table className="table">
                  <thead>
                    <tr className="table-dark">
                      <th>Lead Name</th>
                      <th>Status</th>
                      <th>Sales Agent</th>
                      <th className="text-center">More</th>
                    </tr>
                  </thead>

                  <tbody>
                    {leads.map((lead) => (
                      <tr key={lead.id}>
                        <td className="fw-semibold">{lead.name}</td>
                        <td>{lead.status}</td>
                        <td className="fw-semibold text-center">
                          {lead.salesAgent ? lead.salesAgent.name : "-"}
                        </td>
                        <td className="text-center">
                          <button
                            className="btn btn-sm btn-danger"
                            disabled={deletingId === lead.id}
                            onClick={() => handleLeadDelete(lead.id)}
                          >
                            {deletingId === lead.id ? "Deleting..." : "Delete"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-danger fw-semibold">No leads available.</p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default LeadManagementSection;
