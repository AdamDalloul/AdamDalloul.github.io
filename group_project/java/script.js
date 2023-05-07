function dark_mode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
      document.cookie = "mode=dark";
    } else {
      document.cookie = "mode=light";
    }
  }
  
  window.onload = function() {
    var mode = getCookie("mode");
    if (mode == "dark") {
      document.body.classList.add("dark-mode");
      document.getElementById("_1st-toggle-btn").querySelector("input[type='checkbox']").checked = true;
    } else {
      document.body.classList.remove("dark-mode");
      document.getElementById("_1st-toggle-btn").querySelector("input[type='checkbox']").checked = false;
    }
  };
  
  function getCookie(name) {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) == (name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }
  