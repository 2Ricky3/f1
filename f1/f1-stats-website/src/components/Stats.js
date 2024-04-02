import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Stats = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Lewis Hamilton',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'rgba(255, 99, 132, 1)',
          tension: 0.1,
          fill: false
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
    });

    return () => {
      chart.destroy(); 
    };
  }, []);

  return (
    <div>
      <h2>F1 Racer Stats</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Stats;
