
  /* Scroll reveal */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  /* Budget slider */
  const slider = document.getElementById('budgetSlider');
  const budgetVal = document.getElementById('budgetVal');
  slider.addEventListener('input', () => {
    const val = parseInt(slider.value);
    budgetVal.textContent = val >= 100000
      ? '₹' + (val/100000).toFixed(1) + 'L+'
      : '₹' + val.toLocaleString('en-IN');
    const pct = (val - slider.min) / (slider.max - slider.min);
    slider.style.background = `linear-gradient(90deg, #FF4D1C ${pct*100}%, #E2E0F0 ${pct*100}%)`;
  });
  slider.dispatchEvent(new Event('input'));

  /* Form submit */
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('form-body').style.display = 'none';
    const succ = document.getElementById('formSuccess');
    succ.style.display = 'flex';
    setTimeout(() => succ.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
  });

  /* FAQ accordion */
  function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  /* Map tabs */
  const maps = {
    india: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.268!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjUiTiA3NsKwNTcnMjAuOSJF!5e0!3m2!1sen!2sin',
      flag: '🇮🇳', name: 'Creative Advs — Head Office',
      addr: 'No. 6, 1st Floor, KCP Garden,<br>Coimbatore – 641035, India'
    },
    uk: {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.3!2d-0.7596!3d52.0406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDAyJzI2LjIiTiAwwrA0NSczNC42Ilc!5e0!3m2!1sen!2sgb',
      flag: '🇬🇧', name: 'Creative Advs — UK Branch',
      addr: '374, Midsummer Boulevard,<br>Milton Keynes, MK9 2UB'
    }
  };
  function switchMap(key, tab) {
    document.querySelectorAll('.map-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const d = maps[key];
    document.getElementById('mapFrame').src = d.src;
    document.getElementById('mapCard').innerHTML = `
      <div class="map-overlay-flag">${d.flag}</div>
      <div class="map-overlay-name">${d.name}</div>
      <div class="map-overlay-addr">${d.addr}</div>
      <a href="https://maps.google.com" target="_blank" class="map-open-btn">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent)"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
        Get Directions
      </a>`;
  }
