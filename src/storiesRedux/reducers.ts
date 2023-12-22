import { PayloadAction, createSlice } from "@reduxjs/toolkit";



const initialState = {
  basket: [],
  favorites: [],
};

interface TState {
  basket: any[],
  favorites: any[]
}



export const usersSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProdutcOfBasket: (state: TState, action: PayloadAction<any[] | null>)=>{
      state.basket = action.payload || []
    },
    setProdutcOfFavorites: (state: TState, action: PayloadAction<any[] | null>)=>{
      state.favorites = action.payload || []
    },
    
    addProductBasket: (state: TState, action: PayloadAction<unknown>) => {
      state.basket = [...state.basket, action.payload];
    },
    removeProductBasket: (state: TState, action: PayloadAction<string | string []>) => {
      let result = action.payload
      state.basket = state.basket.filter(product => product.id !== result);
    },

    addProductFavorite: (state: TState, action: PayloadAction<unknown>) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeProductFavorite: (state: TState, action: PayloadAction<string | string []>) => {
      let result = action.payload
      state.favorites = state.favorites.filter(product => product.id !== result);
    },
  }
});


export const { addProductBasket, removeProductBasket, addProductFavorite, removeProductFavorite, setProdutcOfBasket, setProdutcOfFavorites } = usersSlice.actions;
export default usersSlice.reducer; 