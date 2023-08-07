import { configureStore } from '@reduxjs/toolkit'
import sideBarSlice from './sideBarSlice'
export const store = configureStore({ reducer: sideBarSlice })

