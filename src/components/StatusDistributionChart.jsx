import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function StatusDistributionChart({ data }) {
  const pieData = {
    labels: data.map((item) => item.status),
    datasets: [
      {
        data: data.map((item) => item.count),
        backgroundColor: [
          "#4CAF50",
          "#d8c40eff",
          "#2196F3",
          "#db111bff",
          "#0aada5ff",
        ],
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

export default StatusDistributionChart;
