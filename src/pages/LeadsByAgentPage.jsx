import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import useSalesAgentContext from "../contexts/SalesAgentContext";
import useLeadContext from "../contexts/LeadContext";
import LeadFilterSection from "../components/LeadFilterSection";
import { GiHamburgerMenu } from "react-icons/gi";

function LeadsByAgentPage() {
  const { salesAgents } = useSalesAgentContext();
  const { leads, leadsLoading, leadsError, fetchLeads } = useLeadContext();

  const [selectedAgentId, setSelectedAgentId] = useState("");
  const [filters, setFilters] = useState({
    status: "",
    priority: "",
    sortBy: "",
  });

  const selectedAgent = salesAgents.find(
    (agent) => agent.id === selectedAgentId
  );

  useEffect(() => {
    if (!selectedAgentId) return;

    fetchLeads({
      salesAgent: selectedAgentId,
      ...filters,
    });
  }, [selectedAgentId, filters]);

  return (
    <>
      <main>
        <div className="row m-0">
          <div className="d-md-none bg-light p-0">
            <button
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbarOffcanvas"
              aria-controls="navbarOffcanvas"
            >
              <GiHamburgerMenu size={24} />
            </button>
          </div>

          <div
            className="offcanvas offcanvas-start p-0 w-50"
            tabindex="-1"
            id="navbarOffcanvas"
            aria-labelledby="navbarOffcanvasLabel"
          >
            <div className="offcanvas-body p-0 bg-dark">
              <Sidebar />
            </div>
          </div>

          <div className="d-none d-md-block col-md-3 col-lg-2 col-xxl-3 p-0 bg-dark">
            <Sidebar />
          </div>

          <div
            className="col-md-9 col-lg-10 col-xxl-9"
            style={{ minHeight: "100dvh" }}
          >
            <Header />

            <div className="text-center">
              <h2>Leads by Sales Agent</h2>

              {salesAgents.length > 0 ? (
                <div className="row m-0 justify-content-center mt-3 mb-4">
                  <div className="col-md-9">
                    <select
                      className="form-select"
                      value={selectedAgentId}
                      onChange={(e) => setSelectedAgentId(e.target.value)}
                    >
                      <option value="">---- Select a Sales Agent ----</option>
                      {salesAgents.map((agent) => (
                        <option key={agent.id} value={agent.id}>
                          {agent.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : (
                <p className="text-danger fw-semibold">
                  No sales agents available.
                </p>
              )}

              {!selectedAgentId && salesAgents.length > 0 && (
                <p className="fw-semibold fs-5">
                  Please select a Sales Agent to view leads.
                </p>
              )}

              {leadsLoading && (
                <div className="text-center my-4">
                  <div className="spinner-border" role="status" />
                </div>
              )}

              {!leadsLoading && leadsError && (
                <p className="text-danger fw-semibold">{leadsError}</p>
              )}

              {!leadsLoading && !leadsError && selectedAgentId && (
                <>
                  {leads.length > 0 ? (
                    <div className="row m-0 justify-content-center">
                      <div className="col-md-9 rounded">
                        <div className="card shadow-sm">
                          <h5 className="card-header py-3 text-start">
                            Sales Agent: {selectedAgent.name}
                          </h5>
                          <div className="card-body">
                            {leads.map((lead) => (
                              <div
                                key={lead.id}
                                className="row py-2 fw-semibold text-start border-bottom"
                              >
                                <div className="col-3">{lead.name}</div>
                                <div className="col-3">{lead.status}</div>
                                <div className="col-3">{lead.priority}</div>
                                <div className="col-3">{lead.timeToClose}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="fw-semibold text-danger">
                        No leads found for the selected filters.
                      </p>
                    </div>
                  )}

                  <LeadFilterSection
                    filters={filters}
                    setFilters={setFilters}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default LeadsByAgentPage;
