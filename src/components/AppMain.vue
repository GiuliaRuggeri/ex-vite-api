<script>
import AppCards from './AppCards.vue';
import AppSearch from './AppSearch.vue';
import axios from 'axios'
import { store } from '../store';

export default {

    name: "AppMain",

    components: {
        AppCards,
        AppSearch
    },

    data() {
        return {

            store
        }
    },

    methods: {
        getBreweries() {
            let url = this.store.API;

            if (this.store.searchString.length) {
                url += `&query=${this.store.searchString}`

            } else {
                url = "https://api.openbrewerydb.org/v1/breweries?by_country=poland&per_page=10"

            }

            axios.get(url).then(resp => {
                this.store.breweries = resp.data;

            }).catch(error => {
                this.store.breweries = [];
            });
        },


    },
    mounted() {
        this.getBreweries();
    },

}
</script>

<template>
    <AppSearch @search="getBreweries" />
    <div v-if="store.breweries.length">
        <div class="container d-flex flex-wrap m-auto">
            <div class="row">
                <AppCards v-for="brewery in store.breweries" :item="brewery" />

            </div>
        </div>


    </div>
    <p v-if="store.breweries == 0">Nessun risultato trovato.</p>
</template>

<style scoped></style>