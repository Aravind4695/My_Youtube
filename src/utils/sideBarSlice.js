import { createSlice } from '@reduxjs/toolkit'

const initialState = { isMenuOpen: true }

const sideBarSlice = createSlice({
    name: 'sideBarSlice',
    initialState,
    reducers: {
      toggleMenu:(state)=> {
        state.isMenuOpen = !state.isMenuOpen
      },
      closeMenu:(state)=>{
        state.isMenuOpen = false;
      }
    },
  });

  export const {toggleMenu,closeMenu} = sideBarSlice.actions;
  export  default sideBarSlice.reducer;