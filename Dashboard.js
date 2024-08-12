// src/components/Dashboard.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const data = {
    labels: ['Jan 2023', 'Feb 2023', 'Mar 2023', 'Apr 2023', 'May 2023', 'Jun 2023', 
             'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023'],
    datasets: [
      {
        label: 'Income',
        data: [2000, 1500, 1200, 1800, 1600, 1300, 1900, 1700, 1400, 2100, 1800, 1600],
        backgroundColor: '#4CAF50',
      },
      {
        label: 'Expense',
        data: [1000, 800, 600, 1100, 900, 700, 1200, 1000, 900, 1500, 1100, 1000],
        backgroundColor: '#A5D6A7',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard">
      <h2>Cashflow</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Dashboard;
