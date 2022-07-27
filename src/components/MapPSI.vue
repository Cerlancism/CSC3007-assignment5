<template>
    <v-container style="max-width: 1600px;">
        <v-row>
            <v-col cols="12">
                <h1 class="text-center">PSI</h1>
                <p class="text-center">Last updated: {{ lastUpdated }}</p>
            </v-col>
            <v-col cols="12">
                <l-map
                    style="height: 640px"
                    :max-bounds="latLngBounds([[1.1, 103.5], [1.5, 104.3]])"
                    :zoom="12"
                    :maxZoom="18"
                    :minZoom="12"
                    :center="[1.3521, 103.8198]">

                    <l-tile-layer
                        url="https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png"
                        attribution='<img src="https://www.onemap.gov.sg/docs/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'>
                    </l-tile-layer>

                    <l-marker
                        v-for='item in psiMarkers'
                        :key="item.location"
                        :lat-lng="item.center">
                        <l-icon :class-name="item.class + ` psi-marker`">
                            <div class="headline">
                                {{ item.value }}
                            </div>
                        </l-icon>

                    </l-marker>
                </l-map>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
.node-hover {
    stroke-width: 2px;
    stroke: black;
}
</style>

<script lang="ts">
import { Component, Prop, Vue, } from 'vue-property-decorator';
// import * as d3 from "d3";
import { latLngBounds, Icon } from 'leaflet';

import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import { PSI } from '@/model/PSI';

delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

@Component({
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon
    }
})
export default class MapPSI extends Vue
{
    public latLngBounds = latLngBounds

    public psiMarkers = [
        {
            location: 'central',
            center: [1.35735, 103.82],
            value: "-",
            class: "psi-normal"
        },
        {
            location: 'south',
            center: [1.29587, 103.82],
            value: "-",
            class: "psi-normal"
        },
        {
            location: 'north',
            center: [1.41803, 103.82],
            value: "-",
            class: "psi-normal"
        },
        {
            location: 'east',
            center: [1.35735, 103.94],
            value: "-",
            class: "psi-normal"
        },
        {
            location: 'west',
            center: [1.35735, 103.7],
            value: "-",
            class: "psi-normal"
        }
    ]

    public psiResponse!: PSI;
    public lastUpdated = ""

    /**
     * https://www.haze.gov.sg/
     * @param psi 
     */
    getPSISeverityClass(psi: number)
    {
        if (psi <= 50)
        {
            return "psi-normal"
        }
        else if (psi >= 51 && psi <= 100)
        {
            return "psi-moderate"
        }
        else if (psi >= 101 && psi <= 200)
        {
            return "psi-unhealthy"
        }
        else if (psi >= 201 && psi <= 300)
        {
            return "psi-veryunhealthy"
        }
        else
        {
            return "psi-hardardous"
        }
    }

    async mounted()
    {
        try
        {
            const response = await fetch("https://api.data.gov.sg/v1/environment/psi")

            if (!response.ok)
            {
                throw "Not ok response"
            }

            // await sleepAsync(1000)

            this.psiResponse = JSON.parse(await response.text()) as PSI

            const psi_24 = this.psiResponse.items[0].readings["psi_twenty_four_hourly"]

            for (const key in psi_24)
            {
                if (Object.prototype.hasOwnProperty.call(psi_24, key))
                {
                    const value = (psi_24 as any)[key];
                    const target = this.psiMarkers.find(x => x.location === key)

                    if (!target)
                    {
                        continue
                    }
                    console.log(key, value)
                    target.value = value
                    target.class = this.getPSISeverityClass(value)
                }
            }
            this.lastUpdated = new Date(this.psiResponse.items[0].update_timestamp).toLocaleString()
        } catch (e)
        {
            const error = e as Error
            console.error(error)
            alert("API Error: " + error.message)
        }
    }
}
</script>


<style>

.psi-marker {
    opacity: 0.8;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    width: 64px !important;
    height: 64px !important;
    margin: 0 !important;
}

.psi-normal {
    background-color: green;
}

.psi-moderate {
    background-color: blue;
}

.psi-unhealthy {
    background-color: yellow;
}

.psi-veryunhealthy {
    background-color: orange;
}

.psi-hardardous {
    background-color: red;
}
</style>