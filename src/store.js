import { reactive } from 'vue'

export const store = reactive({
    API: "https://api.openbrewerydb.org/v1/breweries/search?&per_page=10",
    breweries: [],
    searchString: ""
});