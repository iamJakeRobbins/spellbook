import {ProfileState} from "@/store/storeTypes";

export const getters =  {
  selectedCharacter: (state: ProfileState) => {
    return state.selectedCharacter;
  },
  characters: (state: ProfileState) => {
    return state.characters;
  },
  classes: (state: ProfileState) => {
    return state.classes;
  },
  url: (state: ProfileState) => {
    return state.url;
  },
  spellSlots: (state: ProfileState) => {
    return state.spellSlots;
  },
  selCharData: (state: ProfileState) => {
    const charId: any = state.selectedCharacter;
      return state.characters[charId];
  }
};