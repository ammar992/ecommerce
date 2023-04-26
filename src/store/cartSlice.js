


import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItem:[]
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state,action) => {
      const newItem = action.payload;
      const existItem = state.cartItem.find((item)=>item.slug===newItem.slug);
      const cartItem = existItem?state.cartItem.map((item)=>{
        item.name === existItem.name ?newItem:item;
      }):[...state.cartItem,newItem];
      return {...state,cartItem:{...state.cartItem,newItem}}
    },
    remove: (state,action) => {
      state = state.filter((item)=>item.slug!==action.payload);
    },
  },
})

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;