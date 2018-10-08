//This is the FBI API.

var queryURL = "http://NflArrest.com/api/v1/crime";

// ajax call

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (Response) {
  console.log(Response);
});

var fbiObjects = [{
  "ori": "TX0000000",
  "agency_name": "Department of Public Safety",
  "agency_type_name": "Other State Agency",
  "state_name": "Texas",
  "state_abbr": "TX",
  "division_name": "West South Central",
  "region_name": "South",
  "region_desc": "Region III",
  "county_name": "N/A",
  "nibrs": false,
  "latitude": 30.239513,
  "longitude": -97.69127
  }];

      

function checkCounty(fbiObject){
   return fbiObject.county_name === "ARANSAS"
};

const filteredSearch = fbiObjects.filter(checkCounty);
console.log(filteredSearch);


