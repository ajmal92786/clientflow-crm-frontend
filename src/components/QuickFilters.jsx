import { useNavigate } from "react-router-dom";

function QuickFilters() {
  const navigate = useNavigate();

  const statuses = ["New", "Contacted", "Qualified", "Proposal Sent", "Closed"];

  return (
    <div className="mt-5">
      <h4 className="text-center">Quick Filters</h4>
      <div className="d-flex justify-content-center">
        {statuses.map((status) => (
          <div key={status}>
            <button
              className="btn btn-outline-dark m-2"
              onClick={() => navigate(`/leads?status=${status}`)}
            >
              {status}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickFilters;
