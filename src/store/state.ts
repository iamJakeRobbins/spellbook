import {ProfileState} from "@/store/storeTypes";

export const state: ProfileState = {
  selectedCharacter: 0,
  characters: {
    0: {
      name: '',
      level: 0,
      description: '',
      classId: 0,
    } ,
  },
  classes: {},
  url: 'http://localhost:3000',
  spellSlots: {
    first: null,
    second: null,
  },
};
