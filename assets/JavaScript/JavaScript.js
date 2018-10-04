
/*var queryURL = "https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=judX8VKcSFM3iuNPxRt4Z6oUUwIZ2f7OAII8D5wp&location=Denver+CO";*/
var queryURL = "https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=8eBRMg4xQnoq9EGdutObYDPBxTm4k0zfwHdJy91s&location=Denver+CO";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(res) {
  console.log(res);
});

/*Adding Google Map*/

function initMap() {

    // load the map
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38, lng: -95},
      zoom: 5,
      styles: mapStyle
    });

    var mapStyle = [{
      'featureType': 'all',
      'elementType': 'all',
      'stylers': [{'visibility': 'off'}]
    }, {
      'featureType': 'landscape',
      'elementType': 'geometry',
      'stylers': [{'visibility': 'on'}, {'color': '#fcfcfc'}]
    }, {
      'featureType': 'water',
      'elementType': 'labels',
      'stylers': [{'visibility': 'off'}]
    }, {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [{'visibility': 'on'}, {'hue': '#5f94ff'}, {'lightness': 60}]
    }];
  }