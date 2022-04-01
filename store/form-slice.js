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
        setData(state, action) {
            state.data = {...state.data, [action.type]: action.newData}
        }
    }
})

export const formActions = formSlice.actions;
export default formSlice;