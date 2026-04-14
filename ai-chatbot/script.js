/**
 * Slide deck navigation
 * ─────────────────────
 * Arrow keys, click zones, touch swipe, progress bar.
 * Resets CSS animations on slide entry so they replay.
 */

(function () {
  var slides  = Array.from(document.querySelectorAll('.slide'));
  var bar     = document.querySelector('.progress');
  var counter = document.querySelector('.slide-counter');
  var total   = slides.length;
  var current = 0;

  /**
   * Reset animations on a slide so entrance effects replay.
   * We temporarily strip the 'active' class to break the
   * animation trigger, then re-add it in the next frame.
   */
  function resetAnimations(slide) {
    slide.classList.remove('active');
    // Force reflow so the browser acknowledges the removal
    void slide.offsetHeight;
    slide.classList.add('active');
  }

  function go(index) {
    if (index < 0 || index >= total) return;

    slides[current].classList.remove('active');
    current = index;

    resetAnimations(slides[current]);

    bar.style.width = ((current + 1) / total * 100) + '%';
    counter.textContent = (current + 1) + ' / ' + total;
    document.body.classList.add('navigated');
  }

  function next() { go(current + 1); }
  function prev() { go(current - 1); }

  /* Keyboard */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      next();
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      prev();
    }
    if (e.key === 'Home') { e.preventDefault(); go(0); }
    if (e.key === 'End')  { e.preventDefault(); go(total - 1); }
  });

  /* Click zones: left 30% = prev, right 70% = next */
  document.addEventListener('click', function (e) {
    if (e.target.closest('a, button')) return;
    var x = e.clientX / window.innerWidth;
    if (x < 0.3) prev(); else next();
  });

  /* Touch swipe */
  var touchX = 0;
  document.addEventListener('touchstart', function (e) {
    touchX = e.changedTouches[0].clientX;
  }, { passive: true });
  document.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next(); else prev();
    }
  }, { passive: true });

  /* Init: set counter and trigger first slide animations */
  bar.style.width = (1 / total * 100) + '%';
  counter.textContent = '1 / ' + total;
})();
