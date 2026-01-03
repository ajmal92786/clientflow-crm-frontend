import { useParams } from "react-router-dom";
import useCommentContext from "../contexts/CommentContext";
import { useState } from "react";

function AddCommentComponent() {
  const [commentText, setCommentText] = useState("");
  const { addComment } = useCommentContext();
  const { leadId } = useParams();

  return (
    <div className="p-3">
      <label className="fw-semibold mb-2">Add a comment: </label>
      <textarea
        rows="3"
        placeholder="Add a new comment..."
        className="form-control"
        onChange={(e) => setCommentText(e.target.value)}
      ></textarea>

      <div className="d-flex justify-content-end mt-3">
        <button
          className="btn btn-success"
          onClick={() => addComment(leadId, commentText)}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}

export default AddCommentComponent;
