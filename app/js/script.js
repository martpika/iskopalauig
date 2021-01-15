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
  console.log(2);
}