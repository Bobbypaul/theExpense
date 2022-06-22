const theHover = document.querySelectorAll("span");
const hoverdiv = document.querySelectorAll(".hoverdiv");

theHover.forEach(function (element, index, all) {
  theHover[index].addEventListener("mouseenter", function () {
    hoverdiv[index].style.visibility = "visible";
  });

  theHover[index].addEventListener("mouseleave", function () {
    hoverdiv[index].style.visibility = "hidden";
  });
});
