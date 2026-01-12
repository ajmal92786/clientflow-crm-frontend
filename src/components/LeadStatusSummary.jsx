import useLeadContext from "../contexts/LeadContext";
import { FaUser } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import newBg from "../assets/new.png";
import contactedBg from "../assets/contacted.png";
import qualifiedBg from "../assets/qualified.png";
import proposalSentBg from "../assets/proposal_sent.png";
import closedBg from "../assets/closed.png";
import StatusItem from "./StatusItem";

function LeadStatusSummary() {
  const { leads } = useLeadContext();

  const STATUS_KEY_MAP = {
    New: "new",
    Contacted: "contacted",
    Qualified: "qualified",
    "Proposal Sent": "proposal_sent",
    Closed: "closed",
  };

  const STATUS_CONFIG = {
    new: { label: "New", icon: FaUser, bg: newBg },
    contacted: { label: "Contacted", icon: MdContactPhone, bg: contactedBg },
    qualified: { label: "Qualified", icon: IoCheckbox, bg: qualifiedBg },
    proposal_sent: {
      label: "Proposal Sent",
      icon: FaRegListAlt,
      bg: proposalSentBg,
    },
    closed: { label: "Closed", icon: TfiCup, bg: closedBg },
  };

  const counts = {};

  leads.forEach((lead) => {
    const normalizedStatus = STATUS_KEY_MAP[lead.status];
    if (!normalizedStatus) return;

    counts[normalizedStatus] = (counts[normalizedStatus] || 0) + 1;
  });

  return (
    <div className="px-3 mt-5">
      <h4 className="text-center mb-4">Lead Status</h4>
      <div className="row g-2 justify-content-center">
        {Object.entries(STATUS_CONFIG).map(([status, cfg]) => {
          const Icon = cfg.icon;

          return (
            <div key={status} className="col-5 col-md-2">
              <StatusItem
                counts={counts}
                status={status}
                cfg={cfg}
                Icon={Icon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LeadStatusSummary;
