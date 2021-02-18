<template>
    <b-row class="justify-content-center">
        <b-row>
            <b-button class="mr-1" variant="success" @click="refreshNumbers">Refresh numbers
                <b-icon-arrow-repeat></b-icon-arrow-repeat>
            </b-button>
            <b-button class="ml-1" variant="info" :disabled="disabled" @click="restoreNumbers">Restore
                <b-icon-bootstrap-reboot></b-icon-bootstrap-reboot>
            </b-button>
        </b-row>
    </b-row>
</template>

<script>
    import {BIconArrowRepeat, BIconBootstrapReboot} from 'bootstrap-vue';
    import {mapActions, mapState} from 'vuex';
    export default {
        name: "OptionsComponent",
        components: {
            BIconArrowRepeat,
            BIconBootstrapReboot,
        },
        data() {
            return {
                disabled: true,
            }
        },
        computed: {
            ...mapActions(["restoreListItemsA", "refreshListItemsA"]),
           ... mapState(['counterList']),
         },
        watch: {
            counterList(newValue) {
                this.disabled = !!newValue.length
            },
        },
        methods: {
            refreshNumbers: function() {
               this.$store.dispatch("refreshListItemsA")
            },
            restoreNumbers: function () {
                this.$store.dispatch("restoreListItemsA");
            }
        }
    }
</script>

<style scoped>

</style>