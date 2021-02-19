import Vue from 'vue'
import Vuex from 'vuex'
import objectValuesSummery from "../mixins/objectValuesSummery";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counterList: [
            {
                count: 0
            },
            {
                count: 0
            },
            {
                count: 5
            },
            {
                count: 0
            },
            {
                count: 0
            },
        ],
        itemsCount: 0,
    },
    mutations: {
        incrementItem(state, index) {
            state.counterList[index].count++
        },
        decrementItem(state,index) {
            state.counterList[index].count?state.counterList[index].count--: null;
        },
        removeCurrentItem(state,index){
            state.counterList.splice(index,1)
        },
        refreshListItems(state) {
           state.counterList.forEach(item=> {
               item.count = 0;
           });
        },
        restoreListItems(state) {
            state.counterList = [
                {
                    count: 0
                },
                {
                    count: 0
                },
                {
                    count: 0
                },
                {
                    count: 0
                },
                {
                    count: 0
                },
            ];
        },

        getItemsCount(state) {
            state.itemsCount = objectValuesSummery(state.counterList);
        }

    },
    getters: {
        getCounterList(state) {
            return state.counterList
        },
        getCurrentItem(state,index) {
            return state.counterList[index]
        },
        getItemsCount(state){
            return state.itemsCount = objectValuesSummery(state.counterList);
        }
    },
    actions: {
        removeCurrentListA({commit}, index) {
            commit("removeCurrentItem",index);
            commit("getItemsCount");
        },
        restoreListItemsA({commit}){
            commit("restoreListItems");
            commit("getItemsCount");
        },
        refreshListItemsA({commit}) {
            commit("refreshListItems");
            commit("getItemsCount");
        },
        incrementItem({commit},index) {
            commit("incrementItem", index);
            commit("getItemsCount");
        },
        decrementItemA({commit},index) {
            commit("decrementItem", index);
            commit("getItemsCount");
        }
    }
});

export default store;