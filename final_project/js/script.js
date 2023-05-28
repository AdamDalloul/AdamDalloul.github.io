// Text is highlighted on the page and it scrolls to that section on the page when a link is clicked with the id of location-section (needs to be at the top because it need first priority to check when the link is clicked and to highligth the text)
// This works for both highlighting locations, for the buttons on the give_help.html and the help.html
document.addEventListener("DOMContentLoaded", function() {
  // Read the URL parameter
  const params = new URLSearchParams(window.location.search);
  const highlightSection = params.get("highlight");

  // Apply highlighting if the parameter matches a specific section for location number 1
  if (highlightSection === "location") {
    const locationSection = document.getElementById("location-section");
    if (locationSection) {
      locationSection.classList.add("highlight");
      locationSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the highlighted section
    }
  }

  // Apply highlighting if the parameter matches a specific section for location number 2
  if (highlightSection === "location2") {
    const locationSection = document.getElementById("location-section2");
    if (locationSection) {
      locationSection.classList.add("highlight");
      locationSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the highlighted section
    }
  }
});


// Pop-Up Code
document.addEventListener("DOMContentLoaded", function() {
    var popupContainer = document.getElementById("popup-container");
    var closeIcon = document.getElementById("close-icon");
  
    function showPopup() {
      popupContainer.style.display = "block";
      setTimeout(function() {
        popupContainer.classList.remove("popup-hide");
        document.body.classList.add("popup-open"); // Add class to body to disable scrolling
      }, 100);
    }
  
    function hidePopup() {
      popupContainer.classList.add("popup-hide");
      setTimeout(function() {
        popupContainer.style.display = "none";
        document.body.classList.remove("popup-open"); // Remove class from body to enable scrolling
      }, 500);
    }
  
    closeIcon.addEventListener("click", hidePopup);
  
    var visitCount = parseInt(getCookie("popup_visit_count"));
    if (isNaN(visitCount)) {
      // First visit
      setTimeout(showPopup, 5000); // Show the pop-up after 5 seconds
      setCookie("popup_visit_count", 1, 365); // Set cookie to remember the visit
    } else {
      // Subsequent visits
      setTimeout(showPopup, 15000); // Show the pop-up after 15 seconds
      setCookie("popup_visit_count", visitCount + 1, 365); // Increment visit count and update the cookie
    }
  });
  
  // Helper function to get the value of a cookie
  function getCookie(name) {
    var cookieArr = document.cookie.split("; ");
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      if (cookiePair[0] === name) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }
  
  // Helper function to set a cookie
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
  }
  

// Volunteer Form
const form = document.getElementById('volunteer-form');
const output = document.getElementById('form-output');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const city = document.getElementById('city').value;
  const volunteerHours = document.getElementById('volunteer-hours').checked;
  const communityService = document.getElementById('community-service').checked;
  const courtOrdered = document.getElementById('court-ordered').checked;
  const availability = Array.from(document.querySelectorAll('input[name="availability"]:checked')).map(input => input.nextElementSibling.textContent);
  const moreInfo = document.getElementById('more-info').value;

  // Validate required fields
  if (!firstName || !lastName || !email || !phone) {
    output.innerHTML = '<p class="error-message">Please fill in all required fields.</p>';
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    output.innerHTML = '<p class="error-message">Please enter a valid email address.</p>';
    return;
  }

  // Validate phone number format
  const phoneRegex = /^\d{10}$/;
  if (!phone.match(phoneRegex)) {
    output.innerHTML = '<p class="error-message">Please enter a valid phone number (10 digits only).</p>';
    return;
  }

 // Create the output message
    let message = '<p><strong>Thank You. The form has been submitted.</strong> </p>';
    message += `<p><strong>First Name:</strong> ${firstName}</p>`;
    message += `<p><strong>Last Name:</strong> ${lastName}</p>`;
    message += `<p><strong>Email:</strong> ${email}</p>`;
    message += `<p><strong>Phone:</strong> ${phone}</p>`;
    message += `<p><strong>City:</strong> ${city}</p>`;
    message += '<p><strong>Reason for Volunteering:</strong></p>';
    message += `<ul>`;
    if (volunteerHours) message += `<li>I need volunteer hours</li>`;
    if (communityService) message += `<li>I need high school community service hours</li>`;
    if (courtOrdered) message += `<li>I need court ordered hours</li>`;
    message += `</ul>`;
    message += '<p><strong>Availability:</strong></p>';
    message += `<ul>`;
    availability.forEach(avail => {
    message += `<li>${avail}</li>`;
    });
    message += `</ul>`;
    message += `<p><strong>More Info:</strong> ${moreInfo}</p>`;

  // Reset the form
  form.reset();
  output.innerHTML = message;
});


