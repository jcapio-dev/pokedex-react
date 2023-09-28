import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import pokemonData from '../../data/pokedex.ts';
import { Pokemon } from '../../data/types/pokemon.ts';



export interface PokedexState {
  list: Pokemon[]
}

const initialState: PokedexState = {
  list: pokemonData,
}

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<string>) => {
        state.list = pokemonData.filter(pokemon => {
            return pokemon.name.english.toLowerCase().includes(action.payload.toLowerCase()) || pokemon.type.some(type => type.toLowerCase().includes(action.payload.toLowerCase()))
        })
    }
  },
})

// Action creators are generated for each case reducer function
export const { filter } = pokedexSlice.actions

export default pokedexSlice.reducer