window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar").style.boxShadow = "10px 2px 12px rgba(85, 83, 83, 0.582)";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("navbar").style.boxShadow = "";
    document.getElementById("logo").style.fontSize = "35px";
  }
}