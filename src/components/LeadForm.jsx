import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSalesAgentContext from "../contexts/SalesAgentContext";
import useLeadContext from "../contexts/LeadContext";
import useToastContext from "../contexts/ToastContext";

function LeadForm() {
  const [leadDetails, setLeadDetails] = useState({
    name: "",
    source: "",
    salesAgent: "",
    status: "New",
    priority: "Medium",
    timeToClose: 1,
    tags: [],
  });
  const { salesAgents } = useSalesAgentContext();
  const { createLeadLoading, createLead } = useLeadContext();
  const { showToast } = useToastContext();

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    if (name === "timeToClose") {
      setLeadDetails((prev) => ({
        ...prev,
        [name]: Number(value),
      }));

      return;
    }

    setLeadDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTagsChange = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setLeadDetails((prev) => ({ ...prev, tags: values }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newLead = await createLead(leadDetails);

      showToast("Lead created successfully", "success");

      navigate(`/leads/${newLead.id}`);
    } catch (error) {
      showToast(
        error?.response?.data?.message || "Failed to create lead",
        "danger"
      );
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white py-3">
              <h4 className="mb-0 fw-semibold">Add New Lead</h4>
            </div>

            <div className="card-body">
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="" className="form-label fw-semibold">
                    Lead Name:<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter lead name"
                    required
                    value={leadDetails.name}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Lead Source:<span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    required
                    name="source"
                    value={leadDetails.source}
                    onChange={handleFormChange}
                  >
                    <option value="">Select source</option>
                    <option value="Website">Website</option>
                    <option value="Referral">Referral</option>
                    <option value="Cold Call">Cold Call</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Email">Email</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Sales Agent:<span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    name="salesAgent"
                    required
                    value={leadDetails.salesAgent}
                    onChange={handleFormChange}
                  >
                    <option value="">Select sales agent</option>
                    {salesAgents &&
                      salesAgents.map((agent) => (
                        <option key={agent.id} value={`${agent.id}`}>
                          {agent.name}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Lead Status:</label>
                  <select
                    className="form-select"
                    name="status"
                    value={leadDetails.status}
                    onChange={handleFormChange}
                  >
                    {[
                      "New",
                      "Contacted",
                      "Qualified",
                      "Proposal Sent",
                      "Closed",
                    ].map((status) => (
                      <option key={status} value={`${status}`}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Priority:</label>
                  <select
                    className="form-select"
                    name="priority"
                    value={leadDetails.priority}
                    onChange={handleFormChange}
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Time to Close (Days)<span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    name="timeToClose"
                    required
                    min={1}
                    className="form-control"
                    placeholder="Enter number of days"
                    value={leadDetails.timeToClose}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Tags</label>

                  <select
                    className="form-select"
                    name="tags"
                    multiple
                    aria-describedby="tagsHelp"
                    value={leadDetails.tags}
                    onChange={handleTagsChange}
                  >
                    {/* Lead Temperature */}
                    <option value="hot">Hot Lead</option>
                    <option value="warm">Warm Lead</option>
                    <option value="cold">Cold Lead</option>

                    {/* Follow-up */}
                    <option value="follow-up">Follow-up Required</option>
                    <option value="demo-scheduled">Demo Scheduled</option>

                    {/* Business Type */}
                    <option value="enterprise">Enterprise</option>
                    <option value="smb">SMB</option>

                    {/* Budget & Priority */}
                    <option value="budget-approved">Budget Approved</option>
                    <option value="budget-concern">Budget Concern</option>
                    <option value="decision-pending">Decision Pending</option>
                    <option value="high-priority">High Priority</option>
                  </select>
                </div>

                <p className=" text-muted small">
                  Fields marked with <span className="text-danger">*</span> are
                  required.
                </p>

                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn btn-primary px-4"
                    disabled={createLeadLoading}
                  >
                    {createLeadLoading ? "Creating..." : "Create Lead"}
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

export default LeadForm;
