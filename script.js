//your JS code here. If required.
// Helper function to simulate delay
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main async function triggered on button click
async function showMessageAfterDelay() {
  const text = document.getElementById('text').value;
  const delay = parseInt(document.getElementById('delay').value, 10);
  const output = document.getElementById('output');

  if (!text || isNaN(delay)) {
    output.innerText = 'Please enter both message and delay.';
    return;
  }

  output.innerText = 'Waiting...';
  await wait(delay);
  output.innerText = text;
}

// Event listener for the button
document.getElementById('btn').addEventListener('click', showMessageAfterDelay);
