import LeadCard from "./LeadCard";

function LeadCardsSection({ leads }) {
  return (
    <div className="row m-0 px-3 py-4">
      {leads.map((lead) => (
        <div key={lead.id} className="col-md-4">
          <LeadCard lead={lead} />
        </div>
      ))}
    </div>
  );
}

export default LeadCardsSection;
