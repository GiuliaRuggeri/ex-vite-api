<script>
import AppCards from './AppCards.vue';
import axios from 'axios'

export default {

    name: "AppMain",

    components: {
        AppCards
    },

    data() {
        return {
            breweries: [],
        }
    },

    methods: {
        getBreweries() {
            axios.get('https://api.openbrewerydb.org/v1/breweries?by_country=poland&per_page=10').then(resp => {
                this.breweries = resp.data;
            });
        },


    },
    mounted() {
        this.getBreweries();
    },

}
</script>

<template>
    <div v-if="breweries.length >= 9">
        <div class="container d-flex flex-wrap m-auto">
            <div class="row">
                <AppCards v-for="brewery in breweries" :item="brewery" />

            </div>
        </div>


    </div>
</template>

<style scoped></style>