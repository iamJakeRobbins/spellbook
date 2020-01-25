import Vue from 'vue';
import Vuex from 'vuex';
import {ProfileState} from "@/store/storeTypes";

Vue.use(Vuex);

interface charactersType {
	name: string,
	level: number,
	description: string,
}

export const state: ProfileState = {
	selectedCharacter: null,
	characters: charactersType = {},
	classes: {},
	url: 'http://localhost:3000',
	spellSlots: {
		first: null,
	},
}

// export default new Vuex.Store({
//
//   state: ProfileState = {
// 		selectedCharacter: null,
// 		characters: charactersType = {},
// 		classes: {},
// 		url: 'http://localhost:3000',
// 		spellSlots: {
// 			first: null,
// 		},
//   },
//   mutations: {
//   	updateCharacters(state, payload) {
//   		payload.forEach((e: any) => {
//   			const keye = e.id;
// 				const ob = {...e};
// 				delete ob['id'];
// 				let stateCharacters: charactersType = state.characters;
// 				state.characters[keye]
// 				 // Object.assign(state.characters,  {key: ob});
// 			})
//
// 		},
//
// 		addCharacters(state: any, payload) {
// 			state.characters = [];
// 			payload.forEach((e: any) => {
// 				const obj: any = {};
// 				Object.keys(e).map((el) => {
// 						obj[el] = e[el];
// 				});
// 				state.characters.push(obj);
// 				});
// 		},
//
// 		updateSelectedCharacter(state: any, payload) {
// 			if (payload) {
// 				if (typeof(payload) !== 'number') {
// 					payload = parseInt(payload, 10);
// 				}
// 				state.selectedCharacter = payload;
// 			} else {
// 				state.selectedCharacter = null;
// 			}
// 		},
//
// 		getClasses(state: any, payload) {
// 			const ob: any = new Object();
// 			payload.forEach((e: any) => {
// 				ob[e.id] = e.description;
// 			});
// 			state.classes = ob;
// 		},
//
// 		syncCharInfo(state: any, payload) {
//
// 		},
//
// 		// TODO needs to expand as spell list expands
// 		syncCharSpellSlots(state: any, payload) {
// 			state.spellSlots.first = payload.first;
// 		},
//   }, // end mutations
//
// 	getters: {
//   	selectedCharacter: (state) => {
//   		return state.selectedCharacter;
// 		},
// 		characters: (state) => {
//   		return state.characters;
// 		},
// 		classes: (state) => {
// 			return state.classes;
// 		},
// 		url: (state) => {
//   		return state.url;
// 		},
// 	},
//   actions: {
//   },
//   modules: {
//   },
// });
