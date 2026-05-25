// /* ============================================
//    TRUPTI PARAB BIRTHDAY WEBSITE – script.js
//    ============================================ */

// /* ── Page Switcher ── */
// function showPage(id) {
//   document.querySelectorAll('.page').forEach(p => {
//     p.classList.remove('active');
//   });
//   const target = document.getElementById(id);
//   if (target) {
//     target.classList.add('active');
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }
// }

// /* ── Set current year in footer ── */
// (function setYear() {
//   const yr = new Date().getFullYear();
//   document.querySelectorAll('#year, .yr').forEach(el => (el.textContent = yr));
// })();

// /* ── Floating Particles Generator ── */
// (function spawnParticles() {
//   const container = document.getElementById('particles');
//   if (!container) return;

//   const colors = [
//     'rgba(244,114,168,0.55)',
//     'rgba(192,132,252,0.45)',
//     'rgba(251,113,133,0.45)',
//     'rgba(248,187,217,0.6)',
//     'rgba(243,232,255,0.55)',
//     'rgba(253,186,116,0.35)',
//   ];

//   const shapes = ['50%', '30% 70% 70% 30% / 30% 30% 70% 70%', '4px'];

//   function makeParticle() {
//     const el = document.createElement('span');
//     el.classList.add('particle');

//     const size     = 6 + Math.random() * 14;
//     const color    = colors[Math.floor(Math.random() * colors.length)];
//     const shape    = shapes[Math.floor(Math.random() * shapes.length)];
//     const left     = Math.random() * 100;
//     const duration = 12 + Math.random() * 18;
//     const delay    = Math.random() * 20;

//     el.style.cssText = `
//       width: ${size}px;
//       height: ${size}px;
//       left: ${left}%;
//       bottom: -20px;
//       background: ${color};
//       border-radius: ${shape};
//       animation-duration: ${duration}s;
//       animation-delay: ${delay}s;
//     `;

//     container.appendChild(el);
//   }

//   for (let i = 0; i < 32; i++) makeParticle();
// })();

// /* ── Card tilt micro-interaction ── */
// (function cardTilt() {
//   document.querySelectorAll('.card').forEach(card => {
//     card.addEventListener('mousemove', e => {
//       const rect   = card.getBoundingClientRect();
//       const cx     = rect.left + rect.width  / 2;
//       const cy     = rect.top  + rect.height / 2;
//       const dx     = (e.clientX - cx) / (rect.width  / 2);
//       const dy     = (e.clientY - cy) / (rect.height / 2);
//       const rotX   = -dy * 6;
//       const rotY   =  dx * 6;
//       card.style.transform = `translateY(-8px) scale(1.02) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
//     });

//     card.addEventListener('mouseleave', () => {
//       card.style.transform = '';
//     });
//   });
// })();

// /* ── Staggered reveal on scroll (Intersection Observer) ── */
// (function revealOnScroll() {
//   const items = document.querySelectorAll('.card, .quality-chip, .wish-card');

//   if (!('IntersectionObserver' in window)) return;

//   const io = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry, i) => {
//         if (entry.isIntersecting) {
//           setTimeout(() => {
//             entry.target.style.opacity   = '1';
//             entry.target.style.transform = 'translateY(0) scale(1)';
//           }, i * 60);
//           io.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.12 }
//   );

//   items.forEach(el => {
//     el.style.opacity   = '0';
//     el.style.transform = 'translateY(24px) scale(0.97)';
//     el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
//     io.observe(el);
//   });
// })();

// /* ── Confetti burst on "View Special Message" button ── */
// (function confettiBurst() {
//   const btn = document.querySelector('.cta-btn');
//   if (!btn) return;

//   btn.addEventListener('click', () => {
//     const colors = ['#f472a8', '#c084fc', '#fb7185', '#fbbf24', '#34d399', '#60a5fa'];
//     const burst  = 28;

//     for (let i = 0; i < burst; i++) {
//       const dot = document.createElement('div');
//       const angle  = Math.random() * 360;
//       const radius = 60 + Math.random() * 80;
//       const tx     = Math.cos((angle * Math.PI) / 180) * radius;
//       const ty     = Math.sin((angle * Math.PI) / 180) * radius;
//       const size   = 5 + Math.random() * 7;
//       const color  = colors[Math.floor(Math.random() * colors.length)];

//       dot.style.cssText = `
//         position: fixed;
//         width: ${size}px; height: ${size}px;
//         background: ${color};
//         border-radius: 50%;
//         pointer-events: none;
//         z-index: 9999;
//         left: 50%; top: 50%;
//         transform: translate(-50%, -50%);
//         animation: burst-out 0.7s ease forwards;
//         --tx: ${tx}px; --ty: ${ty}px;
//       `;

//       /* Inject keyframe once */
//       if (!document.getElementById('burst-style')) {
//         const s = document.createElement('style');
//         s.id = 'burst-style';
//         s.textContent = `
//           @keyframes burst-out {
//             0%   { opacity: 1; transform: translate(-50%, -50%) translate(0, 0) scale(1); }
//             100% { opacity: 0; transform: translate(-50%, -50%) translate(var(--tx), var(--ty)) scale(0.2); }
//           }
//         `;
//         document.head.appendChild(s);
//       }

//       document.body.appendChild(dot);
//       setTimeout(() => dot.remove(), 800);
//     }
//   });
// })();