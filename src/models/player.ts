/** CLASSES */
import Player from "@src/classes/Player";

export interface IPlayer {
  id: number;
  score: number;
}

export interface IPlayersState {
  players: Player[];
}
