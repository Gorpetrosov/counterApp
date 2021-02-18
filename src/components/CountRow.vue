<template>
    <b-row class="m-3 justify-content-around">
        <b-col cols="6">
            <b-badge class="ml-2 p-2 mr-2 font-weight-bold" pill variant="primary">{{count}}</b-badge>
            <b-button class="ml-2 p-1 mr-2 font-weight-bold" pill @click="incrementNumber(index)">
                <b-icon-plus></b-icon-plus>
            </b-button>
            <b-button class="ml-2 p-1 mr-2 font-weight-bold" :disabled="!count" pill variant="info" @click="decrementNumber(index)">
                <b-icon-dash></b-icon-dash>
            </b-button>
            <b-button class="ml-2 p-1 mr-2 font-weight-bold" pill variant="danger" @click="removeRow(index)">
                <b-icon-trash></b-icon-trash>
            </b-button>
        </b-col>
    </b-row>
</template>

<script>
    import {BIconPlus, BIconDash, BIconTrash} from 'bootstrap-vue';
    import {mapActions} from 'vuex';

    export default {
        name: "CountRow",
        components: {
            BIconPlus,
            BIconDash,
            BIconTrash,
        },
        props: {
            index: {
                type: Number,
                required: true,
                default: 0,
            },
            count: {
                type: Number,
                required: true,
                default: 0,
            },
        },
        computed: mapActions(["incrementItem", "decrementItemA", "removeCurrentListA"]),
        methods: {
            incrementNumber: function(index) {
                this.$store.dispatch("incrementItem", index)
            },
            decrementNumber: function (index) {
                this.$store.dispatch("decrementItemA", index);
            },
            removeRow: function (index) {
                this.$store.dispatch("removeCurrentListA", index);
            }
        }
    }
</script>

<style scoped>

</style>