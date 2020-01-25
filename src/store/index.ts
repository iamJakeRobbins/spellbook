import Vue from 'vue';
import Vuex from 'vuex';
import {state} from "@/store/state";
import {mutations} from "@/store/mutations";
import {getters} from "@/store/getters";

Vue.use(Vuex);

export default new Vuex.Store({
	state,
  mutations,
	getters,
  actions: {
  },
  modules: {
  },
});
