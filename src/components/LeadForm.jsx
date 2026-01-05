import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSalesAgentContext from "../contexts/SalesAgentContext";
import useLeadContext from "../contexts/LeadContext";
import useToastContext from "../contexts/ToastContext";

function LeadForm({ mode = "create", initialValues }) {
  const [newLeadData, setNewLeadData] = useState({
    name: "",
    source: "",
    salesAgent: "",
    status: "New",
    priority: "Medium",
    timeToClose: 1,
    tags: [],
  });
  const { salesAgents } = useSalesAgentContext();
  const { createLeadLoading, createLead, updateLeadById } = useLeadContext();
  const { showToast } = useToastContext();

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    if (name === "timeToClose") {
      setNewLeadData((prev) => ({
        ...prev,
        [name]: value === "" ? "" : Number(value),
      }));

      return;
    }

    setNewLeadData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTagsChange = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setNewLeadData((prev) => ({ ...prev, tags: values }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result =
        mode === "edit"
          ? await updateLeadById(initialValues.id, newLeadData)
          : await createLead(newLeadData);

      showToast(
        mode === "edit"
          ? "Lead updated successfully"
          : "Lead created successfully",
        "success"
      );

      navigate(`/leads/${result.id}`);
    } catch (error) {
      showToast(error?.response?.data?.message || "Operation failed", "danger");
    }
  };

  useEffect(() => {
    if (mode === "edit" && initialValues) {
      setNewLeadData({
        name: initialValues.name || "",
        source: initialValues.source || "",
        salesAgent: initialValues.salesAgent?.id || "",
        status: initialValues.status || "New",
        priority: initialValues.priority || "Medium",
        timeToClose: initialValues.timeToClose || 1,
        tags: initialValues.tags || [],
      });
    }
  }, [mode, initialValues]);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-white py-3">
              <h4 className="mb-0 fw-semibold">
                {mode === "edit" ? "Edit Lead" : "Add New Lead"}
              </h4>
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
                    value={newLeadData.name}
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
                    value={newLeadData.source}
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
                    value={newLeadData.salesAgent}
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
                    value={newLeadData.status}
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
                    value={newLeadData.priority}
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
                    value={newLeadData.timeToClose}
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
                    value={newLeadData.tags}
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
                    {mode === "edit"
                      ? "Update Lead"
                      : createLeadLoading
                      ? "Creating..."
                      : "Create Lead"}
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
