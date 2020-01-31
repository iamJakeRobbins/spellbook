import {ProfileState} from "@/store/storeTypes";

export const state: ProfileState = {
  selectedCharacter: null,
  characters: {},
  classes: {},
  url: 'http://localhost:3000',
  spellSlots: {
    first: null,
    second: null,
  },
};
