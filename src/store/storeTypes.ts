export interface ProfileState {
  selectedCharacter: number | null;
  characters: CharacterObject;
  classes: object;
  url: string;
}

export interface CharacterObject {
  [id: number]: CharactersType | null;
}

export interface CharactersType {
  name: string;
  level: number;
  description: string;
  classId: number;
  spellSlots: SpellSlotsType
}

interface SpellSlotsType {
  first: number | null;
  second: number | null;
}
