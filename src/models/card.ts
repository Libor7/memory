export interface ICard {
  flipped: boolean;
  id: number;
  matched: boolean;
  pairId: number;
}

export interface ICardSet {
  active: boolean;
  label: string;
  name: string;
}
