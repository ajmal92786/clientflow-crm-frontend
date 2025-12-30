function LeadCard({ lead }) {
  return (
    <div className="card px-3 py-2 shadow-sm border-0 rounded-3">
      <h5>{lead.name}</h5>
      <div className="d-flex gap-2 my-2">
        <span
          className={`badge p-2 ${
            lead.priority === "High"
              ? "bg-danger"
              : lead.priority === "Medium"
              ? "bg-warning text-dark"
              : "bg-success text-white"
          }`}
        >
          {lead.priority} Priority
        </span>
        <span className="badge bg-dark-subtle p-2">{lead.status}</span>
      </div>

      <p className="fw-semibold text-muted m-0">
        Agent: {lead.salesAgent.name}
      </p>
    </div>
  );
}

export default LeadCard;
