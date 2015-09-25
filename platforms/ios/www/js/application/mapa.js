function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var parts='';
function loadScript() {
	
	parts='';
	var url = decodeURI(getUrlVars()["url"]);
	//var dir = document.getElementById('txtDireccion');


    parts = url.split("@");
    //dir.textContent = parts[1];


    var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDSVAgJrWpsjdJrsEHyg710jTKDtXIoAjE&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}



function initialize() {
	
  var puntos = parts[0].split(",");
	
  var mapOptions = {
    zoom: 17
	
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
 
  
      var pos = new google.maps.LatLng(puntos[0],
                                       puntos[1]);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
		center: new google.maps.LatLng(puntos[0],
                                       puntos[1]),
        content: decodeURI(parts[1] + '        ')
      });

      map.setCenter(pos);
  




  var options = {
    map: map,
    position: new google.maps.LatLng(puntos[0], puntos[1]),
    content: decodeURI(parts[1] + '        ')
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}