function changeBackground() {
  var scrollPosition = window.scrollY;

  if (scrollPosition < 100) {
    document.body.style.backgroundImage = "url(https://raw.githubusercontent.com/ShinigamiKing562/food-blog/main/Multimedia%20files/back1.jpg)";
  } else if (scrollPosition < 200) {
    document.body.style.backgroundImage = "url(https://raw.githubusercontent.com/ShinigamiKing562/food-blog/main/Multimedia%20files/back2.jpg)";
  } else {
    document.body.style.backgroundImage = "url(https://raw.githubusercontent.com/ShinigamiKing562/food-blog/main/Multimedia%20files/back3.jpg)";
  }
}

window.addEventListener("scroll", changeBackground);
