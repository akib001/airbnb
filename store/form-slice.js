import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {
        place: '',
        propertyType: '',
        listingType: '',
        location: {latitude:'', longitude:''},
        address: {street:'', aptSuite:'', city: '', state: '', zipCode: '', country: ''},
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