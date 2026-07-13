const gift = document.getElementById("gift");
const giftContainer = document.getElementById("giftContainer");
const surprise = document.getElementById("surprise");

gift.addEventListener("click", () => {

gift.style.transform = "scale(0.8) rotate(-10deg)";

gift.style.transition = "0.5s";

setTimeout(() => {

gift.style.transform = "scale(1.2) rotate(15deg)";

},300);

setTimeout(() => {

giftContainer.style.opacity = "0";

giftContainer.style.transform = "scale(.7)";

},700);

setTimeout(() => {

giftContainer.style.display="none";

surprise.classList.add("show");

},1500);

});