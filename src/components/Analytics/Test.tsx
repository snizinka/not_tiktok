import React from "react"
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Test = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
    };
  
    const data = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data:  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };

    return (
        <div>
            <Line data={data}
                options={options}>

            </Line>
        </div>
    )
};

export default Test;
