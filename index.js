// Pages
const pages = [
    { title: "00_HomePage", folder: "00_Home", file: "index.html" },
    { title: "01_IntroApp", folder: "01_IntroApp", file: "index.html" },
    { title: "02_Styling", folder: "02_Styling", file: "index.html" },
    { title: "03_Layout_Iframe", folder: "03_Layout/Layout_2_Iframe", file: "index.html" },
    { title: "03_Layout_BootStrap", folder: "03_Layout", file: "bootstrap.html" },
    { title: "04_HtmlElements", folder: "04_HtmlElements", file: "index.html" },
    { title: "05_JSON", folder: "05_JSON", file: "index.html" },
    { title: "06_ClientServer", folder: "06_ClientServer/client", file: "home.html" },
    { title: "07_QueryString", folder: "07_QueryString", file: "list.html" },
    { title: "08_API", folder: "08_API/client", file: "index.html" },
    { title: "09_POST", folder: "09_POST/client", file: "index.html" },
    { title: "10_Session", folder: "10_Session/Client", file: "index.html" },
    { title: "11_Session", folder: "11_Session/views", file: "tasks.ejs" },
    { title: "12_Import_Export", folder: "12_Import_Export", file: "index.html" }
];

// Build sidebar
const navList = document.getElementById("navList");

pages.forEach(p => {
    const fullPath = `${p.folder}/${p.file}`;

    navList.innerHTML += `
        <li class="nav-item">
            <a class="nav-link" href="?page=${encodeURIComponent(fullPath)}" data-page="${fullPath}">
                <i class="fas fa-gauge"></i> ${p.title}
            </a>
        </li>
    `;
});

const contentFrame = document.getElementById("contentFrame");
const sidebar = document.getElementById("sidebar");

// Load from URL or localStorage
function loadInitialPage() {
    const params = new URLSearchParams(location.search);
    const queryPage = params.get("page");
    const lastPage = localStorage.getItem("lastPage");

    let page = "logo.png"; // default

    if (queryPage) page = queryPage;
    else if (lastPage) page = lastPage;

    contentFrame.src = page;
}

loadInitialPage();

// Sidebar link click handler (event delegation)
navList.addEventListener("click", e => {
    const link = e.target.closest("a[data-page]");
    if (!link) return;

    e.preventDefault();

    const page = link.dataset.page;
    contentFrame.src = page;

    localStorage.setItem("lastPage", page);
    history.pushState({}, "", "?page=" + encodeURIComponent(page));

    sidebar.classList.remove("show");
});

// Back/forward browser navigation
window.addEventListener("popstate", loadInitialPage);

// Toggle sidebar (mobile)
document.getElementById("toggleSidebar").addEventListener("click", () => {
    sidebar.classList.toggle("show");
});
