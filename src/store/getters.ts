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
    const charId: number | null = state.selectedCharacter;
    if(charId) {
      return state.characters[Number(charId)]!.spellSlots;
    }
    return {first: 0, second: 0};
  },
  selCharData: (state: ProfileState) => {
    const charId: number | null = state.selectedCharacter;
    return state.characters[Number(charId)];
  },
  submitMessage: (state: ProfileState) => {
    return state.selectedCharacter ? 'Update Character' : 'Add Character';
  },
};
