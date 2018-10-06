//This is the FBI API.

var queryURL = "https://api.usa.gov/crime/fbi/sapi/api/agencies/byStateAbbr/TX?api_key=judX8VKcSFM3iuNPxRt4Z6oUUwIZ2f7OAII8D5wp";

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
  },
  {
    "ori": "TX0010100",
    "agency_name": "Palestine Police Department",
    "agency_type_name": "City",
    "state_name": "Texas",
    "state_abbr": "TX",
    "division_name": "West South Central",
    "region_name": "South",
    "region_desc": "Region III",
    "county_name": "ANDERSON",
    "nibrs": false,
    "latitude": 31.763123,
    "longitude": -95.63455
    },
    {
      "ori": "TX0031300",
      "agency_name": "Hudson Police Department",
      "agency_type_name": "City",
      "state_name": "Texas",
      "state_abbr": "TX",
      "division_name": "West South Central",
      "region_name": "South",
      "region_desc": "Region III",
      "county_name": "ANGELINA",
      "nibrs": false,
      "latitude": 31.32794,
      "longitude": -94.78142
      },
      {
        "ori": "TX0040200",
        "agency_name": "Rockport Police Department",
        "agency_type_name": "City",
        "state_name": "Texas",
        "state_abbr": "TX",
        "division_name": "West South Central",
        "region_name": "South",
        "region_desc": "Region III",
        "county_name": "ARANSAS",
        "nibrs": false,
        "latitude": 28.025465,
        "longitude": -97.054306
        },
      ];
      

function checkCounty(fbiObject){
   return fbiObject.county_name === "ARANSAS"
};

const filteredSearch = fbiObjects.filter(checkCounty);
console.log(filteredSearch);


/*Adding Google Map*/
function initMap() {

  // load the map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 38,
      lng: -95
    },
    zoom: 5,
    styles: mapStyle
  });

  var mapStyle = [{
    'featureType': 'all',
    'elementType': 'all',
    'stylers': [{
      'visibility': 'off'
    }]
  }, {
    'featureType': 'landscape',
    'elementType': 'geometry',
    'stylers': [{
      'visibility': 'on'
    }, {
      'color': '#fcfcfc'
    }]
  }, {
    'featureType': 'water',
    'elementType': 'labels',
    'stylers': [{
      'visibility': 'off'
    }]
  }, {
    'featureType': 'water',
    'elementType': 'geometry',
    'stylers': [{
      'visibility': 'on'
    }, {
      'hue': '#5f94ff'
    }, {
      'lightness': 60
    }]
  }];
}