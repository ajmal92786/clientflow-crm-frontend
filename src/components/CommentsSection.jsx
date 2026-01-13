import AddCommentForm from "./AddCommentForm";
import CommentsList from "./CommentsList";

function CommentsSection() {
  return (
    <div className="mt-5 col-10 col-md-8 card border-0 shadow">
      <h5 className="card-header py-3">Comments:</h5>

      <div className="p-3">
        <CommentsList />
      </div>

      <AddCommentForm />
    </div>
  );
}

export default CommentsSection;
