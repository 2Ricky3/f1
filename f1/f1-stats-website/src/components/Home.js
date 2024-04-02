import React from 'react';
import lewisHamiltonImage from 'C:/Users/USER-PC/Documents/GitHub/f1/f1/f1-stats-website/src/lewisHamiltonImage.jpg'; // Import the image file

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to <b>F1 Statistics Website</b></h1>
      <p>The best top 7 drivers of all time!</p>
      <div className="red-box">
      <div class="button-container">
            <button> 1. Lewis Hamilton</button>
            <button> 2. Michael Schumacher</button>
            <button> 3. Max Verstappen</button>
            <button> 4. Sebastian Vettel</button>
            <button> 5. Alain Prost</button>
            <button> 6. Ayrton Senna</button>
            <button> 7. Fernando Alonso</button>
        </div>
        <div className="image-container">
        <img src={lewisHamiltonImage} alt="Lewis Hamilton" />
        </div>
      </div>
     
    </div>
  );
};

export default Home;
