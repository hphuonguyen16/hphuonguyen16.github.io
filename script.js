
document.getElementById("icon0").addEventListener("click", function () {
  display("p0"),iconChange("icon0")
})
document.getElementById("icon1").addEventListener("click", function () {
  display("p1"),iconChange("icon1")
});
document.getElementById("icon2").addEventListener("click", function () {
  display("p2"),iconChange("icon2")
});

function display(name) {
  let elem = document.getElementById(name)
  elem.style.height = "7em"
  elem.style.opacity="1"
}
function iconChange(name) {

  if(document.getElementsByClassName(name).className.localeCompare("fa-solid fa-plus"))
    document.getElementById(name).className = "fa-solid fa-minus"
  else {
     document.getElementById(name).className = "fa-solid fa-plus"
  }
}
 

