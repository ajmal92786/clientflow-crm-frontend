import { useState } from "react";
import useSalesAgentContext from "../contexts/SalesAgentContext";
import useToastContext from "../contexts/ToastContext";

function AgentManagementSection() {
  const [deletingId, setDeletingId] = useState(null);
  const { salesAgents, loading, error, deleteSalesAgent } =
    useSalesAgentContext();
  const { showToast } = useToastContext();

  const handleAgentDelete = async (agentId) => {
    setDeletingId(agentId);

    const result = await deleteSalesAgent(agentId);

    setDeletingId(null);

    if (!result.success && result.message.includes("assigned leads")) {
      showToast(
        "This agent has active leads. Reassign or delete leads first.",
        "warning"
      );
    } else {
      showToast(result.message, result.success ? "success" : "danger");
    }
  };

  return (
    <div className="my-5">
      <h4>Agent Management</h4>

      {loading && (
        <div className="w-100 text-center p-3">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!loading && error && (
        <div className="text-center text-danger">Something went wrong!</div>
      )}

      {!loading && !error && (
        <>
          {salesAgents.length > 0 ? (
            <div className="card border-0 shadow">
              <table className="table">
                <thead>
                  <tr className="table-dark">
                    <th>Agent Name</th>
                    <th>Email</th>
                    <th className="text-center">More</th>
                  </tr>
                </thead>

                <tbody>
                  {salesAgents.map((agent) => (
                    <tr key={agent.id}>
                      <td className="fw-semibold">{agent.name}</td>
                      <td>{agent.email}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-sm btn-danger"
                          disabled={deletingId === agent.id}
                          onClick={() => handleAgentDelete(agent.id)}
                        >
                          {deletingId === agent.id ? "Deleting..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-danger fw-semibold">
                No sales agents available.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AgentManagementSection;
