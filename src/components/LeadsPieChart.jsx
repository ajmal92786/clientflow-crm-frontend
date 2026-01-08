import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function LeadsPieChart({ pipelineLeads, closedLeads }) {
  const pieData = {
    labels: ["Closed", "In Pipeline"],
    datasets: [
      {
        data: [closedLeads, pipelineLeads],
        backgroundColor: ["#4CAF50", "#2196F3"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "right" },
    },
  };

  return (
    <div className="my-3">
      <Pie data={pieData} options={options} />
    </div>
  );
}

export default LeadsPieChart;
