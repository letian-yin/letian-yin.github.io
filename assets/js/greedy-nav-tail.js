/* ==========================================================================
   Greedy-nav .tail fixup
   The bundled main.min.js predates upstream's .persist.tail logic, so on
   widen-resize it appends restored items after the toggle. This re-pins the
   toggle to the last position after the bundled handler runs.
   ========================================================================== */

(function () {
  function fixTail() {
    var $tail = $('#site-nav .visible-links .persist.tail');
    if (!$tail.length) return;
    var $parent = $tail.parent();
    if ($parent.children().last()[0] !== $tail[0]) {
      $tail.appendTo($parent);
    }
  }

  $(window).on('resize', fixTail);
  $(document).ready(fixTail);
  fixTail();
})();
