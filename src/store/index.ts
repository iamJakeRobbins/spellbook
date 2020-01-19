import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
		selectedCharacter: null,
		characters: [] = [],
		classes: new Object(),
  },
  mutations: {
		addCharacters(state: any, payload) {
			state.characters = [];
			payload.forEach((e: any) => {
				const obj: any = new Object();
				Object.keys(e).map((el) => {
						obj[el] = e[el];
				});
				state.characters.push(obj);
				});
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
  },
  actions: {
  },
  modules: {
  },
});
