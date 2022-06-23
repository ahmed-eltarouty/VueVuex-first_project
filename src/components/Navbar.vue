<template>
    <nav class="navbar navbar-dark bg-success navbar-expand-sm">
        <div class="container">
            <router-link to="/" class="navbar-brand">Vuex</router-link>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/counter" class="nav-link">Counter</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/employee" class="nav-link">employee</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/user-list" class="nav-link">users</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name:"NavbarComponent"

}
</script>

<style>

</style>