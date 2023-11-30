<script>
export default {
    name: "AppCards",

    props: {
        item: Object
    }
}

</script>

<template>
    <div class="col-4 text-center">
        <img src="../assets/img/beer-logo-2.jpg" alt="" class="img-fluid">
        <h3> <font-awesome-icon icon="fa-solid fa-beer-mug-empty" /> {{ item.name }}</h3>
        <p> City: {{ item.city }}</p>
        <p> Address: {{ item.address_1 }}</p>



    </div>
</template>

<style scoped></style>