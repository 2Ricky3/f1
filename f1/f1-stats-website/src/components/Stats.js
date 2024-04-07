import axios from "axios";
import Chart from "chart.js/auto";
import React, { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";

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
              "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
            },
          }
        );

        const data = response.data.response;
        setdropDownData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (dropDownData === null) {
    return (
      <div className="home-container">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <h2>F1 Racer Stats</h2>
      <div className="chartsContainer">
        <div className="chart1">
          <select onChange={(e) => setDropDownValOne(e.target.value)}>
            {dropDownData.map((race, i) => (
              <option key={i} value={i}>
                {race.driver.name} {race.team.name}
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
                    backgroundColor: ["rgba(217, 100, 43, 0.75)"],
                    borderColor: "rgba(217, 100, 43, 1)",
                    borderWidth: 1,
                  },
                ],
              }}
            />
          ) : (
            <p>please select racer</p>
          )}
        </div>
        <div className="chart2">
          <select
            onChange={(e) => {
              setDropDownValTwo(e.target.value);
              console.log(dropDownValTwo);
            }}
          >
            {dropDownData.map((race, i) => (
              <option key={i} value={i}>
                {race.driver.name} {race.team.name}
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
                    backgroundColor: ["rgba(217, 100, 43, 0.75)"],
                    borderColor: "rgba(217, 100, 43, 1)",
                    borderWidth: 1,
                  },
                ],
              }}
            />
          ) : (
            <p>please select racer</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Stats;