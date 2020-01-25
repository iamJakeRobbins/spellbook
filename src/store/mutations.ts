import {ProfileState} from "@/store/storeTypes";

export const mutations= {
  updateCharacters(state: ProfileState, payload: any) {
    payload.forEach((e: any) => {
      let ob = {
        [e.id]: e,
      };
      Object.assign(state.characters, ob)
    })
  },
  updateSelectedCharacter(state: ProfileState, payload: any) {
    if (payload) {
      if (typeof(payload) !== 'number') {
        payload = parseInt(payload, 10);
      }
      state.selectedCharacter = payload;
    } else {
      state.selectedCharacter = null;
    }
  },

  getClasses(state: ProfileState, payload: any) {
    const ob: any = new Object();
    payload.forEach((e: any) => {
      ob[e.id] = e.description;
    });
    state.classes = ob;
  },

  syncCharInfo(state: ProfileState, payload: any) {

  },

  // TODO needs to expand as spell list expands
  syncCharSpellSlots(state: ProfileState, payload: any) {
    state.spellSlots.first = payload.first;
  },
};