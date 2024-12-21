function toggleDivVisibility1() {
    const div = document.getElementById("toggle1.1");
    if (div.style.display === "block") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
}

function toggleDivVisibility2() {
    const div = document.getElementById("toggle2.1");
    if (div.style.display === "block") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
}

function toggleDivVisibility3() {
    const div = document.getElementById("toggle3.1");
    if (div.style.display === "block") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
}

function toggleDivVisibility4() {
    const div = document.getElementById("toggle4.1");
    if (div.style.display === "block") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
}

// Event listener for the button click
document.getElementById("toggle1").addEventListener("click", toggleDivVisibility1);
document.getElementById("toggle2").addEventListener("click", toggleDivVisibility2);
document.getElementById("toggle3").addEventListener("click", toggleDivVisibility3);
document.getElementById("toggle4").addEventListener("click", toggleDivVisibility4);
