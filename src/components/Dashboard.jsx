import AddNewLeadComponent from "./AddNewLeadComponent";
import Header from "./Header";
import LeadCardsSection from "./LeadCardsSection";
import LeadStatusSummary from "./LeadStatusSummary";
import QuickFilters from "./QuickFilters";

function Dashboard() {
  return (
    <div
      className="col-md-9 col-lg-10 col-xxl-9 p-0 bg-body-tertiary"
      style={{ minHeight: "100dvh" }}
    >
      <Header />
      <LeadCardsSection />
      <LeadStatusSummary />
      <QuickFilters />
      <AddNewLeadComponent />
    </div>
  );
}

export default Dashboard;
