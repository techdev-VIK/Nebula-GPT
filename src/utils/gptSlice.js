import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false
    },
    reducers:{
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
})


//export the actions
export const {toggleGptSearchView} = gptSlice.actions;


// export reducer
export default gptSlice.reducer;