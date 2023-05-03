function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setRandomLaserPositions(laser) {
  laser.style.left = `${randomBetween(0, 100)}%`;
  laser.style.top = `${randomBetween(0, 100)}%`;
}

const laser1a = document.getElementById("laser1a");
const laser1b = document.getElementById("laser1b");
const laser2a = document.getElementById("laser2a");
const laser2b = document.getElementById("laser2b");

setRandomLaserPositions(laser1a);
setRandomLaserPositions(laser1b);
setRandomLaserPositions(laser2a);
setRandomLaserPositions(laser2b);

function onAnimationIteration(event) {
  setRandomLaserPositions(event.target);
}

laser1a.addEventListener("animationiteration", onAnimationIteration);
laser1b.addEventListener("animationiteration", onAnimationIteration);
laser2a.addEventListener("animationiteration", onAnimationIteration);
laser2b.addEventListener("animationiteration", onAnimationIteration);
