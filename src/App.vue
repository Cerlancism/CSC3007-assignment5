<template>
    <v-app>
        <v-card :class="radius">
            <v-toolbar color="dark" dark flat>
                <v-toolbar-title>Singapore PSI Map</v-toolbar-title>

                <v-spacer></v-spacer>

                <template v-slot:extension>
                    <v-tabs v-model="tab" align-with-title>
                        <v-tabs-slider color="white"></v-tabs-slider>

                        <v-tab to="/">Home</v-tab>
                        <v-tab to="/about">About</v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>
        </v-card>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue
{
    tab = null
    items = ["Home", "About"]
    radius = "rounded-0"
}
</script>

<style>
html {
    overflow-y: auto
}
</style>
