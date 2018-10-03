
var queryURL = "https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=judX8VKcSFM3iuNPxRt4Z6oUUwIZ2f7OAII8D5wp&location=Denver+CO";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(res) {
  console.log(res);
});