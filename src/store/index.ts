import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
		characters:[] = [],
  },
  mutations: {
		addCharacters(state, payload) {
			payload.forEach(e => {
				state.characters.push(e.name);
			})
		},
  },
  actions: {
  },
  modules: {
  },
});
