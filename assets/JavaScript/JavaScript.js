//This is the NFL Arrests API.

var queryURL = "https://NflArrest.com/api/v1";

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

 var queryURL = "https://NflArrest.com/api/v1";

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

 var queryURL = "https://NflArrest.com/api/v1";

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



//shay menu 

// Start of menu

(function($){

	var settings = {
		shrinktogglerAfter: 'firstpage', // shrink hamburgerui UL to just show last LI with hamburger icon when user scrolls the page down? 'firstpage' or px number (ie: 200)
		dismissmenuDelay: 200 // delay in miliseconds after user clicks on full screen menu before hiding it
	}

	function intializeMenu(){
		var $menuwrapper = $('#hamburgericonmenuwrapper')
		var $fullscreenmenu = $menuwrapper.find('#fullscreenmenu')
		var $hamburgerui = $('#hamburgerui')
		var $toggler = $('#navtoggler').parent()
		var scrolltop
		var strinkafter
		var shrinktimer
		var dismisstimer
	
		$toggler.on('click', function(e){
			$menuwrapper.toggleClass('open')
			e.preventDefault()
		})

		$fullscreenmenu.on('click', function(e){
			clearTimeout(dismisstimer)
			dismisstimer = setTimeout(function(){
				$menuwrapper.removeClass('open')				
			}, settings.dismissmenuDelay)
		})

		if ($menuwrapper.length == 1 && settings.shrinktogglerAfter != 0){
			var shrinktogglerAfter = settings.shrinktogglerAfter
			$(window).on('scroll resize', function(e){
				clearTimeout(shrinktimer)
				shrinktimer = setTimeout(function(){
					scrolltop = $(window).scrollTop()
					strinkafter = (shrinktogglerAfter == 'firstpage')? $(window).height() : parseInt(shrinktogglerAfter)
					if ( scrolltop > strinkafter && !$hamburgerui.hasClass('shrink') ){
						$hamburgerui.addClass('shrink')
					}
					else if ( scrolltop < strinkafter && $hamburgerui.hasClass('shrink') ){
						$hamburgerui.removeClass('shrink')
					}
				}, 50)
			})
		}
	}

	$(function(){ // on DOM load
		intializeMenu()
	})

}(jQuery))

// End of menu //


////Add Google Map

var map;
function initMap() {
  var mapOptions = {
      center: {lat: 51.5048835, lng: 0.1101221},
       zoom: 12   
  };
  
  var markers = [
      {lat: 36.166461, lng:  -86.166461},
      {lat: 40.812194, lng: -74.076983},
      {lat: 40.446786, lng: -80.015761},
      {lat: 35.225808, lng:  -80.852861},
      {lat: 39.277969, lng: -76.622767},
      {lat: 27.975967, lng: -82.50335},
      {lat: 39.760056, lng:  -86.163806},
      {lat: 44.973881, lng: -93.258094},
      {lat: 33.5277, lng: -112.262608},
      {lat: 32.747778, lng:  -97.092778},
      {lat: 33.757614, lng: -84.400972},
      {lat: 40.812194, lng: -74.076983},
      {lat: 39.743936, lng:  -105.020097},
      {lat: 25.957919, lng: -80.238842},
      {lat: 39.900775, lng: -75.167453},
      {lat: 41.862306, lng:  -87.616672},
      {lat: 42.090925, lng: -71.26435},
      {lat: 38.907697, lng: -76.864517},
      {lat: 44.501306, lng:  -88.062167},
      {lat: 32.783117, lng: -117.119525},
      {lat: 29.950931, lng: -90.081364},
      {lat: 29.684781, lng:  -95.410956},
      {lat: 42.773739, lng: -84.400972},
      {lat: 37.713486, lng: -122.386256},
      {lat: 30.323925, lng:  -81.637356},
      {lat: 41.506022, lng: -81.699564},
      {lat: 37.751411, lng: -122.200889},
      {lat: 39.048914, lng:  -94.484039},
      {lat: 38.632975, lng: -90.188547},
      {lat: 47.595153, lng: -122.331625},
      {lat: 39.095442, lng:  -84.516039},
      {lat: 42.340156, lng:  -83.045808}
              ];


map = new google.maps.Map(document.getElementById('map'), mapOptions);
addMarkers();

google.maps.event.addDomListener(window, 'load', initialize);

function addMarkers() {
var bounds = new google.maps.LatLngBounds();

for (var i = 0; i < markers.length; i++) {
  var latLng = new google.maps.LatLng(markers[i].lat, markers[i].lng);
  markers[i] = new google.maps.Marker({
      position: latLng,
      map: map,
      title: 'NFL Crime Map'
  });

  bounds.extend(markers[i].getPosition());
  map.fitBounds(bounds);
  }
  }   
}