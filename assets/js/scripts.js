console.log(document.getElementById('color-scheme-toggle'));

document.getElementById('color-scheme-toggle').addEventListener('click', function() {
  document.getElementsByTagName('body')[0].classList.toggle('dark-mode');
});

