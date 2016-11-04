function Balloon(color) {
  this.color = color;
  this.isFull = false;
}
Balloon.prototype.inflate = function(){
  this.isFull = true;
  return true;
}

function createBalloon(balloon, n) {
  var $balloonEl = $("<div class=\"balloon\">" + n + "</div>");

  $balloonEl.on("click", function(){
    balloon.inflate();
    $(this).addClass("top")
           .off("click");
  });

  return $balloonEl;
}

$(document).ready(function(){

  var balloons = [
    new Balloon("purple"),
    new Balloon("blue"),
    new Balloon("green")
  ];

  var $balloons = balloons.map(createBalloon);
  $("body").html($balloons);

});
