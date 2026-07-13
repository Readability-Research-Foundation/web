document.addEventListener("DOMContentLoaded", () => {
  const burgers = Array.from(document.querySelectorAll(".navbar-burger"));

  burgers.forEach((burger) => {
    burger.addEventListener("click", () => {
      const targetId = burger.dataset.target;
      const target = document.getElementById(targetId);
      const isActive = burger.classList.toggle("is-active");

      if (target) {
        target.classList.toggle("is-active", isActive);
      }

      burger.setAttribute("aria-expanded", String(isActive));
    });
  });

  document.querySelectorAll("#main-navigation a").forEach((link) => {
    link.addEventListener("click", () => {
      const burger = document.querySelector(".navbar-burger");
      const menu = document.getElementById("main-navigation");

      burger?.classList.remove("is-active");
      menu?.classList.remove("is-active");
      burger?.setAttribute("aria-expanded", "false");
    });
  });
});
