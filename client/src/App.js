import React, { useState } from 'react';
import './App.css'
function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ num1, num2 }),
    })
      .then((response) => response.json())
      .then((data) => {
        setRating(data.rating);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Machine Learning Prediction</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="num1">Age:</label>
        <input
          type="number"
          id="num1"
          value={num1}
          onChange={(event) => setNum1(event.target.value)}
        />
        <br />
        <label htmlFor="num2">Gender: 1== male ,0==female</label>
        <input
          type="number"
          id="num2"
          value={num2}
          onChange={(event) => setNum2(event.target.value)}
        />
        
        <br />
        <button type="submit">Predict</button>
      </form>
      {rating && <p>This group of people like <span>{rating}</span>  music</p>}
    </div>
  );
}

export default App;
