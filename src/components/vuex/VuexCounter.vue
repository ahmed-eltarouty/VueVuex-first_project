<template>
<div class="container mt-3">
    <div class="row">
        <div class="col">
            <p class="h3 text-success">counter</p>
            <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ducimus, porro nobis unde quaerat alias laborum, quod ipsum maxime sequi tempore. Sunt ipsam itaque soluta, officia inventore voluptatibus minima sint?</p>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="card shadow-lg">
                <div class="card-body">
                    <p class="h3 display-3">{{counterState.count}}</p>
                    <button @click="clickIncrement" class="btn btn-success m-1">Increment</button>
                    <button @click="clickDerement" class="btn btn-warning m-1">Decrement</button>
                    <button @click="clickIncrementBy(5)" class="btn btn-danger m-1">IncrementBy</button>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:"VuexCounterComponent",
    methods:{
        clickIncrement:function(){
            this.$store.dispatch('counterModule/incrementCounter')
        },
        clickDerement:function(){
            this.$store.dispatch('counterModule/decrementCounter')
        },
        clickIncrementBy:function(val){
            this.$store.dispatch('counterModule/incrementCounterBy',{val:val})
        }
    },
    computed:mapGetters({
        counterState:"getCounterState"
    })

}
</script>

<style>

</style>