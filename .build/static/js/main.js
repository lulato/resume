(function() {
  var isRetina, retina;

  isRetina = function() {
    var mediaQuery;
    mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
    if (window.devicePixelRatio > 1) {
      return true;
    }
    if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
      return true;
    }
    return false;
  };

  retina = function() {
    if (!isRetina()) {
      return;
    }
    $("img.2x").map(function(i, image) {
      var path;
      path = $(image).attr("src");
      path = path.replace(".png", "@2x.png");
      path = path.replace(".jpg", "@2x.jpg");
      $(image).attr("src", path);
    });
  };

  $(document).ready(retina);

}).call(this);
