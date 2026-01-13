function LeadFilterSection({ filters, setFilters }) {
  return (
    <div className="row m-0 my-2 justify-content-center">
      <div className="col-md-9">
        <div className="card">
          <div className="row m-0 py-3 align-items-center">
            <div className="col-1">
              <label className="fw-semibold">Filters:</label>
            </div>
            <div className="col-4">
              <select
                className="form-select"
                value={filters.status}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    status: e.target.value,
                  }))
                }
              >
                <option value="">--select status--</option>
                {[
                  "New",
                  "Contacted",
                  "Qualified",
                  "Proposal Sent",
                  "Closed",
                ].map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-4">
              <select
                className="form-select mx-2"
                value={filters.priority}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    priority: e.target.value,
                  }))
                }
              >
                <option value="">--select priority--</option>
                {["High", "Medium", "Low"].map((priority) => (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-3">
              <select
                className="form-select"
                value={filters.sortBy}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    sortBy: e.target.value,
                  }))
                }
              >
                <option value="">--sort by--</option>
                <option value="timeToClose">Time to Close</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadFilterSection;
