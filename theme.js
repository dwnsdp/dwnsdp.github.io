function setTheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}


setTheme();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setTheme);
