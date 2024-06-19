import axios from "axios";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [raceRanks, setRaceRanks] = useState(null);
  const [labels, setLabels] = useState(["loading..."]);
  const [coloR, setColoR] = useState([""]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-formula-1.p.rapidapi.com/rankings/drivers",
          {
            params: { season: 2023 },
            headers: {
              "X-RapidAPI-Key": "aab88935aemshbf9715733d12537p1d684cjsn0ad7bfefdc23",
              "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
            },
          }
        );

        const data = response.data.response;
        console.log(data);

        const labels = data.slice(0, 7).map((res) => res.driver.name);
        const colors = Array.from({ length: 7 }, () => dynamicColors());

        setRaceRanks(data.slice(0, 7));
        setLabels(labels);
        setColoR(colors);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const dynamicColors = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  };

  if (raceRanks === null) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">
        Welcome to <b>F1 Statistics Website</b>
      </h1>
      <h2 className="mb-4">The best top 7 drivers of all time!</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="d-grid gap-2">
            {raceRanks.map((res) => (
              <button key={res.driver.id} className="btn btn-primary">
                {res.driver.name}
              </button>
            ))}
          </div>
        </div>
        <div className="col-md-8">
          <Pie
            options={{
              elements: {
                bar: {
                  borderWidth: 2,
                },
              },
              responsive: true,
              plugins: {
                legend: {},
                title: {
                  display: true,
                  text: "Race Points",
                },
              },
            }}
            data={{
              labels,
              datasets: [
                {
                  data: raceRanks.map((res) => parseInt(res.points)),
                  borderColor: "rgba(23, 56, 89, 0)",
                  backgroundColor: coloR,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
