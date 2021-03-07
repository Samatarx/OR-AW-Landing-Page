const site = document.querySelector(".site");
const next = document.querySelector(".next");

const switcher = () => {
  site.classList.toggle("show");
  next.classList.toggle("show");
  site.style.animation = "none";
  site.offsetHeight; /* trigger reflow */
  site.style.animation = null;
};

const time = setInterval(switcher, 5000);
