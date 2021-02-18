import Vue from 'vue'
import Vuex from 'vuex'

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
                count: 0
            },
            {
                count: 0
            },
            {
                count: 0
            },
        ]
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
           })
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
            ]
        }

    },
    getters: {
        getCounterList(state) {
            return state.counterList
        },
        getCurrentItem(state,index) {
            return state.counterList[index]
        }
    },
    actions: {
        removeCurrentListA({commit}, index) {
            commit("removeCurrentItem",index);
        },
        restoreListItemsA({commit}){
            commit("restoreListItems");
        },
        refreshListItemsA({commit}) {
            commit("refreshListItems");
        },
        incrementItem({commit},index) {
            commit("incrementItem", index)
        },
        decrementItemA({commit},index) {
            commit("decrementItem", index)
        }
    }
});

export default store;