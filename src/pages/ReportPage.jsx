import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PipelineReportCard from "../components/PipelineReportCard";
import AgentReportCard from "../components/AgentReportCard";
import LeadStatusReportCard from "../components/LeadStatusReportCard";
import { GiHamburgerMenu } from "react-icons/gi";

function ReportPage() {
  const [pipelineStats, setPipelineStats] = useState(null);
  const [agentStats, setAgentStats] = useState([]);
  const [pipelineLoading, setPipelineLoading] = useState(false);
  const [agentStatLoading, setAgentStatLoading] = useState(false);
  const [pipelineError, setPipelineError] = useState(null);
  const [agentStatError, setAgentStatError] = useState(null);

  const fetchPipelineStats = async () => {
    try {
      setPipelineLoading(true);
      setPipelineError(null);

      const res = await axiosInstance.get("/report/pipeline");
      setPipelineStats(res.data);
    } catch (error) {
      setPipelineError(
        error.response?.data?.message || "Failed to load pipeline report data"
      );
    } finally {
      setPipelineLoading(false);
    }
  };

  const fetchAgentStats = async () => {
    try {
      setAgentStatLoading(true);
      setAgentStatError(null);

      const res = await axiosInstance.get("/report/closed-by-agent");
      setAgentStats(res.data);
    } catch (error) {
      setAgentStatError(
        error.response?.data?.message || "Failed to load agent report data"
      );
    } finally {
      setAgentStatLoading(false);
    }
  };

  useEffect(() => {
    fetchPipelineStats();
    fetchAgentStats();
  }, []);

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
            style={{ minHeight: "100vh" }}
          >
            <Header />

            <h2 className="text-center mb-3">Report Overview</h2>

            <div className="row m-0 justify-content-center">
              <PipelineReportCard
                loading={pipelineLoading}
                error={pipelineError}
                stats={pipelineStats}
              />

              <AgentReportCard
                loading={agentStatLoading}
                error={agentStatError}
                data={agentStats}
              />

              <LeadStatusReportCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ReportPage;
