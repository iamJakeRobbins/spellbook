import Vue from 'vue';
import Vuex from 'vuex';
import {state} from "@/store/state";
import {mutations} from "@/store/mutations";

Vue.use(Vuex);

export default new Vuex.Store({
	state,
  mutations,

	getters: {
  	selectedCharacter: (state) => {
  		return state.selectedCharacter;
		},
		characters: (state) => {
  		return state.characters;
		},
		classes: (state) => {
			return state.classes;
		},
		url: (state) => {
  		return state.url;
		},
	},
  actions: {
  },
  modules: {
  },
});
