import AddNewLeadComponent from "./AddNewLeadComponent";
import Header from "./Header";
import LeadCardsSection from "./LeadCardsSection";
import LeadStatusSummary from "./LeadStatusSummary";
import QuickFilters from "./QuickFilters";

function Dashboard() {
  return (
    <div className="col-md-10 p-0 bg-body-tertiary">
      <Header />
      <LeadCardsSection />
      <LeadStatusSummary />
      <QuickFilters />
      <AddNewLeadComponent />
    </div>
  );
}

export default Dashboard;
