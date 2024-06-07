// You can add any necessary JavaScript functionality here
// For example, you can update the alert message based on data from an API or backend

// Example: Simulating an API call or backend data fetch
setTimeout(() => {
    const alertMessage = document.getElementById('alert-message');
    alertMessage.classList.remove('safe');
    alertMessage.classList.add('warning');
    alertMessage.innerHTML = `
        <p>Heavy rainfall is expected in the next 24 hours in certain areas of Nairobi.</p>
        <p>Residents in low-lying areas and near river banks are advised to take necessary precautions and be prepared for potential flooding.</p>
        <p>Stay tuned for further updates and follow instructions from local authorities.</p>
    `;
}, 5000);
