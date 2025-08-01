const button = document.getElementById("nxtBTN");
button.addEventListener("click", () => {
  button.classList.add("clicked");
  setTimeout(() => {
    button.classList.remove("clicked");
  }, 400);
});




