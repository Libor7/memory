/** CLASSES */
import Player from "@src/classes/Player";

/** LIBRARIES */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/** MODELS */
import { type IPlayersState } from "@src/models/player";

const initialPlayersState: IPlayersState = {
  players: [],
};

const playersSlice = createSlice({
  name: "players",
  initialState: initialPlayersState,
  reducers: {
    setPlayers: (state, { payload }: PayloadAction<Player[]>) => ({
      ...state,
      players: payload,
    }),
  },
});

export const playersActions = playersSlice.actions;

export default playersSlice.reducer;
