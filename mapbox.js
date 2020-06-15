import Settings from "./Settings.js"
export const mappy = () => {
  const eventHub = document.querySelector(".container");
  mapboxgl.accessToken = Settings.mapToken;
  var map = new mapboxgl.Map({
  container: 'mapbox',
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-86.78, 36.16], // starting position [lng, lat]
  zoom: 9 // starting zoom
  });

new mapboxgl.Marker()
  .setLngLat([-86.78, 36.16])
  .addTo(map);

  let keypressed = false;
  eventHub.addEventListener("keydown", e => {
    if (e.keyCode === 17 && keypressed === true) {
      keypressed = false;
      console.log("false")
    }
    else if (e.keyCode === 17 && keypressed === false) {
      keypressed = true;
      console.log("true")
    }

    
    // Set up an event listener on the map.
    map.on('click', event => {
        if (keypressed === true) {
        // The event object (e) contains information like the
        // coordinates of the point on the map that was clicked.
        console.log('A click event has occurred at ' + event.lngLat);
        new mapboxgl.Marker()
        .setLngLat(event.lngLat)
        .addTo(map)
      }
      });
    });
  }