$(document).ready(function() {
  $(".clickable").click(function() {
    $("#highlight").removeClass();
    $("#highlight").addClass("paragraph");
  });
});
