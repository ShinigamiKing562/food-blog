function changeBackground() {
  var scrollPosition = window.scrollY;

  if (scrollPosition < 100) {
    document.body.style.backgroundImage = "url(C:\\Users\\vkama\\OneDrive\\Documents\\Cake website\\Multimedia files\\back1.jpg)";
  } else if (scrollPosition < 200) {
    document.body.style.backgroundImage = "url(C:\\Users\\vkama\\OneDrive\\Documents\\Cake website\\Multimedia files\\back2.jpg)";
  } else {
    document.body.style.backgroundImage = "url(C:\\Users\\vkama\\OneDrive\\Documents\\Cake website\\Multimedia files\\back3.jpg)";
  }
}

window.addEventListener("scroll", changeBackground);
