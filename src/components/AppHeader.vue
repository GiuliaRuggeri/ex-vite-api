<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <nav class="navbar p-0">
        <div class="container d-flex">
            <img src="../assets/img/Beer-Logo.jpg" class="navbar-brand logo">
            <form class="d-flex" role="search">
                <ul class="navbar-nav d-flex flex-row">
                    <li class="nav-item ms-2">
                        <a class=" nav-link active title" aria-current="page" href>Breweries</a>
                    </li>

                </ul>
            </form>
        </div>
    </nav>
</template>

<style scoped>
.logo {
    width: 10rem;
    border-radius: 2rem;
}

.title {
    font-weight: bold;
    font-size: 2rem;
}
</style>