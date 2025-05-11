window.onload = () => {
  document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const audio = document.getElementById("bgAudio");
const fixedImg = document.getElementById("fixedImage");

openBtn.addEventListener("click", () => {
  wrapper.classList.add("open");
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";

  // play audio
  audio.currentTime = 0;
  audio.play();

  // fade in the fixed image
  fixedImg.style.opacity = "1";
});

closeBtn.addEventListener("click", () => {
  wrapper.classList.remove("open");
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";

  // pause & reset audio
  audio.pause();
  audio.currentTime = 0;

  // fade out the fixed image
  fixedImg.style.opacity = "0";
});
