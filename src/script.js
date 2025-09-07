// ================== Preloader ==================
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.classList.add("hidden");
});

// ================== Hero Slider ==================
(function () {
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;

  let slideIndex = 0;
  const showSlide = (n) =>
    slides.forEach((s, i) => s.classList.toggle("active-slide", i === n));

  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 4000);

  showSlide(0);
})();

// ================== Review Slider ==================
(function () {
  const reviewSlides = document.querySelectorAll(".review-slide");
  const reviewDots = document.getElementById("reviewDots");
  if (!reviewSlides.length || !reviewDots) return;

  let reviewIndex = 0;
  reviewSlides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.addEventListener("click", () => showReview(i));
    reviewDots.appendChild(dot);
  });

  const dots = reviewDots.querySelectorAll(".dot");

  function showReview(n) {
    reviewSlides.forEach((r, i) => r.classList.toggle("hidden", i !== n));
    dots.forEach((d, i) => d.classList.toggle("active", i === n));
    reviewIndex = n;
  }

  function autoSlide() {
    reviewIndex = (reviewIndex + 1) % reviewSlides.length;
    showReview(reviewIndex);
  }

  showReview(0);
  setInterval(autoSlide, 4000);
})();

// ================== Product Gallery ==================
const products = {
  endmills: [
    "images/products/Endmills/endmills.jpg",
    "images/products/Endmills/hss_aluminium_freezing_bit.avif",
    "images/products/Endmills/hss_endmill_cutter_4flt.jpg",
    "images/products/Endmills/hss_single_flute_milling_bit.webp",
    "images/products/Endmills/solid_carbide_dlc_coated_for_aluminium.avif",
    "images/products/Endmills/solid_carbide_roughing_endmill_cutter_hrc55.jpg",
    "images/products/Endmills/solid_carbide_single_flute.jpg",
    "images/products/Endmills/solid_carbide_single_flute_milling_bit.jpg",
    "images/products/Endmills/solid_carbite_endmill_hrc45.jpg",
    "images/products/Endmills/solid_carbite_endmill_hrc55.png",
    "images/products/Endmills/solid_carbite_endmill_hrc65.jpg",
  ],
  inserts: [
    "images/products/inserts/carbide_insert.avif",
    "images/products/inserts/carbide_insert_all_type.webp",
  ],
  measuring: [
    "images/products/measuring_instruments/500_196.webp",
    "images/products/measuring_instruments/GO_NOGO_SET.jpg",
    "images/products/measuring_instruments/insize_dial.jpg",
    "images/products/measuring_instruments/insize_items.png",
    "images/products/measuring_instruments/measuring_instrument.jpg",
    "images/products/measuring_instruments/MITUTOYO530_312.jpg",
    "images/products/measuring_instruments/mitutoyo_items.png",
    "images/products/measuring_instruments/PLUG_GAUGE_THREAD.jpg",
    "images/products/measuring_instruments/RING_GAUGE_GO_NOGO.jpg",
    "images/products/measuring_instruments/SJ_210.webp",
  ],
  drilling: [
    "images/products/U_drill_tools/u_drill_4d.webp",
    "images/products/U_drill_tools/U_drill_all_size.webp",
    "images/products/U_drill_tools/u_drill_bit.avif",
    "images/products/U_drill_tools/cobalt_drill_bit_12mm_shank.webp",
    "images/products/U_drill_tools/cobalt_drill_bit.webp",
    "images/products/U_drill_tools/hss_cobalt_drill_bit_taper_shank.jpg",
    "images/products/U_drill_tools/solid_carbide_drill_Bit.jpg",
    "images/products/U_drill_tools/solid_carbide_drill_bit_copper.webp",
    "images/products/U_drill_tools/solid_carbide_drill_bit_internal_coolant_for_cnc.jpg",
  ],
  holders_tools: [
    "images/products/holders_tools/boring_holder_mclnr.png",
    "images/products/holders_tools/BT40_HOLDER_BT30_BT50_HOLDER.webp",
    "images/products/holders_tools/BT40_WITH_PULL_STUD.jpg",
    "images/products/holders_tools/CLAMPING_KIT_SET.jpg",
    "images/products/holders_tools/CLAPMPING_KIT_CHART.webp",
    "images/products/holders_tools/CNC_HOLDER.webp",
    "images/products/holders_tools/CNC_TROLLY_CART.jpg",
    "images/products/holders_tools/face_groving_holder.png",
    "images/products/holders_tools/groving_holder_for_parting.jpg",
    "images/products/holders_tools/HOLDER_FOR_CNC.avif",
    "images/products/holders_tools/HOLDER_FOR_FACE_MILL_CUTTER.jpg",
    "images/products/holders_tools/HOLDER_STAND.jpeg",
    "images/products/holders_tools/HOLDER_STAND_BT.jpg",
    "images/products/holders_tools/HOLDER_TREY.jpg",
    "images/products/holders_tools/HSK63_HOLDER.avif",
    "images/products/holders_tools/insert_holder.jpg",
    "images/products/holders_tools/internal_external_threading_holder.jpg",
    "images/products/holders_tools/LOOKING_DEVICE.webp",
    "images/products/holders_tools/parting_holder.jpg",
    "images/products/holders_tools/PULL_STUD.jpg",
    "images/products/holders_tools/SPARE_FOR_CLAMPING_KIT.jpg",
    "images/products/holders_tools/T_NUT.jpg",
    "images/products/holders_tools/turning_holder.jpg",
  ],
  Cleaningitems: [
    "images/products/CLEANING_ITEMS/BRASH_CUP_BRUSH.webp",
    "images/products/CLEANING_ITEMS/BRASH_HAND_BRUSH.jpg",
    "images/products/CLEANING_ITEMS/CIRCULAR_WHEEL.jpg",
    "images/products/CLEANING_ITEMS/CIRCULAR_WHEEL_BRUSH.jpeg",
    "images/products/CLEANING_ITEMS/CUP_BRUSH.jpg",
    "images/products/CLEANING_ITEMS/HONING_STONE-SET27INCH.jpg",
    "images/products/CLEANING_ITEMS/HONING_STONES.jpg",
    "images/products/CLEANING_ITEMS/OIL_STONE.jpg",
    "images/products/CLEANING_ITEMS/SHARPENING_STONE.jpg",
    "images/products/CLEANING_ITEMS/TUBE_BRUSH.jpg",
    "images/products/CLEANING_ITEMS/TUBE_BRUSH2.avif",
    "images/products/CLEANING_ITEMS/CYLINDERS_HONING_STONE.webp",
  ],
  magnets: [
    "images/products/MAGNETS/CASHT_IRON_VEE_BLOCK.jpg",
    "images/products/MAGNETS/LIFTING_MAGNET.jpg",
    "images/products/MAGNETS/MAGNET_HOOK_TYPE.jpg",
    "images/products/MAGNETS/MAGNET_VML.avif",
    "images/products/MAGNETS/POT_MAGNET.jpg",
    "images/products/MAGNETS/SHALLOW_MAGNET.jpg",
    "images/products/MAGNETS/VEE_BLOCK.jpeg",
    "images/products/MAGNETS/VEE_BLOCK_LONG.avif",
    "images/products/MAGNETS/VML_150.jpg",
  ],
  vice: [
    "images/products/VICE/ANGLE_VICE.jpg",
    "images/products/VICE/ANGLE_VICE.webp",
    "images/products/VICE/BABY_VICE.jpg",
    "images/products/VICE/BENCH_VICE.webp",
    "images/products/VICE/DRILL_VICE.webp",
    "images/products/VICE/DRILL_VICE1.webp",
    "images/products/VICE/HAND_VICE.jpg",
    "images/products/VICE/MARKING_VICE.avif",
    "images/products/VICE/MILING_VICE.jpg",
    "images/products/VICE/MINI_VICE.webp",
    "images/products/VICE/PIN_VICE.jpg",
    "images/products/VICE/PRECISION_VICE.avif",
  ],
  // ... keep your other categories here ...
};

