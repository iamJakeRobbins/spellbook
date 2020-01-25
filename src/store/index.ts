import Vue from 'vue';
import Vuex from 'vuex';
import {state} from "@/store/state";

Vue.use(Vuex);

export default new Vuex.Store({
	state: state,
  mutations: {
  	updateCharacters(state, payload) {
  		payload.forEach((e: any) => {
				let ob = {
					[e.id]: e,
				};
				Object.assign(state.characters, ob)
			})
		},
		updateSelectedCharacter(state: any, payload) {
			if (payload) {
				if (typeof(payload) !== 'number') {
					payload = parseInt(payload, 10);
				}
				state.selectedCharacter = payload;
			} else {
				state.selectedCharacter = null;
			}
		},

		getClasses(state: any, payload) {
			const ob: any = new Object();
			payload.forEach((e: any) => {
				ob[e.id] = e.description;
			});
			state.classes = ob;
		},

		syncCharInfo(state: any, payload) {

		},

		// TODO needs to expand as spell list expands
		syncCharSpellSlots(state: any, payload) {
			state.spellSlots.first = payload.first;
		},
  }, // end mutations

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
