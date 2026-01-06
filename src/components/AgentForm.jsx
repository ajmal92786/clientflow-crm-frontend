import { useState } from "react";
import useSalesAgentContext from "../contexts/SalesAgentContext";
import useToastContext from "../contexts/ToastContext";
import { useNavigate } from "react-router-dom";

function AgentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const { createAgentLoading, createSalesAgent } = useSalesAgentContext();
  const { showToast } = useToastContext();
  const navigate = useNavigate();

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await createSalesAgent(formData);

    if (result.success) {
      showToast("Sales agent created successfully", "success");
      navigate("/agents");
    } else {
      showToast(result.message || "Failed to create sales agent", "danger");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 ">
          <div className="card p-3 border-0 shadow">
            <h5 className="card-header bg-white">Add New Sales Agent </h5>

            <div className="card-body">
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="" className="form-label fw-semibold">
                    Agent Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleFormData}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="form-label fw-semibold">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleFormData}
                  />
                </div>

                <div className="text-end">
                  <button
                    className="btn btn-primary text-end"
                    disabled={createAgentLoading}
                  >
                    {createAgentLoading ? "Creating Agent..." : "Create Agent"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentForm;
