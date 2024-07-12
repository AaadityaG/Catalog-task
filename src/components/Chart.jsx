import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import './chart.css';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      63179.71, 63200, 63100, 63150, 63050, 63180, 63220, 63150, 63100, 63050, 63000, 62950, 63400, 63050, 63100, 63150, 63200, 63250, 62800, 63350, 63400, 63450, 63500, 63350, 63179.71, 63200, 63100, 63150, 63050, 63180, 63220, 63150, 63100, 63050, 63000, 62950, 63000, 63050, 63100, 63350, 63200, 63250, 63300, 63350, 63550
    ];

    const lastPrice = data[data.length - 1];
    const xpos = data.length + 935;

    const options = {
      chart: {
        type: 'line',
        toolbar: {
          show: false
        },
        height: 250,
        zoom: {
          enabled: false
        },
        animations: {
          enabled: false // Disable animations for better performance
        }
      },
      colors: ['#4B40EE'], // Set the line color here
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 3 // Adjust the line thickness here
      },
      grid: {
        row: {
          colors: ['transparent', 'transparent'],
          opacity: 0
        },
      },
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        categories: []
      },
      yaxis: {
        labels: {
          show: false
        },
      },
      tooltip: {
        theme: 'dark', // Set the tooltip theme to 'dark'
        style: {
          backgroundColor: '#4B40EE', // Set the tooltip background color
          color: 'white', // Set the tooltip text color
          padding: '5px'
        },
        custom: function({ series, seriesIndex, dataPointIndex }) {
          return `
              <p class="custom-tooltip">${series[seriesIndex][dataPointIndex]}</p>
          `;
        }
      },
      series: [{
        name: 'price',
        data: data
      }],
      annotations: {
        points: [{
          x: xpos,
          y: lastPrice,
          marker: {
            size: 5,
            fillColor: '#4B40EE',
            strokeColor: '#ffffff',
            radius: 2
          },
          label: {
            borderColor: '#4B40EE',
            offsetY: 20,
            offsetX: -49,
            style: {
              color: '#fff',
              background: '#4B40EE',
              padding: {
                left: 12,
                right: 10,
                top: 5,
                bottom: 5
              },
              fontFamily: "Circular Std Book",
              fontSize: 15
            },
            text: `${lastPrice}`
          }
        }]
      }
    };

    chartRef.current = new ApexCharts(document.getElementById("chart"), options);
    chartRef.current.render();

    return () => {
      chartRef.current.destroy();
    };
  }, []);

  return (
    <div>
      <div id="chart" className="max-w-300 max-h-300 "></div>
    </div>
  );
};

export default LineChart;
