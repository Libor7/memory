/** DATA */
import COLOR_SCHEMES from "@src/data/colorSchemes";

export interface ICard {
  flipped: boolean;
  id: number;
  matched: boolean;
  pairId: number;
}

export interface ICardSet {
  active: boolean;
  id: number;
  name: string;
}

export interface ICardSetsState {
  activeCardSet: TCardSetName;
  cardSets: TCardSetName[];
}

export type TCardSetName = keyof typeof COLOR_SCHEMES;
