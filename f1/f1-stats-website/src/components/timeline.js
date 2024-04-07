import React from 'react';
import './Timeline.css';

function Timeline() {
  const f1Events = [
    { year: 1950, event: 'First Formula 1 World Championship race held in Silverstone, UK' },
    { year: 1958, event: 'First Constructors\' Championship introduced' },
    { year: 1978, event: 'First turbocharged car raced in Formula 1' },
    { year: 1981, event: 'First carbon fiber monocoque introduced' },
    { year: 1988, event: 'Ayrton Senna wins his first Formula 1 World Championship with McLaren' },
    { year: 1992, event: 'Nigel Mansell becomes the first driver to win 9 races in a single season' },
    { year: 1994, event: 'Tragic death of Ayrton Senna at San Marino Grand Prix' },
    { year: 2000, event: 'Michael Schumacher wins his third World Championship with Ferrari' },
    { year: 2014, event: 'Introduction of hybrid power units (V6 turbocharged engines)' },
    { year: 2022, event: 'Lewis Hamilton wins his record-breaking 8th World Championship' }
  ];

  return (
    <div className="timeline-container">
      <h2>F1 Timeline</h2>
      <div className="timeline">
        {f1Events.map((event, index) => (
          <div className="event" key={index}>
            <div className="year">{event.year}</div>
            <div className="content">{event.event}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
