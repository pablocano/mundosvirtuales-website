// https://gist.github.com/mattnguyenn/10529594
$(function() {
  var $fanucImg = $('#fanucImg'),
    $parent = $fanucImg.parent(),
    $win = $(window),
    fanucAR = 1600 / 560;

  // fit the hero element when the browser window is resized
  $win.resize(fitFanucImg);

  fitFanucImg();

  //
  // Center the hero element (image|video) using CSS left/top properties.
  function fitFanucImg() {
    var parentW = $parent.width(),
      parentH = $parent.height(),
      newWidthHeight = {},
      newPos = {};

    if (parentW / parentH <= fanucAR) {
      newWidthHeight.height = '100%';
      newWidthHeight.width = 'auto';
    } else {
      newWidthHeight.height = 'auto';
      newWidthHeight.width = '100%';
    }

    $fanucImg.css(newWidthHeight);

    newPos.left = Math.min(0, (parentW - $fanucImg.width()) / 2);
    newPos.top = Math.min(0, (parentH - $fanucImg.height()) / 2);

    $fanucImg.css(newPos);
  }
});