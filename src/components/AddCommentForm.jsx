import { useState } from "react";
import { useParams } from "react-router-dom";
import useCommentContext from "../contexts/CommentContext";
import useSalesAgentContext from "../contexts/SalesAgentContext";

function AddCommentForm() {
  const [commentData, setCommentData] = useState({
    commentText: "",
    salesAgent: "",
  });
  const { salesAgents } = useSalesAgentContext();
  const { addComment } = useCommentContext();
  const { leadId } = useParams();

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setCommentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!commentData.commentText || !commentData.salesAgent) {
      return;
    }

    addComment(leadId, commentData);
    setCommentData({
      commentText: "",
      salesAgent: "",
    });
  };

  return (
    <form className="p-3" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label className="form-label fw-semibold">Add a comment: </label>
        <textarea
          rows="3"
          name="commentText"
          placeholder="Add a new comment..."
          required
          className="form-control"
          value={commentData.commentText}
          onChange={handleFormChange}
        ></textarea>
      </div>

      <div>
        <select
          name="salesAgent"
          id="salesAgentSelect"
          className="form-select"
          required
          onChange={handleFormChange}
          value={commentData.salesAgent}
        >
          <option value="">--Select Sales Agent--</option>
          {salesAgents.length > 0 &&
            salesAgents.map((agent) => (
              <option key={agent.id} value={agent.id}>
                {agent.name}
              </option>
            ))}
        </select>
      </div>

      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-success">Add Comment</button>
      </div>
    </form>
  );
}

export default AddCommentForm;
