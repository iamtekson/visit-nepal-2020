var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
	thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	osmAttrib = '&copy; ' + osmLink + ' Contributors',
	landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
	thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink;
var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib}),
	landMap = L.tileLayer(landUrl, {attribution: thunAttrib});
var map = L.map('demo', {
	layers:[osmMap]}).setView([28.2096, 83.9856], 11);
var baseLayers = {
	"OSM Mapnik": osmMap,
	"Landscape": landMap
    };
    
/* ====================
Adding  Multiple tourismPlaces
==================== */
		var tourismPlaces = [
			["Sarangkot",28.2439, 83.9486,'sarangkot.jpg', 'Sarangkot is Pokhara municipality ward No 18 west of Pokhara in Kaski District Gandaki Zone. In 2015, it was annexed to Pokhara 26. At the time of the 1991 Nepal census it had a total population of 5,060 with 1,010 individual households.'],
			["Phewa Lake",28.2154,83.9453, 'phewa.jpg', 'Phewa Lake, Phewa Tal or Fewa Lake is a freshwater lake in Nepal formerly called Baidam Tal located in the south of the Pokhara Valley that includes Pokhara city; parts of Sarangkot and Kaskikot.'],
			["Bindabasini Temple ",28.2378, 83.9842, 'bindabasini.jpg', 'The Bindhyabasini temple is located near Bagar, in Pokhara, Nepal. Legend relates this temple to the famous temple of Bindhyabasini in Bindhyachal in Uttar Pradesh, India. It is believed that King Siddhi Narayan Shah of Kaski brought the deity to Pokhara before Nepal’s unification.'],
            ["Shanti Stupa", 28.2010, 83.9448, 'shanti.jpg','Pokhara Shanti Stupa is a Buddhist pagoda-style monument on Anadu Hill of the former Pumdi Bhumdi Village Development Committee, in the district of Kaski, Nepal.'],
            ["Pokhara International Airport", 28.1843, 84.0134, 'airport.jpg','Pokhara Regional International Airport is an under construction airport in Pokhara, Gandaki Pradesh of Nepal. It is 3 km east from the existing domestic airport, at Chinnedanda.'],
        ];
		for (var i = 0; i<tourismPlaces.length; i++){
			eachPlace = new L.marker([tourismPlaces[i][1], tourismPlaces[i][2]]);
			eachPlace.bindPopup(`<h3>${tourismPlaces[i][0]}</h3><p>${tourismPlaces[i][4]}</p><img src='${tourismPlaces[i][3]}'>`)
			.addTo(map);
            allPlace += eachPlace;
            eachPlace.bindTooltip(`<h3>${tourismPlaces[i][0]}</h3>`);
		}