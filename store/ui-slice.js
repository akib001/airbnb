import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showModal: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        setShowModal(state, action) {
            state.showModal = !action.payload
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;
