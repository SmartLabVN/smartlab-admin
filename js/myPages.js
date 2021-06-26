// A $( document ).ready() block.
$( document ).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const isLogin = urlParams.get('f');
  if (typeof isLogin === 'undefined'){
    window.location.replace("./login.html");
  }
});