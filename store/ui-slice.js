import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
  showModalHostingDetails: false,
  userToken: '',
  userLoggedIn: false,
  userName: '',
  userEmail: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    setShowModal(state) {
      state.showModal = !state.showModal;
    },

    setshowModalHostingDetails(state) {
      state.showModalHostingDetails = !state.showModalHostingDetails;
    },

    retriveUserData(state, action) {
        state.userToken = action.payload.userToken;
        state.userName = action.payload.userName;
        state.userEmail = action.payload.userEmail;
    },

    isUserLoggedIn(state) {
      state.userLoggedIn = !!state.userToken;
    },

    userLogin(state, action) {
      state.userToken = action.payload;
      localStorage.setItem('userToken', state.userToken);
    },

    userLogout(state) {
      state.userToken = '';
      localStorage.removeItem('userToken');

      state.userName = '';
      state.userEmail = '';
    },

    setUserProfile(state, action) {
      state.userName = action.payload.name;
      state.userEmail = action.payload.email;
      localStorage.setItem('userName', state.userName);
      localStorage.setItem('userEmail', state.userEmail);
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
