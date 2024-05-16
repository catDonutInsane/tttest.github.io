
getLocation()

function getLocation() {
    // Если геолокация поддерживается браузером
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
           LOCATION.center=  [longitude,latitude]
           markersGeoJsonSource[0].coordinates = [longitude,latitude]
        });
    } else {
        console.log('Геолокация не поддерживается');
    }

}

export const LOCATION = {
    center: [], // starting position [lng, lat]
    zoom: 15 // starting zoom
  };
  export const markersGeoJsonSource = [
    {
      coordinates: [] ,
      color: "red"
    }
]
