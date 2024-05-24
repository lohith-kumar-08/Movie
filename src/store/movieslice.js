import {createSlice} from '@reduxjs/toolkit'

const movieslice=createSlice({
    name:'movies',
    initialState:[],
    reducers:{
        addmovies(state,action){
            return action.payload;
        }
    }
})

export const movieactions=movieslice.actions;

export default movieslice;