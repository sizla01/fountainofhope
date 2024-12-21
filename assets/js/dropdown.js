function toggleDivVisibility1() {
    const div = document.getElementById("dropdown-div");
    if (div.style.display === "block") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
}

// Event listener for the button click
document.getElementById("dropdown").addEventListener("click", toggleDivVisibility1);
