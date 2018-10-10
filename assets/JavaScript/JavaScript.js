//This is the NFL Arrests API.

var queryURL = "http://NflArrest.com/api/v1";

// ajax call for TOP Crimes commited by players.

$.ajax({
  url: queryURL + "/crime",
  method: "GET"
 }).then(function (response) {
   console.log(response);
  // for loop: 1. declare and assign counter 2. compare counter 3. increment counter
  for (var i = 0; i <= 10; i++) {
    var nflCrimesCategory = response[i].Category
    var nflArrestCounts = response[i].arrest_count
    $(".top-crimes").append("<p>" + nflCrimesCategory + "</p>")
    $(".top-crimes").append("<p>" + nflArrestCounts + "</p>")
  }
 
 });

 var queryURL = "http://NflArrest.com/api/v1";

// ajax call for TOP Players for arrests

$.ajax({
  url: queryURL + "/player",
  method: "GET"
 }).then(function (response) {
   console.log(response);
  // for loop: 1. declare and assign counter 2. compare counter 3. increment counter
  for (var i = 0; i <= 10; i++) {
    var nflTopPlayers = response[i].Name
    var nflArrestCounts = response[i].arrest_count
    $(".top-commited-crimes").append("<p>" + nflTopPlayers + "</p>")
    $(".top-commited-crimes").append("<p>" + nflArrestCounts + "</p>")
  }
 
 });

 var queryURL = "http://NflArrest.com/api/v1";

// ajax call for TOP Positions

$.ajax({
  url: queryURL + "/team",
  method: "GET"
 }).then(function (response) {
   console.log(response);
  // for loop: 1. declare and assign counter 2. compare counter 3. increment counter
  for (var i = 0; i <= 10; i++) {
    var nflTopPositions = response[i].Team_preffered_name
    var nflArrestCounts = response[i].arrest_count
    $(".top-player-position").append("<p>" + nflTopPositions + "</p>")
    $(".top-player-position").append("<p>" + nflArrestCounts + "</p>")
  }
 
 });

      

// function checkCounty(fbiObject){
//    return fbiObject.county_name === "ARANSAS"
// };

// const filteredSearch = fbiObjects.filter(checkCounty);
// console.log(filteredSearch);


