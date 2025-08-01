const envelope = document.getElementById("env");
const paperBox = document.querySelector(".paper_box");

envelope.addEventListener("click", () => {
  paperBox.style.display = "block";
  paperBox.style.animation = "none";
  paperBox.offsetHeight;
  paperBox.style.animation = "zoomIn 0.4s ease forwards";
});
