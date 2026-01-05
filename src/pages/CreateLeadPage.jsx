import Header from "../components/Header";
import LeadForm from "../components/LeadForm";
import Sidebar from "../components/Sidebar";

function CreateLeadPage() {
  return (
    <>
      <main>
        <div className="row m-0">
          <Sidebar />

          <div className="col-md-10">
            <Header />
            <LeadForm />
          </div>
        </div>
      </main>
    </>
  );
}

export default CreateLeadPage;
