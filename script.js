const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const filterButtons = document.querySelectorAll(".filter-btn");
const weekCards = document.querySelectorAll(".week-card");
const backToTop = document.getElementById("backToTop");
const copyCodeBtn = document.getElementById("copyCodeBtn");
const sampleCode = document.getElementById("sampleCode");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

weekCards.forEach((card, index) => {
  const header = card.querySelector(".week-header");

  if (index === 0) {
    card.classList.add("open");
  }

  header.addEventListener("click", () => {
    card.classList.toggle("open");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    weekCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = selectedFilter === "all" || category === selectedFilter;

      card.classList.toggle("hidden", !shouldShow);

      if (shouldShow && selectedFilter !== "all") {
        card.classList.add("open");
      }
    });
  });
});

copyCodeBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(sampleCode.innerText);
    copyCodeBtn.textContent = "Copied!";
    setTimeout(() => {
      copyCodeBtn.textContent = "Copy";
    }, 1500);
  } catch (error) {
    copyCodeBtn.textContent = "Copy failed";
    setTimeout(() => {
      copyCodeBtn.textContent = "Copy";
    }, 1500);
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
