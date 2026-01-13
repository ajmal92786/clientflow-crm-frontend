import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function LeadsByAgentBarChart({ data }) {
  const chartData = {
    labels: data.map((item) => item.salesAgentName),
    datasets: [
      {
        label: "Leads Closed",
        data: data.map((item) => item.closedLeadsCount),
        backgroundColor: "#3fb643ff",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRation: false,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepsize: 5 },
      },
    },
  };

  return (
    <div style={{ minHeight: "150px" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default LeadsByAgentBarChart;
