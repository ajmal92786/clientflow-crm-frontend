import { useNavigate } from "react-router-dom";

function AddNewLeadComponent() {
  const navigate = useNavigate();

  return (
    <div className="text-center my-3">
      <button
        className="btn btn-outline-primary"
        onClick={() => navigate("/leads/new")}
      >
        + Add New Lead
      </button>
    </div>
  );
}

export default AddNewLeadComponent;
