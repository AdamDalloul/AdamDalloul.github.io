// Function to toggle dark mode
function dark_mode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  
    // Save dark mode setting to localStorage
    var isDarkModeEnabled = element.classList.contains("dark-mode");
    localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
  }
  
  // Check if dark mode is enabled in localStorage
  var isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
  
  // Set dark mode class on body element
  if (isDarkModeEnabled) {
    document.body.classList.add("dark-mode");
  }
  
  // Listen for changes to the dark mode setting
  window.addEventListener("storage", function (event) {
    if (event.key === "darkModeEnabled") {
      // Update dark mode setting on all pages
      var isDarkModeEnabled = event.newValue === "true";
      var element = document.body;
      if (isDarkModeEnabled) {
        element.classList.add("dark-mode");
      } else {
        element.classList.remove("dark-mode");
      }
    }
  });
  