const display = document.getElementById("product-display");
const categoryButtons = document.querySelectorAll(".category-btn");

function getProductNameFromPath(path) {
  return path
    .split("/")
    .pop()
    .split(".")[0]
    .replace(/[^a-zA-Z0-9]/g, " ")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
    .trim();
}

function loadProducts(category) {
  if (!display) return;
  display.innerHTML = "";

  const productList = products[category] || [];
  if (!productList.length) {
    display.innerHTML =
      "<p class='text-center text-gray-500'>No products found in this category.</p>";
    return;
  }

  productList.forEach((src) => {
    const productName = getProductNameFromPath(src);
    display.insertAdjacentHTML(
      "beforeend",
      `<div class="bg-white dark:bg-gray-700 shadow rounded-lg overflow-hidden">
         <img src="${src}" alt="${productName}" class="w-full h-48 object-contain">
         <div class="p-4">
           <h3 class="font-semibold text-gray-800 dark:text-gray-100 capitalize">${productName}</h3>
         </div>
       </div>`
    );
  });
}

function setActiveCategory(activeBtn) {
  categoryButtons.forEach((b) =>
    b.classList.remove(
      "bg-yellow-500",
      "text-white",
      "dark:bg-yellow-500",
      "dark:text-white"
    )
  );
  activeBtn.classList.add(
    "bg-yellow-500",
    "text-white",
    "dark:bg-yellow-500",
    "dark:text-white"
  );
}

