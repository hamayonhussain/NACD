<<<<<<< HEAD
/*var stateChosen = */
var queryURL = "https://api.usa.gov/crime/fbi/sapi/api/states/" + stateChosen + "?api_key=yymOL8SXIzpBwPuh92Fgp8vBqFAEhoHaVYVB3HHL";
=======

//This is the FBI API.

var queryURL = "https://api.usa.gov/crime/fbi/sapi/api/agencies/byStateAbbr/TX?api_key=judX8VKcSFM3iuNPxRt4Z6oUUwIZ2f7OAII8D5wp";

>>>>>>> 40062fcc6d5f165f72f63292016c89270e241321
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