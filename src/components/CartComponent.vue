<template>
    <b-row class="row mb-2 justify-content-center">
        <b-col>
        <b-badge class="mr-2 p-2 font-weight-bold" pill variant="light"><b-icon-cart4 /></b-badge>
        <b-badge class="ml-2 p-2 mr-2 font-weight-bold" pill variant="success">{{itemsCountVal}}</b-badge>
        <b-badge class="ml-2 p-2 font-weight-bold" pill variant="light">Items</b-badge>
        </b-col>
    </b-row>
</template>

<script>
    import { BIconCart4 } from 'bootstrap-vue';
    import { mapState } from 'vuex';
    export default {
        name: "CartComponent",
        components: {
          BIconCart4,
        },
        data() {
            return {
                itemsCountVal : 0,
            }
        },
        computed: mapState(['itemsCount']),
        watch: {
            itemsCount(newValue) {
                this.itemsCountVal = newValue;
            },
        },
        created() {
            this.itemsCountVal = this.$store.getters.getItemsCount;
        }
    }
</script>

<style scoped>

</style>