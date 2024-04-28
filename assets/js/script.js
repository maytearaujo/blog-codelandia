const icon = document.getElementById("icon");
const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");

icon.onclick = () => {
  icon.classList.toggle("filled");
};

icon1.onclick = () => {
  icon1.classList.toggle("filled");
};

icon2.onclick = () => {
  icon2.classList.toggle("filled");
};