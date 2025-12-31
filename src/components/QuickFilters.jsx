import useLeadContext from "../contexts/LeadContext";

function QuickFilters() {
  const { leads } = useLeadContext();

  const statuses = ["New", "Contacted", "Qualified", "Proposal Sent", "Closed"];

  return (
    <div className="mt-5">
      <h4 className="text-center">Quick Filters</h4>
      <div className="d-flex justify-content-center">
        {statuses.map((status) => (
          <div>
            <button className="btn btn-outline-dark m-2">{status}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickFilters;
