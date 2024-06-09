<template>
    <header class="d-flex">
        <v-btn icon color="primary" flat rounded slim @click="() => $router.go(-1)" class="mr-4">
            <v-icon> mdi-arrow-left-bold </v-icon>
        </v-btn>

        <h1>Corrida de Terça</h1>
    </header>

    <v-container class="mt-4">
        <v-row>
            <v-col cols="6" md="6">
                <v-card class="" flat>
                    <p class="mb-3">
                        <v-icon class="mr-2" size="2rem"> mdi-map-marker-distance </v-icon>
                        <span class="font-weight-bold">Distânciapercorrida:</span> 101m
                    </p>
                    <p class="mb-3">
                        <v-icon class="mr-2" size="2rem"> mdi-calendar-start </v-icon>
                        <span class="font-weight-bold">Iniciada em:</span> {{ this.item.startedAt }}
                    </p>
                    <p class="mb-3">
                        <v-icon class="mr-2" size="2rem"> mdi-calendar-end </v-icon>
                        <span class="font-weight-bold">Finalizada em:</span> {{ this.item.finishedAt }}
                    </p>
                </v-card>
            </v-col>

            <v-col cols="6" md="6">
                <v-card>
                    <div class="mapdiv" id="mapdiv"></div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Map from "@arcgis/core/Map";
import Graphic from "@arcgis/core/Graphic";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"

export default {
    name: 'App',
    data: () => ({
        item: {
            id: 0,
            name: 'Corrida de Terça',
            createdAt: new Date('2024-06-09T17:20:51.465Z').toLocaleString('pt-br'),
            startedAt: new Date('2024-06-09T17:21:20.465Z').toLocaleString('pt-br'),
            finishedAt: new Date('2024-06-09T17:23:48.465Z').toLocaleString('pt-br'),
            actions: null,
            description: 'Corridinha curta a tarde, estava muito quente acabei passando mal.'
        }
    }),
    async mounted() {
        const map = new Map({
            basemap: 'streets-vector'
        });

        const view = new MapView({
            // https://v3.vuejs.org/api/instance-properties.html#el
            container: 'mapdiv',
            map: map,
            center: [-60.039096, -3.114016], // Longitude, latitude
            zoom: 15, // Zoom level
        });


        const graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);

        const point = { //Create a point
            type: "point",
            longitude: -60.039096,
            latitude: -3.114016
        };

        const endPoint = { //Create a point
            type: "point",
            longitude: -60.037932,
            latitude: -3.113824
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
                [-60.039096, -3.114016], //Longitude, latitude
                [-60.037932, -3.113824]  //Longitude, latitude
            ]
        };
        const simpleLineSymbol = {
            type: "simple-line",
            color: [226, 119, 40], // Orange
            width: 2
        };

        const popupTemplate = {
            title: "{Name}",
            content: "{Description}"
        }
        const attributes = {
            Name: this.item.name,
            Description: this.item.description
        }

        const polylineGraphic = new Graphic({
            geometry: polyline,
            symbol: simpleLineSymbol,
            attributes: attributes,
            popupTemplate: popupTemplate
        });
        graphicsLayer.add(polylineGraphic);
    }
}
</script>

<style scoped>
@import 'https://js.arcgis.com/4.29/@arcgis/core/assets/esri/themes/light/main.css';

html,
body,
#app {
    width: 100%;
    height: 100%;
}

.mapdiv {
    height: 420px;
}
</style>