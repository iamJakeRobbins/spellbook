import {ProfileState} from "@/store/storeTypes";

export const state: ProfileState = {
  selectedCharacter: 0,
  characters: {
    id: null,
  },
  classes: {},
  url: 'http://localhost:3000',
  spellSlots: {
    first: null,
    second: null,
  },
};
