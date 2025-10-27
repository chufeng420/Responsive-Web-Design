// Responsive navigation toggle
document.addEventListener("DOMContentLoaded", () => {
  const icon = document.getElementsByClassName("icon")[0];
  if (!icon) return;

  icon.addEventListener("click", () => {
    const nav = document.getElementById("myTopnav");
    if (!nav) return;

    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  });
});