function LeadCard({ lead }) {
  return (
    <div className="card px-3 py-1 shadow-sm border-0 rounded-pill position-relative text-white bg-success bg-gradient">
      <div className="text-center text-truncate fw-semibold">{lead.name}</div>
      <span
        className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${
          lead.priority === "High"
            ? "bg-danger"
            : lead.priority === "Medium"
            ? "bg-warning text-dark"
            : "bg-success text-white"
        }`}
      >
        {lead.priority}
      </span>
    </div>
  );
}

export default LeadCard;
