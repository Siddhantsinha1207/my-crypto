import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useGetCryptoTimelyDataByNameQuery } from "../redux/crypto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const currentTime = new Date();

function getLast24hTime() {
  const timeArr = [];
  for (let i = 0; i < 24; i++) {
    const d = new Date(currentTime);
    d.setHours(currentTime.getHours() - i);

    let hours = d.getHours();
    const minutes = d.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours || 12; // convert 0 to 12

    const timeStr =
      `${String(hours).padStart(2, "0")}:` +
      `${String(minutes).padStart(2, "0")} ` +
      ampm;
    timeArr.push(timeStr);
  }
  return timeArr;
}

export default function CryptoChart() {
  const { data: cData } = useGetCryptoTimelyDataByNameQuery();
  console.log(cData);

  const filteredData = cData?.prices?.map((item) => item[1]);

  const labels = getLast24hTime();

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        data: filteredData,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
