import { useEffect } from "react";
import useSalesAgentContext from "../contexts/SalesAgentContext";
import useLeadContext from "../contexts/LeadContext";
import { useSearchParams } from "react-router-dom";

function LeadFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { fetchLeads } = useLeadContext();
  const { salesAgents } = useSalesAgentContext();

  const statuses = ["New", "Contacted", "Qualified", "Proposal Sent", "Closed"];
  const filters = Object.fromEntries([...searchParams.entries()]);

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);

    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    setSearchParams(params);
  };

  const updateParams = (updates) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (!value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    setSearchParams(params);
  };

  useEffect(() => {
    fetchLeads(filters);
  }, [searchParams]);

  return (
    <div className="px-3 d-flex justify-content-between align-items-center mt-3">
      <h3 className="col-md-2">Filters:</h3>

      {/* Filters */}
      <div className="col-8 col-md-6 d-flex gap-2">
        <select
          className="form-select"
          onChange={(e) => updateParam("status", e.target.value)}
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
          onChange={(e) => updateParam("salesAgent", e.target.value)}
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
          onChange={(e) => updateParam("priority", e.target.value)}
        >
          <option value="">Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Sort */}
      <div className="ms-1 col-2 col-md-3 d-flex justify-content-end">
        <select
          className="form-select"
          onChange={(e) => {
            const [sortBy, order] = e.target.value.split(":");
            updateParams({ sortBy, order });
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
