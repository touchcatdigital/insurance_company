"use strict";
TB.App.documentReady(function () {
	var cYear = TB.EL('#copyright_year'),
		date = new Date(), year = date.getFullYear(),
		mobileIcon = TB.EL('#mobile_nav_icon'),
		mobileNav = TB.EL('#mobile_nav'),
		pageContent = TB.EL('#page_content');
	cYear.val(year);
	window.setTimeout(function () {
		pageContent.style('opacity',1);
	}, 250);
	mobileIcon.on('click', function () {
		if (mobileIcon.hasClass('open')) {
			mobileIcon.removeClass('open');
			mobileNav.style('maxHeight', '0');
		} else {
			mobileIcon.addClass('open');
			mobileNav.style('maxHeight', '600px');
		}
	});
});
if(typeof mapboxgl!=='undefined'){
	mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hY3BoZXJzb24iLCJhIjoiY2phZDN3M3d6MGZ0eTJxbnF5aTJja2l1bCJ9.xca9fm15JRJVlAzfRop7wQ';
	var map = new mapboxgl.Map({
		container: 'map', // container id
		style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
		center: [-79.454126, 43.655839], // starting position [lng, lat]
		zoom: 15 // starting zoom
	});

	map.on("load", function () {
		map.loadImage("image/marker.png", function (error, image) {
			if (error) throw error;
			map.addImage("custom-marker", image);
			map.addLayer({
				id: "markers",
				type: "symbol",
				/* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
				source: {
					type: "geojson",
					data: {
						type: "FeatureCollection",
						features: [{ "type": "Feature", "geometry": { "type": "Point", "coordinates": ["-79.454126", "43.655839"] } }]
					}
				},
				layout: {
					"icon-image": "custom-marker",
				}
			});
		});
	});	
}