// Load last page if exists
window.onload = () => {
    const lastPage = localStorage.getItem("lastPage");
    if (lastPage) {
        document.getElementById("contentFrame").src = lastPage;
    }
};

// Save selected page
function loadPage(page) {
    document.getElementById("contentFrame").src = page;
    localStorage.setItem("lastPage", page);
    document.getElementById("sidebar").classList.remove("show");
}


function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
}