/* =========================
   HERO SPOTLIGHT REVEAL
========================= */

window.addEventListener("DOMContentLoaded", () => {

    const hero =
    document.querySelector(".hero");

    const reveal =
    document.querySelector(".hero-image-reveal");

    const eyeBtn =
    document.getElementById("image-eye-toggle");

    if(!hero || !reveal || !eyeBtn) return;

    /* Mouse Move Reveal */

    hero.addEventListener("mousemove", (e) => {

        const rect =
        hero.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        reveal.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        reveal.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });

    /* Eye Toggle Full Reveal */

    eyeBtn.addEventListener("click", () => {

        reveal.classList.toggle(
            "full-reveal"
        );

        eyeBtn.classList.toggle(
            "active"
        );

    });

});
// Page switch function
function showPage(pageId) {

  // hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // show selected page
  document.getElementById(pageId).classList.add('active');

  // scroll to top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


// Footer year
document.querySelectorAll('#year, .yr').forEach(el => {
  el.textContent = new Date().getFullYear();
});