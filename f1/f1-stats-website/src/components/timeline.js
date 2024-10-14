import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Timeline.css';

const Timeline = () => {
  const [pitStops, setPitStops] = useState([]);

  useEffect(() => {
    const fetchPitStops = async () => {
      try {
        const response = await axios.get(
          "https://api-formula-1.p.rapidapi.com/pitstops",
          {
            params: { race: 50 }, // You can change the race number as needed
            headers: {
              "X-RapidAPI-Key": "aab88935aemshbf9715733d12537p1d684cjsn0ad7bfefdc23",
            },
          }
        );

        const data = response.data.response;
        setPitStops(data);
      } catch (error) {
        console.error("Error fetching pit stop data:", error);
      }
    };

    fetchPitStops();
  }, []);

  return (
    <Container>
      <h2 className="text-center my-4" style={{ color: "#e60000" }}>Pit Stop Timeline</h2>
      {pitStops.map((stop, index) => (
        <Card key={index} className="my-3" style={{ borderColor: "#e60000" }}>
          <Card.Body style={{ backgroundColor: "#f8f9fa" }}>
            <Row>
              <Col>
                <strong>Driver:</strong> {stop.driver.name}
              </Col>
              <Col>
                <strong>Team:</strong> {stop.team.name}
              </Col>
              <Col>
                <strong>Lap:</strong> {stop.lap}
              </Col>
              <Col>
                <strong>Time:</strong> {stop.time}
              </Col>
              <Col>
                <strong>Total Time:</strong> {stop.total_time}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Timeline;
