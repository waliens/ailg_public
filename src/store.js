import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  currentUser: null,
  initialized: false
};

const mutations = {
  setInitialized(state) {
    state.initialized = true;
  },

  setCurrentUser(state, user) {
    state.currentUser = user;
  }
};

const actions = {
  async initializeStore({state, commit, dispatch}) {
    if(state.initialized) {
      return;
    }
    commit('setInitialized');
  },
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
});

export default store;
