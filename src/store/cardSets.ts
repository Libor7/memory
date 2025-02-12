/** DATA */
import COLOR_SCHEMES from "@src/data/colorSchemes";
import { DEFAULT_CARD_SET_INDEX } from "@src/data/constants";

/** LIBRARIES */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/** MODELS */
import type { ICardSetsState, TCardSetName } from "@src/models/card";

const initialCardSetsState: ICardSetsState = {
  activeCardSet: Object.keys(COLOR_SCHEMES)[DEFAULT_CARD_SET_INDEX] as TCardSetName,
  cardSets: Object.keys(COLOR_SCHEMES) as TCardSetName[],
};

const cardSetsSlice = createSlice({
  name: "cardSets",
  initialState: initialCardSetsState,
  reducers: {
    setActiveCardSet: (state, { payload }: PayloadAction<TCardSetName>) => ({
      ...state,
      activeCardSet: payload,
    }),
  },
});

export const cardSetsActions = cardSetsSlice.actions;

export default cardSetsSlice.reducer;
