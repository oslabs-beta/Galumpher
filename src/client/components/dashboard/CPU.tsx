import React from 'react';
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
} from 'chart.js'
import type { ChartData } from 'chart.js';
interface LineProps {
  data: ChartData<'line'>;
}
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
); 
type chartData = {
  labels?: string[];
  datasets?: [{
    label?: string;
    data?: string[];
    fill?: boolean;
    backgroundColor?: string[]
    borderColor?: string;
    borderWidth?: number;
  }]

}

const Cpu = ({chartData:chartData}) => {

  return (
    <div className="cpu">
      <h5>CPU Usage Percentage</h5>
      < Line data={chartData} />
    </div>
  );
};


export default Cpu;