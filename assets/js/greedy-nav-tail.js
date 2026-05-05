/* ==========================================================================
   Greedy-nav .persist / .tail patch
   The bundled main.min.js predates upstream's .persist / .persist.tail logic,
   so it can hide any item (including the site title) and on widen-resize it
   appends restored items after the toggle. We override the global updateNav
   with the corrected upstream version, then reset state and re-run.

   We also recalculate after fonts finish loading: on a cold first visit the
   FA icon glyph for the toggle isn't rendered yet, so $vlinks.width() comes
   back too small and the layout settles in a wrong state.
   ========================================================================== */

(function () {
  if (typeof window.updateNav !== 'function' || typeof window.$vlinks === 'undefined') return;

  function tail() {
    return window.$vlinks.children('*.persist.tail');
  }

  window.updateNav = function () {
    var availableSpace = window.$btn.hasClass('hidden')
      ? window.$nav.width()
      : window.$nav.width() - window.$btn.width() - 30;

    if (window.$vlinks.width() > availableSpace) {
      while (
        window.$vlinks.width() > availableSpace &&
        window.$vlinks.children('*:not(.persist)').length > 0
      ) {
        window.breaks.push(window.$vlinks.width());
        window.$vlinks.children('*:not(.persist)').last().prependTo(window.$hlinks);
        availableSpace = window.$btn.hasClass('hidden')
          ? window.$nav.width()
          : window.$nav.width() - window.$btn.width() - 30;
        window.$btn.removeClass('hidden');
      }
    } else {
      while (window.breaks.length > 0 && availableSpace > window.breaks[window.breaks.length - 1]) {
        var $t = tail();
        if ($t.length > 0) {
          window.$hlinks.children().first().insertBefore($t);
        } else {
          window.$hlinks.children().first().appendTo(window.$vlinks);
        }
        window.breaks.pop();
      }
      if (window.breaks.length < 1) {
        window.$btn.addClass('hidden');
        window.$btn.removeClass('close');
        window.$hlinks.addClass('hidden');
      }
    }

    window.$btn.attr('count', window.breaks.length);
  };

  function reset() {
    // Restore items the bundled (unaware-of-persist) updateNav already moved.
    // Bundled JS prepends each removed item into $hlinks in source-order, so
    // appending the whole batch back to $vlinks preserves original DOM order.
    window.$hlinks.children().appendTo(window.$vlinks);
    var $t = tail();
    if ($t.length > 0) {
      $t.appendTo(window.$vlinks);
    }
    window.breaks.length = 0;
    window.$btn.addClass('hidden');
    window.$hlinks.addClass('hidden');
    window.updateNav();
  }

  reset();

  // Fonts (FontAwesome) may not be loaded yet on a cold first visit. When
  // they are, the toggle's icon finally has width and the prior measurement
  // becomes invalid — recompute.
  if (document.fonts && document.fonts.ready && typeof document.fonts.ready.then === 'function') {
    document.fonts.ready.then(reset);
  }
  $(window).on('load', reset);
})();
