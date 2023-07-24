var Close = document.getElementById("close");
var imgsArray = Array.from(document.querySelectorAll(".item img"));
var boxContainer = document.getElementById("boxContainer");
var boxItem = document.getElementById("boxItem");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
for (var i = 0; i < imgsArray.length; i++) {
  imgsArray[i].addEventListener("click", openItem);
}
var index = 0;
function openItem(e) {
  boxItem.style.backgroundImage = `url(${e.target.src})`;
  boxContainer.style.display = "flex";
  index = imgsArray.indexOf(e.target);
}
Close.addEventListener("click", closeItem);
function closeItem() {
  boxContainer.style.display = "none";
}
next.addEventListener("click", nextItem);
function nextItem() {
  index++;
  index = index % imgsArray.length;
  boxItem.style.backgroundImage = `url(${imgsArray[index].src})`;
}
prev.addEventListener("click", prevItem);
function prevItem() {
  index--;
  index < 0 ? (index = imgsArray.length - 1) : index;
  boxItem.style.backgroundImage = `url(${imgsArray[index].src})`;
}
document.addEventListener("keydown", arrowRight);
function arrowRight(e) {
  e.key == "ArrowRight" ? nextItem() : e.key;
}
document.addEventListener("keydown", arrowLeft);
function arrowLeft(e) {
  e.key == "ArrowLeft" ? prevItem() : e.key;
}
document.addEventListener("keydown", space);
function space(e) {
  if (e.key == " ") {
    boxItem.style.backgroundImage = `url(${imgsArray[index].src})`;
    boxContainer.style.display = "flex";
  }
}
document.addEventListener("keydown", escapeImg);
function escapeImg(e) {
  e.key == "Escape" ? closeItem() : e.key;
}
boxContainer.addEventListener("click", function () {
  boxContainer.style.display = "none";
});
boxItem.addEventListener("click", function (e) {
  e.stopPropagation();
});
