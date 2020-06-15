import {useApartments, addApartment} from "./aptDataProvider.js"

export const mappy = () => {
  const eventHub = document.querySelector(".container");
  const allApartments = useApartments();

  mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXNuaXR6IiwiYSI6ImNrYmdpdzFrdzE2MTcyb21rOW92dG9laWYifQ.shmWe90XzNgEIWPgdK2nVw';
  var map = new mapboxgl.Map({
  container: 'mapbox',
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-86.78, 36.16], // starting position [lng, lat]
  zoom: 9 // starting zoom
  });

allApartments.map(
  location => {
    new mapboxgl.Marker()
     .setLngLat([location.coordinates.lng, location.coordinates.lat])
     .addTo(map);
  }
)

map.on('mouseover', event => {

  allApartments.map(
    location => {
      if ((event.lngLat.lng).toFixed(2) === (location.coordinates.lng).toFixed(2) && (event.lngLat.lat).toFixed(2) === (location.coordinates.lat).toFixed(2)) {
        console.log(map)
          var popup = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
          .setLngLat(event.lngLat)
          .setHTML(`<h1>${location.name}</h1>`)
          .setMaxWidth("150px")
          .addTo(map);
        
      }    

    }
  )
});

   var markerHeight = 50, markerRadius = 10, linearOffset = 25;
 var popupOffsets = {
 'top': [0, 0],
 'top-left': [0,0],
 'top-right': [0,0],
 'bottom': [0, -markerHeight],
 'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
 'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
 'left': [markerRadius, (markerHeight - markerRadius) * -1],
 'right': [-markerRadius, (markerHeight - markerRadius) * -1]
 };
    //Add locations
    map.on('click', event => {
        let response = window.confirm("Add this location to your apartment list?")
        if (response === true) {
          let apartmentName = window.prompt("What apartment is this?")
          let aptObject = {
            "name": apartmentName,
            "coordinates": event.lngLat
          }
          addApartment(aptObject)
          console.log('A click event has occurred at ' + event.lngLat);
          new mapboxgl.Marker()
          .setLngLat(event.lngLat)
          .addTo(map)
        }  
      });


  }