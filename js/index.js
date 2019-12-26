window.onscroll = function() {
  var headerMain = document.getElementById('ceshi1');
  if(window.pageYOffset >= 1){
    headerMain.classList.add('headerMain-bg');
  } else {
    headerMain.classList.remove('headerMain-bg');
  }
}
