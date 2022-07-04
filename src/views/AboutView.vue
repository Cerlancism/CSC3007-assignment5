<template>
    <div class="about">
        <v-container style="max-width: 1280px">
            <MainBody
                msg="Visualizing just a small cluster of cases (20 cases) during the Covid situation in 2021"
            />
        </v-container>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import MainBody from '@/components/MainBody.vue'; // @ is an alias to /src

    @Component({
        components: {
            MainBody,
        },
    })
    export default class AboutView extends Vue
    {

    }
</script>