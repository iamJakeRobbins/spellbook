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
				let obj = {
					id: e.id,
					name: e.name}
				state.characters.push(obj);
			})
		},
  },
  actions: {
  },
  modules: {
  },
});
