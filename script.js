// Get the modal and close button
const modal = document.getElementById("businessCardModal");
const closeBtn = document.getElementsByClassName("close")[0];

// Get the button that opens the modal
document.getElementById("btn-hire").addEventListener("click", () => {
    modal.style.display = "block";
});

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};