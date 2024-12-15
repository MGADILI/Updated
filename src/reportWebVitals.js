import { reportWebVitals } from 'web-vitals';
 
// This function sends the collected web vitals data to a remote server
function sendVitalsToServer(vitals) {
  // For demonstration, we'll just log it, but you can replace this with
  // an API call to send the data to your backend server
  fetch('http://localhost:3000/api/vitals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vitals),
  })
    .then((response) => response.json())
    .then((data) => console.log('Vitals sent to server', data))
    .catch((error) => console.error('Error sending vitals to server', error));
}
 
// This function is where you can customize how you report the vitals data
export function reportRemoteVitals() {
  reportWebVitals((metric) => {
    // Send the collected web vitals data to the server
    sendVitalsToServer(metric);
    // Optionally, log it to the console for debugging
    console.log('Web Vitals Metric:', metric);
  });
}