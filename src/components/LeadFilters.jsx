import { useEffect, useState } from "react";
import useSalesAgentContext from "../contexts/SalesAgentContext";
import useLeadContext from "../contexts/LeadContext";

function LeadFilters() {
  const [filters, setFilters] = useState({});
  const { salesAgents } = useSalesAgentContext();
  const { fetchLeads } = useLeadContext();

  console.log("filters: ", filters);

  const statuses = ["New", "Contacted", "Qualified", "Proposal Sent", "Closed"];

  useEffect(() => {
    fetchLeads(filters);
  }, [filters]);

  return (
    <div className="px-3 d-flex justify-content-between align-items-center mt-3">
      <h3 className="col-md-2">Filters:</h3>

      {/* Filters */}
      <div className="col-md-6 d-flex gap-2">
        <select
          className="form-select"
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              status: e.target.value || undefined,
            }))
          }
        >
          <option value="">Status</option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <select
          className="form-select"
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              salesAgent: e.target.value || undefined,
            }))
          }
        >
          <option value="">Sales Agent</option>
          {salesAgents.map((agent) => (
            <option key={agent.id} value={agent.id}>
              {agent.name}
            </option>
          ))}
        </select>

        <select
          className="form-select"
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              priority: e.target.value || undefined,
            }))
          }
        >
          <option value="">Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Sort */}
      <div className="col-md-3 d-flex gap-2">
        <select
          className="form-select"
          onChange={(e) => {
            const [sortBy, order] = e.target.value.split(":");
            setFilters((prev) => ({ ...prev, sortBy, order }));
          }}
        >
          <option value="">Sort by</option>
          <option value="timeToClose:asc">Time to Close (Low → High)</option>
          <option value="timeToClose:desc">Time to Close (High → Low)</option>
        </select>
      </div>
    </div>
  );
}

export default LeadFilters;
