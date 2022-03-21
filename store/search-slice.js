import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectLocation: {},
}

const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        setSelectLocation(state, action) {
            state.selectLocation = action.payload
        }
    }
})

export const searchActions = searchSlice.actions;
export default searchSlice;