import { DeckInterface } from "@/interface"
import { createSlice } from "@reduxjs/toolkit"

const initialState: DeckInterface = {
  title: "",
  description: "",
  things: [],
}

const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    startSelectedGame: (state, action) => {
      state.title = action.payload.title
      state.description = action.payload.description
      state.things = action.payload.things
    },
    attemptedQuestions: (state, action) => {
      state.things.push(...action.payload)
    },
  },
})

export const { startSelectedGame, attemptedQuestions } = deckSlice.actions
export default deckSlice.reducer
