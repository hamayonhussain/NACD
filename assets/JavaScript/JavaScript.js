//This is the FBI API.

var queryURL = "http://NflArrest.com/api/v1";

// ajax call

$.ajax({
  url: queryURL + "/crime",
  method: "GET"
 }).then(function (response) {
   console.log(response);
  // for loop: 1. declare and assign counter 2. compare counter 3. increment counter
  for (var i = 0; i <= 5; i++) {
    var nflCrimesCategory = response[i].Category
    var nflArrestCounts = response[i].arrest_count
    $(".top-crimes").append(nflCrimesCategory)
    $(".top-crimes").append(nflArrestCounts )
  }
 
 });

      

// function checkCounty(fbiObject){
//    return fbiObject.county_name === "ARANSAS"
// };

// const filteredSearch = fbiObjects.filter(checkCounty);
// console.log(filteredSearch);


