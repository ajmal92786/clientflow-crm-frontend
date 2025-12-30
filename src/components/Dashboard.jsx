import useLeadContext from "../contexts/LeadContext";
import DashboardHeader from "./DashboardHeader";
import LeadCardsSection from "./LeadCardsSection";

function Dashboard() {
  const { leads, loading, error } = useLeadContext();

  return (
    <div className="col-md-10 p-0 bg-body-tertiary">
      <DashboardHeader />

      {loading && (
        <div className="w-100 text-center p-5">
          <div class="spinner-border text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!loading && error && (
        <div className="text-danger">Something went wrong!</div>
      )}

      {!loading && !error && (
        <>
          {leads.length > 0 ? (
            <LeadCardsSection leads={leads.slice(0, 3)} />
          ) : (
            <div>No leads found.</div>
          )}
        </>
      )}
    </div>
  );
}

export default Dashboard;
