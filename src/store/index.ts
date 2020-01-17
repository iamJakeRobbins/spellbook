import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
		selectedCharacter: null,
		characters: [] = [],
		classes: new Object,
  },
  mutations: {
		addCharacters(state, payload) {
			payload.forEach(e => {
				let obj = {
					id: e.id,
					name: e.name}
				state.characters.push(obj);
			})
		},
		updateSelectedCharacter(state, payload) {
			if(typeof(payload) !== 'number') {
				payload = parseInt(payload);
			}
			state.selectedCharacter = payload;
		},
		getClasses(state, payload) {
			let ob = new Object;
			payload.forEach((e, i) => {
				ob[e.id] = e.description
			})
			state.classes = ob;
		}
  },
  actions: {
  },
  modules: {
  },
});
