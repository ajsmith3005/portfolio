// console.log(document.getElementById('color-scheme-toggle'));

// document.getElementById('color-scheme-toggle').addEventListener('click', function() {
//   document.getElementsByTagName('body')[0].classList.toggle('dark-mode');
// });

let navBarHeight = document.getElementById("logo").offsetHeight;

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = -1 * navBarHeight;
  }
  prevScrollpos = currentScrollPos;
}