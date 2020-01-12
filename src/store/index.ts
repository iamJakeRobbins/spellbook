import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
		selectedCharacter: null,
		characters: [] = [],
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
  },
  actions: {
  },
  modules: {
  },
});
