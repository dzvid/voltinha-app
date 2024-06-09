<template>
    <div id="viewDiv" class="balt-theme"></div>
</template>
<script>
/* eslint-disable */
import { loadModules } from 'esri-loader';
export default {
    mounted() {
        this.loadMap();
    },
    methods: {
        loadMap() {
            loadModules([
                "esri/config",
                "esri/Map",
                "esri/views/MapView",
                "esri/Graphic",
                "esri/layers/GraphicsLayer"
            ], {
                css: true
            })
                .then(([ArcGISMap, Map, MapView, Graphic, GraphicsLayer]) => {
                    // create map with the given options
                    // const map = new ArcGISMap({
                    //   basemap: 'topo-vector'
                    // });
                    // // assign map to this view
                    // this.view = new MapView({
                    //   container: this.$el,
                    //   map: map,
                    //   center: [-60.0403409, -3.129165],
                    //   zoom: 8
                    // });

                    // const map = new ArcGISMap({
                    //   basemap: ''
                    // });

                    const map = new Map({
                        basemap: "streets-vector" // basemap styles service
                    });

                    this.view = new MapView({
                        container: "viewDiv",
                        map: map,
                        center: [-118.805, 34.027], // Longitude, latitude
                        zoom: 13, // Zoom level
                    });


                    const graphicsLayer = new GraphicsLayer();
                    map.add(graphicsLayer);

                    const point = { //Create a point
                        type: "point",
                        longitude: -118.80657463861,
                        latitude: 34.0005930608889
                    };

                    const endPoint = { //Create a point
                        type: "point",
                        longitude: -118.810633,
                        latitude: 34.003444
                    };

                    const simpleMarkerSymbol = {
                        type: "simple-marker",
                        color: [226, 119, 40],  // Orange
                        outline: {
                            color: [255, 255, 255], // White
                            width: 1
                        }
                    };

                    const pointGraphic = new Graphic({
                        geometry: point,
                        symbol: simpleMarkerSymbol
                    });

                    const endPointGraphic = new Graphic({
                        geometry: endPoint,
                        symbol: simpleMarkerSymbol
                    });

                    graphicsLayer.add(pointGraphic);
                    graphicsLayer.add(endPointGraphic);


                    // Create a line geometry
                    const polyline = {
                        type: "polyline",
                        paths: [
                            [-118.80657463861, 34.0005930608889], //Longitude, latitude
                            [-118.810633, 34.003444]  //Longitude, latitude
                        ]
                    };
                    const simpleLineSymbol = {
                        type: "simple-line",
                        color: [226, 119, 40], // Orange
                        width: 2
                    };

                    const polylineGraphic = new Graphic({
                        geometry: polyline,
                        symbol: simpleLineSymbol,
                    });
                    graphicsLayer.add(polylineGraphic);


                    // Create a polygon geometry
                    const polygon = {
                        type: "polygon",
                        rings: [
                            [-118.818984489994, 34.0137559967283], //Longitude, latitude
                            [-118.806796597377, 34.0215816298725], //Longitude, latitude
                            [-118.791432890735, 34.0163883241613], //Longitude, latitude
                            [-118.79596686535, 34.008564864635],   //Longitude, latitude
                            [-118.808558110679, 34.0035027131376]  //Longitude, latitude
                        ]
                    };

                    const simpleFillSymbol = {
                        type: "simple-fill",
                        color: [227, 139, 79, 0.8],  // Orange, opacity 80%
                        outline: {
                            color: [255, 255, 255],
                            width: 1
                        }
                    };

                    const popupTemplate = {
                        title: "{Name}",
                        content: "{Description}"
                    }
                    const attributes = {
                        Name: "Graphic",
                        Description: "I am a polygon"
                    }

                    const polygonGraphic = new Graphic({
                        geometry: polygon,
                        symbol: simpleFillSymbol,
                        attributes: attributes,
                        popupTemplate: popupTemplate
                    });
                    graphicsLayer.add(polygonGraphic);



                });
        }
    }
}
</script>
<style>
/* esri styles */
@import url('https://js.arcgis.com/4.4/esri/themes/light/main.css');

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

#viewDiv {
    position: absolute;
    /* top: 3.5rem;
    bottom: 0;
    left: 0;
    right: 0; */
    height: 648px;
    width: 480px;
}
</style>