// Default load
loadProducts("endmills");
const defaultBtn = document.querySelector(
  '.category-btn[data-category="endmills"]'
);
if (defaultBtn) setActiveCategory(defaultBtn);

categoryButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    setActiveCategory(btn);
    loadProducts(btn.dataset.category);
  })
);

// ================== Footer Year ==================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ================== Active Navigation Highlight ==================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("text-yellow-400", "font-bold");
            if (link.getAttribute("href").substring(1) === entry.target.id) {
              link.classList.add("text-yellow-400", "font-bold");
            }
          });
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((s) => observer.observe(s));
}

// ================== EmailJS ==================
(function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init("AbISABI5VHVDoibUW");
  }
})();

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs.sendForm("service_5waicxr", "template_0vmv2tm", contactForm).then(
      () => alert("Message sent successfully!"),
      (err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again later.");
      }
    );
  });
}

// ================== Theme Toggle ==================
const htmlEl = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
const mobileThemeIcon = document.getElementById("mobile-theme-icon");

function updateIcons(theme) {
  const cls =
    theme === "dark"
      ? "ri-moon-line text-xl"
      : theme === "light"
      ? "ri-sun-line text-xl"
      : "ri-computer-line text-xl";
  if (themeIcon) themeIcon.className = cls;
  if (mobileThemeIcon) mobileThemeIcon.className = cls;
}

function setTheme(theme) {
  if (theme === "dark") htmlEl.classList.add("dark");
  else if (theme === "light") htmlEl.classList.remove("dark");
  else
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? htmlEl.classList.add("dark")
      : htmlEl.classList.remove("dark");

  localStorage.setItem("theme", theme);
  updateIcons(theme);
}

function initTheme() {
  const saved = localStorage.getItem("theme") || "system";
  setTheme(saved);
}

[themeToggle, mobileThemeToggle].forEach((btn) =>
  btn?.addEventListener("click", () => {
    const current = localStorage.getItem("theme") || "system";
    setTheme(
      current === "system" ? "light" : current === "light" ? "dark" : "system"
    );
  })
);

initTheme();

// ================== Mobile Menu ==================
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuToggle?.addEventListener("click", () =>
  mobileMenu?.classList.toggle("hidden")
);

document
  .querySelectorAll("#mobile-menu a")
  .forEach((link) =>
    link.addEventListener("click", () => mobileMenu?.classList.add("hidden"))
  );
