

$(document).ready(function () {
  $(".u-animation-once").addClass("bounceIn");
  setTimeout(function(){$(".u-animation-once").removeClass("bounceIn")},2000);
});