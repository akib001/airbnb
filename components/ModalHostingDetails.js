import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

function ModalHostingDetails() {
  const modalRef = useRef();
  
  const dispatch = useDispatch();

  const stateShowModalHosting = useSelector(
    (state) => state.ui.showModalHostingDetails
  );

  const closeModal = (e) => {
    // To identify click only occurs at backdrop
    if (modalRef.current === e.target) {
      dispatch(uiActions.setshowModalHostingDetails());
    }
  };

  return (
    // Background / Backdrop
    stateShowModalHosting && (
      <section
        onClick={closeModal}
        ref={modalRef}
        className="w-full h-screen fixed z-[60] text-gray-800 bg-black bg-opacity-30 flex justify-center items-center"
      >
        {/* card */}
        <div className="bg-white shadow-md rounded-xl w-full md:max-w-xl">
          <div className="flex border-b-[1px] py-3 pl-4 pr-8">
            <button
              // closeModal
              onClick={() => dispatch(uiActions.setshowModalHostingDetails())}
              className="hover:bg-gray-100 rounded-full px-3 py-1 font-semibold"
            >
              X
            </button>
            <h1 className="font-bold mx-auto">Confirm Booking</h1>
          </div>
          <div className="my-5 mx-6">
            <button className="border w-full border-black rounded-md hover:bg-gray-100">
              Confirm
            </button>
          </div>
        </div>
      </section>
    )
  );
}

export default ModalHostingDetails;
