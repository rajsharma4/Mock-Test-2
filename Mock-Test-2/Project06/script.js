// Get the modal element
let modal = document.getElementById("myModal");
let btn = document.getElementById("openModalBtn");
let closeBtn = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}
btn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});
