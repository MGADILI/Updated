// Function to simulate a coin toss
function tossCoin() {
  return Math.random() < 0.5 ? 'Heads' : 'Tails';
}

// Function to simulate a die roll
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to calculate probability of an event (for simplicity, assume 50% for coin toss)
function calculateProbability(event, trials) {
  let successCount = 0;
  for (let i = 0; i < trials; i++) {
      if (tossCoin() === event) {
          successCount++;
      }
  }
  return (successCount / trials) * 100;
}

// Function to handle simulation
function handleSimulation() {
  const space = document.getElementById('probabilitySpace').value;
  const event = document.getElementById('event').value;
  const trials = parseInt(document.getElementById('trials').value);

  if (isNaN(trials) || trials <= 0) {
      alert('Please enter a valid number of trials.');
      return;
  }

  let result = '';
  let probability = 0;

  // Simulate based on selected probability space
  if (space === 'Coin Toss') {
      result = tossCoin();
      probability = calculateProbability(event, trials);
  } else if (space === 'Die Roll') {
      result = rollDie();
      probability = calculateProbability(event === 'Even' ? 'Even' : 'Odd', trials);
  }

  // Show the results
  const resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = `
<p><strong>Outcome: </strong>${result}</p>
<p><strong>Calculated Probability of ${event}: </strong>${probability.toFixed(2)}%</p>
  `;
}

// Add event listener to simulate button
document.getElementById('simulateButton').addEventListener('click', handleSimulation);