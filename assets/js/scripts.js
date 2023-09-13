
// ----Dark mode toggle----
document.getElementById('color-scheme-toggle').addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  const html = document.querySelector('html');
  html.classList.toggle('dark-mode');
}

// ----Nav bar hiding behavior----
let navBarHeight = document.getElementById("navbar").offsetHeight;

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = -1 * navBarHeight + "px";
  }
  prevScrollPos = currentScrollPos;
}

// ----Background accent parallax behavior---- TO BE ADDED

