(function() {
  var windowHeight, windowWidth;

  if (window.innerHeight) {
    windowHeight = function() { return window.innerHeight; };
    windowWidth = function() { return window.innerWidth; };
  } else {
    windowHeight = function() { return document.documentElement.clientHeight; };
    windowWidth = function() { return document.documentElement.clientWidth; };
  }

  window.isElementVisible = function(element, adjustments) {
    if (!adjustments) adjustments = {};
    ["top", "left", "bottom", "right"].forEach(function(side) {
      adjustments[side] = adjustments[side] >= 0 ? adjustments[side] : 0;
    });
    var box = element.getBoundingClientRect();
    return (
      box.top >= 0 + adjustments.top &&
      box.right <= windowWidth() - adjustments.right &&
      box.bottom <= windowHeight() - adjustments.bottom &&
      box.left >= 0 + adjustments.left
    );
  };
}).call(this);
