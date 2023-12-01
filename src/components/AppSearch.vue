<script>
import { store } from '../store';

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    },
    methods: {
        search() {
            console.log("Cerca: ", this.store.searchString);
            this.$emit("search");
        }
    }
}
</script>
<template>
    <div class="d-flex justify-content-center">
        <div class="input-group mb-3 w-25">
            <input type="text" class="form-control text-center" placeholder="cerca" v-model="store.searchString"
                @keyup.enter="$emit('search')">
        </div>
    </div>
</template>
<style scoped></style>