# To make images retina, add a class "2x" to the img element
# and add a <image-name>@2x.png image. Assumes jquery is loaded.
isRetina = ->
  mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)"
  return true  if window.devicePixelRatio > 1
  return true  if window.matchMedia and window.matchMedia(mediaQuery).matches
  false
retina = ->
  return  unless isRetina()
  $("img.2x").map (i, image) ->
    path = $(image).attr("src")
    path = path.replace(".png", "@2x.png")
    path = path.replace(".jpg", "@2x.jpg")
    $(image).attr "src", path
    return

  return
$(document).ready retina

