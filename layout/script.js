// Function to fetch and inject common layout components
async function loadLayout() {
    document.getElementById("header").innerHTML = await fetch('../layout/header.html').then(res => res.text());
    document.getElementById("nav").innerHTML = await fetch('../layout/nav.html').then(res => res.text());
    document.getElementById("footer").innerHTML = await fetch('../layout/footer.html').then(res => res.text());
}

// Execute layout loading when the DOM is ready
document.addEventListener("DOMContentLoaded", loadLayout);
