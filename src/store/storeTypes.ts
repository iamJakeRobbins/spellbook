export interface ProfileState {
  selectedCharacter: number;
  characters: CharacterObject;
  classes: object;
  url: string;
  spellSlots: SpellSlotsType;
}

export interface CharacterObject {
  [id:number]: CharactersType | null;
}

interface CharactersType {
  name: string;
  level: number;
  description: string;
  classId: number;
}

interface SpellSlotsType {
  first: number | null;
  second: number | null;
}
