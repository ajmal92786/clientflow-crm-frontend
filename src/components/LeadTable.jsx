import { useNavigate } from "react-router-dom";

function LeadTable({ leads }) {
  const navigate = useNavigate();

  return (
    <table className="table">
      <thead className="table-secondary">
        <tr>
          <th>Lead</th>
          <th>Status</th>
          <th>Sales Agent</th>
          <th>Priority</th>
          <th>Time To Close</th>
          <th className="text-end">Source</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <tr
            key={lead.id}
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/leads/${lead.id}`)}
          >
            <td className="fw-bold">{lead.name}</td>
            <td>
              <div
                className={`badge py-2 ${
                  lead.status === "Closed"
                    ? "bg-danger"
                    : lead.status === "New"
                    ? "bg-success"
                    : "bg-primary"
                }`}
              >
                {lead.status}
              </div>
            </td>
            <td>{lead.salesAgent ? lead.salesAgent.name : "-"}</td>
            <td>
              <div
                className={`badge py-2 ${
                  lead.priority === "High"
                    ? "bg-danger"
                    : lead.priority === "Medium"
                    ? "bg-warning text-dark"
                    : "bg-success"
                }`}
              >
                {lead.priority}
              </div>
            </td>
            <td>{lead.timeToClose}</td>
            <td className="text-end">{lead.source}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LeadTable;
