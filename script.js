document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const mainContent = document.querySelector("main");

  toggleButton.addEventListener("click", function () {
      mainContent.innerHTML = ""; // Clear the main content
      mainContent.innerHTML = '<object data="main.html"></object>'; // Load the main content
  });
});