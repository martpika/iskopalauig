function slideMenu() {
  var x = document.querySelector("#header");
  if (x.className === "header-here") {
    x.className += " responsive";
  }else{
    x.className = "header-here";
  }
}

function dropShow () {
  document.querySelector("#dropMenu").classList.toggle("show");
}

function parallax(){
  window.addEventListener("scroll", ()=>{
    let targetDomAboutBanner = document.querySelector(".about_us_landing");
    let boundAbout = targetDomAboutBanner.getBoundingClientRect();

    let targetDomSupportBanner = document.querySelector(".support_landing");
    let boundSupport = targetDomSupportBanner.getBoundingClientRect();

    if (isInViewport(boundAbout)) {
      document.getElementById("about-bg").style.transform = "translateY(" + -.3 * boundAbout.bottom + "px)";
    }
    if (isInViewport(boundSupport)) {
      document.getElementById("support_bg").style.transform = "translateY(" + -.25 * boundSupport.bottom + "px)";
    }
  });
}
function isInViewport(e) {
  if (e.top <= window.innerHeight && e.bottom >=0) {
    return true
  }else {
    return false
  }
}
