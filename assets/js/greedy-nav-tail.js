/* ==========================================================================
   Greedy-nav .persist / .tail patch
   The bundled main.min.js predates upstream's .persist / .persist.tail logic
   so it can hide any item (including the site title) and on widen-resize it
   appends restored items after the toggle. We override the global updateNav
   with the corrected upstream version, then reset state and re-run.
   ========================================================================== */

(function () {
  if (typeof window.updateNav !== 'function' || typeof window.$vlinks === 'undefined') return;

  // Re-query at call time so the selector reflects the current DOM, regardless
  // of whether main.min.js's pre-patch run had moved the toggle around.
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

  // Undo whatever the bundled (unaware-of-persist) updateNav already did:
  // pull every hidden item back to visible, restore the original DOM order
  // (Title first, Toggle last), reset the breaks history, then run the
  // corrected updateNav once.
  while (window.$hlinks.children().length > 0) {
    window.$hlinks.children().last().prependTo(window.$vlinks);
  }
  // After the restore loop, the order may not match document order — the
  // bundled JS prepended into $hlinks while my loop prepended back into
  // $vlinks, which can leave the toggle ahead of the title. Re-query for the
  // tail in $vlinks (now that it's been restored) and pin it to the end.
  var $t0 = tail();
  if ($t0.length > 0) {
    $t0.appendTo(window.$vlinks);
  }
  window.breaks.length = 0;
  window.$btn.addClass('hidden');
  window.$hlinks.addClass('hidden');
  window.updateNav();
})();
