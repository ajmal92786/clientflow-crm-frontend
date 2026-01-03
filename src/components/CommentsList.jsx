import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCommentContext from "../contexts/CommentContext";

function CommentsList() {
  const { comments, loading, error, fetchComments } = useCommentContext();
  const { leadId } = useParams();

  const calculateDateAndTime = (createdAt) => {
    const date = new Date(createdAt);

    const options = {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    };

    return date.toLocaleString("en-In", options);
  };

  useEffect(() => {
    fetchComments(leadId);
  }, []);

  return (
    <div>
      {loading && (
        <div className="w-100 text-center p-3">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!loading && error && (
        <div className="text-center text-danger">Something went wrong!</div>
      )}

      {!loading && !error && (
        <>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="mb-2 p-3 rounded d-flex gap-2 bg-secondary-subtle"
              >
                <div>
                  <div className="px-2 py-1 text-white bg-dark border border-secondary rounded-circle">
                    {comment.author.split(" ").map((word) => word.charAt(0))}
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between">
                    <h5>{comment.author}</h5>
                    <div>{calculateDateAndTime(comment.createdAt)}</div>
                  </div>
                  <div>{comment.commentText}</div>
                </div>
              </div>
            ))
          ) : (
            <div>No Comments.</div>
          )}
        </>
      )}
    </div>
  );
}

export default CommentsList;
