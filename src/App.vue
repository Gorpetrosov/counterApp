<template>
    <div id="app" class="">
        <b-container>
            <cart-component/>
            <options-component/>
            <count-row v-for="(item,index) in counterListData" :key="index" :index="index" :count="item.count"></count-row>
        </b-container>
    </div>
</template>

<script>
    import CartComponent from './components/CartComponent.vue';
    import OptionsComponent from './components/OptionsComponent.vue';
    import CountRow from './components/CountRow.vue';
    import { mapState } from 'vuex';

    export default {
        name: 'App',
        components: {
            CartComponent,
            OptionsComponent,
            CountRow,
        },
        data() {
            return {
                counterListData: [],
            }
        },
        computed: mapState(['counterList']),
        watch: {
            counterList(newValue) {
                this.counterListData = newValue
            },
        },
        created() {
            this.counterListData = this.counterList;
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
