import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  data: {
    place: '',
    propertyType: '',
    listingType: '',
    location: { latitude: '', longitude: '' },
    address: {
      street: '',
      aptSuite: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    },
    guests: 0,
    beds: 0,
    bathrooms: 0,
    imageUrls: [],
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    updateData(state, action) {
      state.data = {
        ...state.data,
        [action.payload.type]: action.payload.newData,
      };
    },

    increaseFn(state, action) {
      if (action.payload === 'guests') {
        state.data.guests++;
      }

      if (action.payload === 'beds') {
        state.data.beds++;
      }

      if (action.payload === 'bathrooms') {
        state.data.bathrooms++;
      }
    },

    decreaseFn(state, action) {
        
      if (action.payload === 'guests') {
        if (state.data.guests > 0) {
          state.data.guests--;
        }
      }

      if (action.payload === 'beds') {
        if (state.data.beds > 0) {
          state.data.beds--;
        }
      }

      if (action.payload === 'bathrooms') {
        if (state.data.bathrooms > 0) {
          state.data.bathrooms--;
        }
      }
    },

    addImageUrlFn(state, action) {
      state.data.imageUrls.push(action.payload);
    }
  },
});

export const formActions = formSlice.actions;
export default formSlice;
