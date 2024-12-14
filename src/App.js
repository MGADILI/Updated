// app.js
 
// Function to simulate a coin toss
function tossCoin() {
  const outcomes = ['Heads', 'Tails'];
  const randomIndex = Math.floor(Math.random() * 2);
  return outcomes[randomIndex];
}

// Function to simulate a die roll
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to handle Probability Space (Coin Toss, Die Roll)
function handleProbabilitySpace() {
  const space = document.getElementById('probabilitySpace').value;
  const event = document.getElementById('event').value;
  const trials = parseInt(document.getElementById('trials').value);

  if (isNaN(trials) || trials <= 0) {
      alert('Please enter a valid number of trials.');
      return;
  }

  let result = '';
  let eventProbability = 0;

  if (space === 'Coin Toss') {
      result = tossCoin();
      eventProbability = calculateProbability('Heads', trials); // Example: event = 'Heads'
  } else if (space === 'Die Roll') {
      result = rollDie();
      eventProbability = calculateProbability('Even', trials); // Example: event = 'Even'
  }

  // Display results
  const resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = `
<p><strong>Outcome: </strong>${result}</p>
<p><strong>Calculated Probability of ${event}: </strong>${eventProbability.toFixed(2)}%</p>
  `;
}

// Function to calculate probability for a specific event in a given number of trials
function calculateProbability(event, totalTrials) {
  let successCount = 0;

  for (let i = 0; i < totalTrials; i++) {
      let outcome = tossCoin();
      if (event === 'Heads' && outcome === 'Heads') {
          successCount++;
      } else if (event === 'Tails' && outcome === 'Tails') {
          successCount++;
      }
  }

  return (successCount / totalTrials) * 100;
}

// Event listener for the "Simulate" button
document.getElementById('simulateButton').addEventListener('click', handleProbabilitySpace);