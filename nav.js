<script type="text/javascript">
function xClicked(){
setCookie("username", "dienvidaustrumazija", 1);
document.getElementById("navbars").style.top = "110%";
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
var ca2 = ca.length;
  for(var i = 0; i &lt ca2; i++) {
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
        document.getElementById("navbars").style.top = "92%";
    } 
}


var timer = null;
window.addEventListener('scroll', function() {
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
          document.getElementById("navbars").style.top = "110%";
    }, 5000);
}, false);


</script>
