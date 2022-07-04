<template>
    <div>
        <ForceGraph>

        </ForceGraph>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ForceGraph from '@/components/ForceGraph.vue';

@Component({
    components: {
        ForceGraph
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
