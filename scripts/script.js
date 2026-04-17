/* ══════════════════════════════════════════
   MOBILE HAMBURGER DRAWER — mobile-menu.js
   Add <script src="mobile-menu.js"></script>
   just before </body> in index.html
   ══════════════════════════════════════════ */

(function () {
  'use strict';

  const toggle   = document.getElementById('mobile-menu');
  const drawer   = document.getElementById('mobileDrawer');
  const overlay  = document.getElementById('mobileOverlay');
  const closeBtn = document.getElementById('drawerClose');

  if (!toggle || !drawer || !overlay) return; // safety guard

  /* ── Open drawer ── */
  function openDrawer() {
    overlay.style.display = 'block';

    // Let display:block paint before adding transition class
    requestAnimationFrame(function () {
      overlay.classList.add('visible');
      drawer.classList.add('open');
    });

    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Staggered link entrance animation
    setTimeout(animateLinks, 60);
  }

  /* ── Close drawer ── */
  function closeDrawer() {
    overlay.classList.remove('visible');
    drawer.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    // Hide overlay after CSS transition ends
    setTimeout(function () {
      overlay.style.display = 'none';
    }, 340);
  }

  /* ── Staggered link animation ── */
  function animateLinks() {
    var links = drawer.querySelectorAll('.drawer-nav a');
    links.forEach(function (link, i) {
      link.style.opacity = '0';
      link.style.transform = 'translateX(18px)';
      setTimeout(function () {
        link.style.transition =
          'opacity 0.28s ease, transform 0.28s ease, ' +
          'color 0.2s, background 0.2s, padding-left 0.2s, border-left-color 0.2s';
        link.style.opacity = '1';
        link.style.transform = 'translateX(0)';
      }, 70 + i * 42);
    });
  }

  /* ── Events ── */

  // Hamburger click — toggle open / close
  toggle.addEventListener('click', function () {
    if (drawer.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  // Close button inside drawer
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  // Tap outside (on overlay)
  overlay.addEventListener('click', closeDrawer);

  // ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  // Auto-close when any drawer link is tapped
  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });

})();



//OVERLAY function toggleOverlay
function openQuoteModal() {
    document.getElementById('quoteModal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Stop background scrolling
}

function closeQuoteModal() {
    document.getElementById('quoteModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close if user clicks outside the white box
window.onclick = function(event) {
    let modal = document.getElementById('quoteModal');
    if (event.target == modal) {
        closeQuoteModal();
    }
}