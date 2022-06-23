<template>
    <div class="container mt-3">
        <div class="row">
            <p class="h3 text-success">User List</p>
            <p class="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis nostrum blanditiis repudiandae ipsum dolore eum culpa nobis fugiat illum recusandae mollitia animi odio molestiae ut deleniti, laborum distinctio harum.
            </p>
        </div>
    </div>
    <div class="container" v-if="loading">
        <div class="row">
            <div class="col">
                <Loading />
            </div>
        </div>
    </div>

    <div class="container" v-if="!loading && errorMessage">
        <div class="row">
            <div class="col">
                <p class="fw-bold text-danger">{{errorMessage}}</p>
            </div>
        </div>
    </div>

    <div class="container" v-if="!loading && users.length > 0">
        <div class="row">
            <div class="col">
                <table class="table table-hover text-cetner table-struped">
                    <thead class="bg-secondary text-white">
                        <tr>
                            <th>SNO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Company</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user,index) in users" :key="index">
                            <td>{{index}}</td>
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.website}}</td>
                            <td>{{user.company.name}}</td>
                            <td>{{user.address.city}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Loading from './loading.vue'
export default {
    name: "UserListComponent",
    data: function () {
        return {
            loading: false,
            users: [],
            errorMessage: null
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let dataURL = `https://jsonplaceholder.typicode.com/users`;
            let response = await axios.get(dataURL);
            this.users = response.data;
            this.loading = false;
        }
        catch (err) {
            this.loading = false;
            this.errorMessage = err;
        }
    },
    components: { Loading }
}
</script>

<style>

</style>