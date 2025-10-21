// --- FORM SUBMISSION SCRIPT ---
function handleSubscriptionSubmit(event) {
  // Prevent the default form submission
  event.preventDefault();
  
  const form = document.getElementById('subscribe-form');
  const submitButton = document.getElementById('submit-button');
  const successMessage = document.getElementById('success-message');
  const emailInput = document.getElementById('email-input');

  if (!form || !submitButton || !successMessage || !emailInput) {
    console.error("Form elements not found!");
    return false;
  }

  const email = emailInput.value;
  console.log("Form submission started for email:", email);
  
  submitButton.disabled = true;
  submitButton.innerText = 'Submitting...';

  // Create the form data with all required Google Forms fields
  const formData = new URLSearchParams();
  formData.append('entry.163367855', email);
  formData.append('fvv', '1');
  formData.append('partialResponse', '[null,null,"-7826433413250839612"]');
  formData.append('pageHistory', '0');
  formData.append('fbzx', '-7826433413250839612');

  const action = "https://docs.google.com/forms/d/e/1FAIpQLSd8UEgzxZRVmvB2CxH05iZe-JotLhh2xroc1PPoq4xld_6WcA/formResponse";
  console.log("Sending to:", action);
  console.log("Form data:", formData.toString());
  
  fetch(action, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData
  }).then(() => {
    console.log("Form submitted successfully (no-cors mode - can't see actual response)");
    form.style.display = 'none';
    successMessage.style.display = 'block';
  }).catch(error => {
    console.error('Error during fetch:', error);
    alert('An error occurred. Please try again.');
    submitButton.disabled = false;
    submitButton.innerText = 'Subscribe';
  });
  
  return false;
}

// --- COUNTDOWN TIMER SCRIPT ---
document.addEventListener("DOMContentLoaded", function () {
  // Timer functionality
  const timerEl = document.getElementById("timer");
  if (timerEl) {
    const targetDate = new Date("2025-11-05T00:00:00Z").getTime();

    function updateTimer() {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        timerEl.innerHTML = `<span class="expired">🚀 Challenge Launched!</span>`;
        timerEl.classList.remove("pulse");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      timerEl.innerHTML = `
        <div class="time-box"><span>${days}</span><label>d</label></div>
        <div class="time-box"><span>${hours}</span><label>h</label></div>
        <div class="time-box"><span>${minutes}</span><label>m</label></div>
        <div class="time-box"><span>${seconds}</span><label>s</label></div>
      `;

      if (diff < 24 * 60 * 60 * 1000) timerEl.classList.add("pulse");
      else timerEl.classList.remove("pulse");
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // Form functionality - add event listener to the form
  const form = document.getElementById('subscribe-form');
  if (form) {
    console.log("Form found, adding event listener");
    form.addEventListener('submit', handleSubscriptionSubmit);
  } else {
    console.log("Form not found on page load");
  }
});
