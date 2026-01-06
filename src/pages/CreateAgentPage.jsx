import Header from "../components/Header";
import AgentForm from "../components/AgentForm";
import Sidebar from "../components/Sidebar";

function CreateAgentPage() {
  return (
    <>
      <main>
        <div className="row m-0">
          <Sidebar />

          <div className="col-md-10">
            <Header />
            <AgentForm />
          </div>
        </div>
      </main>
    </>
  );
}

export default CreateAgentPage;
