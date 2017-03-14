// https://gist.github.com/mattnguyenn/10529594
$(function() {
  var $heroEl = $('video'),
    $parent = $heroEl.parent(),
    $win = $(window),
    $popup = $('#videoPopup'),
    $mask = $('#toolsVideoShield'),
    heroAR = 16 / 9,
    vid;

    vid = $heroEl.get(0);

    // play the video when the browser is able and update the
    // video sources when the video ends
    $heroEl
      .on('canplaythrough', playVid)
      .on('ended', playVid)
      .click(function(e) {
        e.preventDefault();
        $popup.click();
      });

    // pause the BG video when the video modal is loaded
    $popup.click(pauseVid);

    // play the BG video when the mask is clicked
    $mask.click(playVid);

  // fit the hero element when the browser window is resized
  $win.resize(fitHeroEl);

  fitHeroEl();
  playVid();

  // fitHeroEl()
  //
  // Center the hero element (image|video) using CSS left/top properties.
  function fitHeroEl() {
    var parentW = $parent.width(),
      parentH = $parent.height(),
      newWidthHeight = {},
      newPos = {};

    if (parentW / parentH <= heroAR) {
      newWidthHeight.height = '100%';
      newWidthHeight.width = 'auto';
    } else {
      newWidthHeight.height = 'auto';
      newWidthHeight.width = '100%';
    }

    $heroEl.css(newWidthHeight);

    newPos.left = Math.min(0, (parentW - $heroEl.width()) / 2);
    newPos.top = Math.min(0, (parentH - $heroEl.height()) / 2);

    $heroEl.css(newPos);
  }

  // playVid()
  //
  // Play the BG video.
  function playVid() {
    $heroEl.removeAttr('poster');
    fitHeroEl();
    vid.play();
  }

  // pauseVid()
  //
  // Pause the BG video.
  function pauseVid() {
    vid.pause();
  }
});