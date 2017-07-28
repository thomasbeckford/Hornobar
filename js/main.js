/* ---------------------------------------------- /*
         * Web page Preloader
/* ---------------------------------------------- */
$(window).load(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

/* ---------------------------------------------- /*
         * Background Slide show
/* ---------------------------------------------- */
$('#home').superslides({
        play: '4000',
});

/* ---------------------------------------------- /*
         * Lightbox
/* ---------------------------------------------- */
$(function() {
    var gallery = $('#gallery a').simpleLightbox();
});

/* ---------------------------------------------- /*
         * Masonry Image grid
/* ---------------------------------------------- */
$('#gallery').flexImages({
    rowHeight: 300
});

/* ---------------------------------------------- /*
         * Date and Timepicker
/* ---------------------------------------------- */
$('#picktime').timepicker({
    disableTouchKeyboard: 'true'
});

$('#pickdate').datepicker({
    disableTouchKeyboard: 'true',
    autoclose: 'true'
});

/* ---------------------------------------------- /*
         * One page scroll
/* ---------------------------------------------- */
$('#menu-items, #home').onePageNav();


/* ---------------------------------------------- /*
         * Google Map
/* ---------------------------------------------- */
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(-34.468626, -58.502158), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": 33
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [{
                "saturation": "-100"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [{
                "gamma": "0.75"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [{
                "lightness": "-37"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f9f9f9"
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{
                "saturation": "-100"
            }, {
                "lightness": "40"
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": "-100"
            }, {
                "lightness": "-37"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "saturation": "-100"
            }, {
                "lightness": "100"
            }, {
                "weight": "2"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "labels.icon",
            "stylers": [{
                "saturation": "-100"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "saturation": "-100"
            }, {
                "lightness": "80"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
                "saturation": "-100"
            }, {
                "lightness": "0"
            }]
        }, {
            "featureType": "poi.attraction",
            "elementType": "geometry",
            "stylers": [{
                "lightness": "-4"
            }, {
                "saturation": "-100"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c5dac6"
            }, {
                "visibility": "on"
            }, {
                "saturation": "-95"
            }, {
                "lightness": "62"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "lightness": 20
            }]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "saturation": "-100"
            }, {
                "gamma": "1.00"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [{
                "gamma": "0.50"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "saturation": "-100"
            }, {
                "gamma": "0.50"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c5c6c6"
            }, {
                "saturation": "-100"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "lightness": "-13"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [{
                "lightness": "0"
            }, {
                "gamma": "1.09"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e4d7c6"
            }, {
                "saturation": "-100"
            }, {
                "lightness": "47"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{
                "lightness": "-12"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "saturation": "-100"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#fbfaf7"
            }, {
                "lightness": "77"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
                "lightness": "-5"
            }, {
                "saturation": "-100"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [{
                "saturation": "-100"
            }, {
                "lightness": "-15"
            }]
        }, {
            "featureType": "transit.station.airport",
            "elementType": "geometry",
            "stylers": [{
                "lightness": "47"
            }, {
                "saturation": "-100"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#acbcc9"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "saturation": "53"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "lightness": "-42"
            }, {
                "saturation": "17"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "lightness": "61"
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-34.468626, -58.502158),
        map: map,
        title: 'Snazzy!'
    });

}