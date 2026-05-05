/* ==========================================================================
   Greedy-nav .persist / .tail patch
   The bundled main.min.js predates upstream's .persist / .persist.tail logic
   so it can hide any item (including the site title) and on widen-resize it
   appends restored items after the toggle. We override the global updateNav
   with the corrected upstream version, then reset state and re-run.
   ========================================================================== */

(function () {
  if (typeof window.updateNav !== 'function' || typeof window.$vlinks === 'undefined') return;

  var $vlinks_persist_tail = window.$vlinks.children('*.persist.tail');

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
        if ($vlinks_persist_tail.length > 0) {
          window.$hlinks.children().first().insertBefore($vlinks_persist_tail);
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
  // pull every hidden item back to visible, reset the breaks history, and
  // then run the corrected updateNav once.
  while (window.$hlinks.children().length > 0) {
    window.$hlinks.children().last().prependTo(window.$vlinks);
  }
  if ($vlinks_persist_tail.length > 0) {
    $vlinks_persist_tail.appendTo(window.$vlinks);
  }
  window.breaks.length = 0;
  window.$btn.addClass('hidden');
  window.$hlinks.addClass('hidden');
  window.updateNav();
})();
