<template>
    <div>
        <MapPSI>

        </MapPSI>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MapPSI from '@/components/MapPSI.vue';

@Component({
    components: {
        MapPSI
    }
})
export default class Home extends Vue
{
    async mounted()
    {
        return
    }

    unmounted()
    {
        console.log(`unmounted ${this.constructor.name}`)
    }
}
</script>
