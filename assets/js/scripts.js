
//color scheme toggle

document.getElementById('color-scheme-toggle').addEventListener('click', function() {
  let currentColorScheme = document.getElementById("html").getAttribute("class");
  document.getElementById("html").style.transitionDuration = "0.3s";
  if (document.querySelector('html[class="dark-mode"]')) {
    document.getElementById("html").setAttribute("class", "light-mode");
    document.getElementById("toggle-svg-path").setAttribute("d", "M2 0C0.895431 0 0 0.89543 0 2V33C0 34.1046 0.89543 35 2 35H33C34.1046 35 35 34.1046 35 33V2C35 0.895431 34.1046 0 33 0H2ZM14.3759 5.43333C14.5284 5.61867 14.6219 5.8455 14.6442 6.08449C14.6664 6.32349 14.6165 6.56367 14.5009 6.77402C13.5975 8.43264 13.1257 10.2918 13.1289 12.1805C13.1289 18.4636 18.2513 23.5513 24.5643 23.5513C25.3879 23.5513 26.1895 23.4654 26.9599 23.3013C27.196 23.2501 27.442 23.2697 27.6671 23.3575C27.8922 23.4453 28.0865 23.5975 28.2256 23.7951C28.3725 24.0005 28.4474 24.2486 28.4386 24.501C28.4299 24.7533 28.3379 24.9957 28.1772 25.1904C26.9516 26.6959 25.4054 27.9088 23.6515 28.7409C21.8976 29.5729 19.98 30.0031 18.0387 30C10.8349 30 5 24.1966 5 17.0463C5 11.6648 8.30344 7.04903 13.007 5.09269C13.2413 4.99368 13.5014 4.97335 13.7482 5.03478C13.9951 5.0962 14.2153 5.23606 14.3759 5.43333ZM12.5913 7.04747C10.7827 8.01755 9.27077 9.45951 8.21613 11.2201C7.16149 12.9807 6.60359 14.9941 6.60171 17.0463C6.60171 23.3278 11.7256 28.4156 18.0387 28.4156C19.5505 28.4182 21.0478 28.121 22.4439 27.5411C23.84 26.9612 25.1073 26.1102 26.1723 25.0373C25.6457 25.1029 25.1097 25.1357 24.5643 25.1357C17.3605 25.1357 11.5272 19.3324 11.5272 12.1821C11.5272 10.3585 11.9053 8.62253 12.5913 7.04747ZM21.8672 9.91797C21.8896 9.85031 21.9328 9.79142 21.9906 9.74969C22.0484 9.70795 22.1178 9.68548 22.1891 9.68548C22.2604 9.68548 22.3299 9.70795 22.3877 9.74969C22.4454 9.79142 22.4886 9.85031 22.511 9.91797L23.1158 11.7337C23.3861 12.5431 24.0205 13.1775 24.83 13.4478L26.6458 14.0525C26.7135 14.0749 26.7723 14.1181 26.8141 14.1759C26.8558 14.2337 26.8783 14.3031 26.8783 14.3744C26.8783 14.4457 26.8558 14.5152 26.8141 14.5729C26.7723 14.6307 26.7135 14.6739 26.6458 14.6963L24.83 15.301C24.4308 15.434 24.068 15.6582 23.7705 15.9557C23.4729 16.2532 23.2488 16.616 23.1158 17.0152L22.511 18.8309C22.4886 18.8985 22.4454 18.9574 22.3877 18.9991C22.3299 19.0409 22.2604 19.0633 22.1891 19.0633C22.1178 19.0633 22.0484 19.0409 21.9906 18.9991C21.9328 18.9574 21.8896 18.8985 21.8672 18.8309L21.2625 17.0152C21.1295 16.616 20.9053 16.2532 20.6078 15.9557C20.3102 15.6582 19.9475 15.434 19.5482 15.301L17.7324 14.6963C17.6648 14.6739 17.6059 14.6307 17.5641 14.5729C17.5224 14.5152 17.4999 14.4457 17.4999 14.3744C17.4999 14.3031 17.5224 14.2337 17.5641 14.1759C17.6059 14.1181 17.6648 14.0749 17.7324 14.0525L19.5482 13.4478C19.9475 13.3148 20.3102 13.0907 20.6078 12.7931C20.9053 12.4956 21.1295 12.1329 21.2625 11.7337L21.8672 9.91797ZM26.663 5.15371C26.6784 5.10922 26.7073 5.07064 26.7457 5.04333C26.784 5.01603 26.83 5.00136 26.8771 5.00136C26.9241 5.00136 26.9701 5.01603 27.0084 5.04333C27.0468 5.07064 27.0757 5.10922 27.0911 5.15371L27.4943 6.36314C27.674 6.90378 28.0975 7.32724 28.6382 7.50693L29.8476 7.91008C29.8921 7.9255 29.9307 7.95441 29.958 7.99277C29.9853 8.03114 30 8.07706 30 8.12415C30 8.17124 29.9853 8.21716 29.958 8.25552C29.9307 8.29389 29.8921 8.32279 29.8476 8.33822L28.6382 8.74136C28.3717 8.83 28.1296 8.97952 27.931 9.17807C27.7325 9.37662 27.5829 9.61873 27.4943 9.88516L27.0911 11.0946C27.0757 11.1391 27.0468 11.1777 27.0084 11.205C26.9701 11.2323 26.9241 11.2469 26.8771 11.2469C26.83 11.2469 26.784 11.2323 26.7457 11.205C26.7073 11.1777 26.6784 11.1391 26.663 11.0946L26.2598 9.88516C26.1712 9.61873 26.0216 9.37662 25.8231 9.17807C25.6245 8.97952 25.3824 8.83 25.1159 8.74136L23.9065 8.33822C23.862 8.32279 23.8234 8.29389 23.7961 8.25552C23.7688 8.21716 23.7541 8.17124 23.7541 8.12415C23.7541 8.07706 23.7688 8.03114 23.7961 7.99277C23.8234 7.95441 23.862 7.9255 23.9065 7.91008L25.1159 7.50693C25.6566 7.32724 26.0801 6.90378 26.2598 6.36314L26.663 5.15527V5.15371Z");
  } else{
    document.getElementById("html").setAttribute("class", "dark-mode");
    document.getElementById("toggle-svg-path").setAttribute("d", "M2 0C0.895431 0 0 0.89543 0 2V33C0 34.1046 0.89543 35 2 35H33C34.1046 35 35 34.1046 35 33V2C35 0.895431 34.1046 0 33 0H2ZM11.25 17.5C11.25 20.9375 14.0625 23.75 17.5 23.75C20.9375 23.75 23.75 20.9375 23.75 17.5C23.75 14.0625 20.9375 11.25 17.5 11.25C14.0625 11.25 11.25 14.0625 11.25 17.5ZM13.3333 17.5C13.3333 15.2083 15.2083 13.3333 17.5 13.3333C19.7917 13.3333 21.6667 15.2083 21.6667 17.5C21.6667 19.7917 19.7917 21.6667 17.5 21.6667C15.2083 21.6667 13.3333 19.7917 13.3333 17.5ZM17.5 9.16667C16.875 9.16667 16.4583 8.75 16.4583 8.125V6.04167C16.4583 5.41667 16.875 5 17.5 5C18.125 5 18.5417 5.41667 18.5417 6.04167V8.125C18.5417 8.75 18.125 9.16667 17.5 9.16667ZM16.4583 28.9583C16.4583 29.5833 16.875 30 17.5 30C18.125 30 18.5417 29.5833 18.5417 28.9583V26.875C18.5417 26.25 18.125 25.8333 17.5 25.8333C16.875 25.8333 16.4583 26.25 16.4583 26.875V28.9583ZM10.8333 11.875C10.5208 11.875 10.3125 11.7708 10.1042 11.5625L8.64584 10.1041C8.22918 9.68747 8.22918 9.06247 8.64584 8.6458C9.06251 8.22913 9.68751 8.22913 10.1042 8.6458L11.5625 10.1041C11.9792 10.5208 11.9792 11.1458 11.5625 11.5625C11.4583 11.7708 11.1458 11.875 10.8333 11.875ZM24.8958 26.3542C25.1042 26.5625 25.3125 26.6667 25.625 26.6667C25.8333 26.6667 26.1458 26.5625 26.3542 26.3542C26.7708 25.9375 26.7708 25.3125 26.3542 24.8958L24.8958 23.4375C24.4792 23.0208 23.8542 23.0208 23.4375 23.4375C23.0208 23.8542 23.0208 24.4792 23.4375 24.8958L24.8958 26.3542ZM8.125 18.5417H6.04167C5.41667 18.5417 5 18.125 5 17.5C5 16.875 5.41667 16.4583 6.04167 16.4583H8.125C8.75 16.4583 9.16667 16.875 9.16667 17.5C9.16667 18.125 8.75 18.5417 8.125 18.5417ZM26.875 18.5417H28.9583C29.5833 18.5417 30 18.125 30 17.5C30 16.875 29.5833 16.4583 28.9583 16.4583H26.875C26.25 16.4583 25.8333 16.875 25.8333 17.5C25.8333 18.125 26.25 18.5417 26.875 18.5417ZM9.37501 26.6667C9.06251 26.6667 8.85418 26.5625 8.64584 26.3542C8.22918 25.9375 8.22918 25.3125 8.64584 24.8958L10.1042 23.4375C10.5208 23.0208 11.1458 23.0208 11.5625 23.4375C11.9792 23.8542 11.9792 24.4792 11.5625 24.8958L10.1042 26.3542C9.89584 26.5625 9.68751 26.6667 9.37501 26.6667ZM23.4375 11.5625C23.6458 11.7708 23.8542 11.875 24.1667 11.875C24.375 11.875 24.6875 11.7708 24.8958 11.5625L26.3542 10.1041C26.7708 9.68747 26.7708 9.06247 26.3542 8.6458C25.9375 8.22913 25.3125 8.22913 24.8958 8.6458L23.4375 10.1041C23.0208 10.5208 23.0208 11.1458 23.4375 11.5625Z");
  }
});

//animate navbar to disappear/reappear on scrolling
let navBarHeight = document.getElementById("navbar").offsetHeight;
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0.5rem";
  } else {
    document.getElementById("navbar").style.top = -1 * navBarHeight + "px";
  }
  prevScrollPos = currentScrollPos;
}

