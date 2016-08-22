function Place(locations,year,season,highlights) {
  this.locations = locations,
  this.year = year,
  this.season = season,
  this.highlights = highlights
}

Place.prototype.all = function() {
  return this.locations;
}

$(document).ready(function() {
  $("form#places-form").submit(function(event) {
  event.preventDefault();

  var inputLocations = $("input#locations").val();
  var inputYear = $("input#year").val();
  var inputSeason = $("input#season").val();
  var inputHighlights = $("input#highlights").val();

  var newPlace = new Place(inputLocations, inputYear, inputSeason, inputHighlights);

  $("ul#places").append("<li><span class='place'>" + newPlace.all() + "</span></li>");

  $(".place").last().click(function() {
    $("#show-places").show();
    $("show-places h2").text(newPlace.locations);
    $(".locations").text(newPlace.locations);
    $(".year").text(newPlace.year);
    $(".season").text(newPlace.season);
    $(".highlights").text(newPlace.highlights);
  });

  $("input#locations").val("");
  $("input#year").val("");
  $("input#season").val("");
  $("input#highlights").val("");
  });
});
