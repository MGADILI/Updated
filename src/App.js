// App.js
 
import React, { useState } from 'react';
import './App.css';
 
function App() {
  const [radius, setRadius] = useState('');
  const [area, setArea] = useState(null);
  const [error, setError] = useState('');
 
  // Handle input change
  const handleRadiusChange = (event) => {
    setRadius(event.target.value);
  };
 
  // Calculate the area of the circle
  const calculateArea = () => {
    // Clear error message if there's any
    setError('');
    // Validate if the radius is a positive number
    if (radius <= 0 || isNaN(radius)) {
      setError('Please enter a valid positive number for radius');
      setArea(null);
      return;
    }
 
    // Calculate area: Area = π * r^2
    const areaCalculated = Math.PI * Math.pow(radius, 2);
    setArea(areaCalculated.toFixed(2));
  };
 
  return (
<div className="container">
<h1>Circle Area Calculator</h1>
<label htmlFor="radius">Enter the radius of the circle (r):</label>
<input
        type="number"
        id="radius"
        value={radius}
        onChange={handleRadiusChange}
        placeholder="Radius"
      />
<button onClick={calculateArea}>Calculate Area</button>
 
      {error && <div className="error">{error}</div>}
 
      {area !== null && !error && (
<div className="result">The area of the circle is: {area} square units</div>
      )}
</div>
  );
}
 
export default App;