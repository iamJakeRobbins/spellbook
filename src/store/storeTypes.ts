export interface ProfileState {
  selectedCharacter: number | null;
  characters: CharacterObject;
  classes: object;
  url: string;
  spellSlots: SpellSlotsType;
}

export interface CharacterObject {
  id: CharactersType | null;
}

interface CharactersType {
  name: string;
  level: number;
  description: string;
}

interface SpellSlotsType {
  first: number | null;
  second: number | null;
}
