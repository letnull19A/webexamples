(function($) {
  jQuery.fn.isVisible = function(adjustments) {
    if (!adjustments) adjustments = {};
    ["top", "left", "bottom", "right"].forEach(function(side) {
      adjustments[side] = adjustments[side] >= 0 ? adjustments[side] : 0;
    });
    var box = this[0].getBoundingClientRect();
    return (
      box.top >= 0 + adjustments.top &&
      box.right <= $(window).width() - adjustments.right &&
      box.bottom <= $(window).height() - adjustments.bottom &&
      box.left >= 0 + adjustments.left
    );
  };
}).call(jQuery);
