import { LOCATION, markersGeoJsonSource } from "./location.js";

window.map = null;

main();
async function main() {
    // Waiting for all api elements to be loaded
    await ymaps3.ready;
    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer} = ymaps3;

    // Import the package to add a default marker
    const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

    // Initialize the map
    map = new YMap(
      // Pass the link to the HTMLElement of the container
      document.getElementById('app'),
      // Pass the map initialization parameters
      {location: LOCATION, showScaleInCopyrights: true},
      [
        // Add a map scheme layer
        new YMapDefaultSchemeLayer({}),
        // Add a layer of geo objects to display the markers
        new YMapDefaultFeaturesLayer({})
      ]
    );

    // Create default markers and add them to the map
    markersGeoJsonSource.forEach((markerSource) => {
      const marker = new YMapDefaultMarker(markerSource);
      map.addChild(marker);
    });
  }