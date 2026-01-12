import { useNavigate } from "react-router-dom";

function QuickFilters() {
  const navigate = useNavigate();

  const statuses = ["New", "Contacted", "Qualified", "Proposal Sent", "Closed"];

  return (
    <div className="mt-5">
      <h4 className="text-center">Quick Filters</h4>
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {statuses.map((status) => (
          <button
            key={status}
            className="btn btn-outline-dark"
            onClick={() => navigate(`/leads?status=${status}`)}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickFilters;
