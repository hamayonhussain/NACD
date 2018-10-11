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


