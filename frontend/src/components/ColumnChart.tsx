import React from 'react';
import { Bar } from 'react-chartjs-2';

interface ColumnChartProps {
    data: number[];
    labels: string[];
}

const ColumnChart: React.FC<ColumnChartProps> = ({ data, labels }) => {
    console.log('Received data:', data);
    console.log('Received labels:', labels);
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Expenses',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={chartData} options={chartOptions} />;
};

export default ColumnChart;
