import DashboardHeader from "./DashboardHeader";
import LeadCardsSection from "./LeadCardsSection";
import LeadStatusSummary from "./LeadStatusSummary";
import QuickFilters from "./QuickFilters";

function Dashboard() {
  return (
    <div className="col-md-10 p-0 bg-body-tertiary">
      <DashboardHeader />
      <LeadCardsSection />
      <LeadStatusSummary />
      <QuickFilters />

      <div className="text-center my-3">
        <button className="btn btn-outline-primary">+ Add New Lead</button>
      </div>
    </div>
  );
}

export default Dashboard;
