import axios from "axios";
import Chart from "chart.js/auto";
import React, { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stats.css'; // Add a separate CSS file for specific styling

const Stats = () => {
  const [dropDownData, setdropDownData] = useState(null);
  const [dropDownValOne, setDropDownValOne] = useState(null);
  const [dropDownValTwo, setDropDownValTwo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-formula-1.p.rapidapi.com/rankings/races",
          {
            params: { race: "50" },
            headers: {
              "X-RapidAPI-Key": "aab88935aemshbf9715733d12537p1d684cjsn0ad7bfefdc23",
            },
          }
        );

        const data = response.data.response;
        setdropDownData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (dropDownData === null) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="stats-container">
        <h2 className="text-center stats-heading">F1 Racer Comparison</h2>
        <div className="charts-container row justify-content-center">
          <div className="col-md-6 chart-block">
            <label className="dropdown-label">Select Racer 1:</label>
            <select
              className="form-select mb-3"
              onChange={(e) => setDropDownValOne(e.target.value)}
            >
              <option>Select Racer</option>
              {dropDownData.map((race, i) => (
                <option key={i} value={i}>
                  {race.driver.name} - {race.team.name}
                </option>
              ))}
            </select>
            {dropDownValOne !== null ? (
              <Radar
                data={{
                  labels: ["Position", "Grid", "Pits"],
                  datasets: [
                    {
                      label: dropDownData[dropDownValOne].driver.name,
                      data: [
                        dropDownData[dropDownValOne].position,
                        dropDownData[dropDownValOne].grid,
                        dropDownData[dropDownValOne].pits,
                      ],
                      backgroundColor: "rgba(230, 0, 0, 0.5)", // Vodacom red
                      borderColor: "#e60000",
                      borderWidth: 2,
                    },
                  ],
                }}
                options={{
                  scales: {
                    r: {
                      angleLines: { color: '#cc0000' }, // Vodacom dark red
                    },
                  },
                }}
              />
            ) : (
              <p className="text-center">Please select a racer</p>
            )}
          </div>

          <div className="col-md-6 chart-block">
            <label className="dropdown-label">Select Racer 2:</label>
            <select
              className="form-select mb-3"
              onChange={(e) => setDropDownValTwo(e.target.value)}
            >
              <option>Select Racer</option>
              {dropDownData.map((race, i) => (
                <option key={i} value={i}>
                  {race.driver.name} - {race.team.name}
                </option>
              ))}
            </select>
            {dropDownValTwo !== null ? (
              <Radar
                data={{
                  labels: ["Position", "Grid", "Pits"],
                  datasets: [
                    {
                      label: dropDownData[dropDownValTwo].driver.name,
                      data: [
                        dropDownData[dropDownValTwo].position,
                        dropDownData[dropDownValTwo].grid,
                        dropDownData[dropDownValTwo].pits,
                      ],
                      backgroundColor: "rgba(230, 0, 0, 0.5)", // Vodacom red
                      borderColor: "#e60000",
                      borderWidth: 2,
                    },
                  ],
                }}
                options={{
                  scales: {
                    r: {
                      angleLines: { color: '#cc0000' }, // Vodacom dark red
                    },
                  },
                }}
              />
            ) : (
              <p className="text-center">Please select a racer</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
