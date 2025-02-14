/** MODELS */
import { type IPlayer } from "@src/models/player";

class Player implements IPlayer {
  id: number;
  name: string;
  score: number;

  constructor(id: number, name?: string) {
    this.id = id;
    this.name = name ?? `Player ${id}`;
    this.score = 0;
  }
}

export default Player;
