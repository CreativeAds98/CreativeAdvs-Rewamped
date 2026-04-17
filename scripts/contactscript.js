
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


  
