import { configureStore } from "@reduxjs/toolkit"
import deckReducer from "@/app/features/deck.slice"

export const store = configureStore({
  reducer: {
    deckReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
