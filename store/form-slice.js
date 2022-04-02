import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {
        place: '',
        propertyType: '',
        listingType: ''
    },
}

const formSlice = createSlice({
    name: 'form',
    initialState: initialState,
    reducers: {
        updateData(state, action) {
            state.data = { ...state.data, [action.payload.type]: action.payload.newData}
        }
    }
})

export const formActions = formSlice.actions;
export default formSlice;