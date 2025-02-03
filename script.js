function toggleProfileMenu() {
    let menu = document.getElementById("profile-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function(event) {
    let profileIcon = document.querySelector(".profile-icon");
    let profileMenu = document.getElementById("profile-menu");
    if (!profileIcon.contains(event.target) && !profileMenu.contains(event.target)) {
        profileMenu.style.display = "none";
    }
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
