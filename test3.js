function xClicked(){
setCookie("username", "dienvidaustrumazija", 1);
document.getElementById("navbars").style.bottom = "-24px";
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  var d2 = new Date();
  d.setTime(d.getTime() + (exdays*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var user=getCookie("username");
    
      if (window.onscroll && user!="dienvidaustrumazija") {
        document.getElementById("navbars").style.bottom = "0px";
    }
}


var timer = null;
window.addEventListener('scroll', function() {
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
          document.getElementById("navbars").style.bottom = "-24px";
    }, 3000);
}, false);
