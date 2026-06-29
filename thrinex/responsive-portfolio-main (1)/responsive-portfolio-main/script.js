const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
  const theme = document.documentElement.getAttribute("data-theme");

  if (theme === "dark") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
});