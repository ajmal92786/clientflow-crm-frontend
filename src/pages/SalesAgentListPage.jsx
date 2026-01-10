import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import useSalesAgentContext from "../contexts/SalesAgentContext";

function SalesAgentListPage() {
  const { salesAgents, loading, error } = useSalesAgentContext();
  const navigate = useNavigate();

  return (
    <>
      <main>
        <div className="row m-0">
          <Sidebar />

          <div className="col-md-10">
            <Header />

            <h2 className="text-center mb-3">Sales Agent Management</h2>
            <div className="d-flex justify-content-center">
              <div className="col-md-8">
                {loading && (
                  <div className="w-100 text-center p-3">
                    <div className="spinner-border text-dark" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}

                {!loading && error && (
                  <div className="text-center text-danger">
                    Something went wrong!
                  </div>
                )}

                {!loading && !error && (
                  <>
                    {salesAgents.length > 0 ? (
                      <div className="card px-3 py-4 shadow border-0">
                        <h5 className="card-header bg-white mb-3">
                          Sales Agent List
                        </h5>

                        <table className="table mb-5">
                          <thead>
                            <tr>
                              <th>Agent Name</th>
                              <th>Email</th>
                            </tr>
                          </thead>

                          <tbody>
                            {salesAgents.map((agent) => (
                              <tr key={agent.id}>
                                <td>{agent.name}</td>
                                <td>{agent.email}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="text-center fs-5 fw-bold text-danger">
                        No sales agents found.
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className="text-center my-4">
              <button
                className="btn btn-outline-primary fw-bold"
                onClick={() => navigate("/agents/new")}
              >
                + Add New Agent
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SalesAgentListPage;
