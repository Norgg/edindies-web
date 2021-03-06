function lerp(a, b, u) {
    return (1 - u) * a + u * b;
}

function lerpColour(c1, c2, u) {
  return [lerp(c1[0], c2[0], u), lerp(c1[1], c2[1], u), lerp(c1[2], c2[2], u)];
}

var lerpAmount = 0.0;
var changeTime = 50000;
var tickTime = 500;
var brightness = 96;

var lastColour = [32, 64, 64];
var targetColour = [32, 64, 64];

$(function() {
  targetColour = [Math.random() * brightness, Math.random() * brightness, Math.random() * brightness];

  setInterval(function() {
    var color = lerpColour(lastColour, targetColour, lerpAmount);
    var bg = 'rgb(' + Math.round(color[0]) + ',' + 
                      Math.round(color[1]) + ',' + 
                      Math.round(color[2]) + ')';
    $('body').css('background-color', bg);
    lerpAmount += tickTime/changeTime;
  }, tickTime);

  // Every n seconds change the target colour
  setInterval(function() {
    lastColour = targetColour;
    targetColour = [Math.random() * brightness, Math.random() * brightness, Math.random() * brightness];
    console.log(targetColour);
    lerpAmount = 0;
  }, changeTime);
});
