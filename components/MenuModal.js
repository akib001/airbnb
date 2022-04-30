import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

function MenuModal() {
  const modalRef = useRef();

  const dispatch = useDispatch();

  const stateShowModalHosting = useSelector(
    (state) => state.ui.showModalHostingDetails
  );

  const stateSearchDetails = useSelector((state) => state.search.searchDetails);

  const closeModal = (e) => {
    // To identify click only occurs at backdrop
    if (modalRef.current === e.target) {
      dispatch(uiActions.setshowModalHostingDetails());
    }
  };

  return (
    <section
      onClick={closeModal}
      ref={modalRef}
      className="w-full h-screen fixed z-[60] text-gray-800"
    >
      {/* card */}
      <div className="bg-white shadow-md rounded-xl max-w-xs absolute right-2 top-20">
        

        {/* Info Container */}

        <div className="pl-3 pt-2 pr-2">
          
          <button className="pb-2 block border-b hover:border-black hover:border-b-2 text-lg md:text-lg tracking-tight text-gray-900 ">
            Login
          </button>
          <button className="pb-2 block border-b text-lg hover:border-black hover:border-b-2 md:text-lg tracking-tight text-gray-900 ">
            Booked Places
          </button>
          <button className="pb-2 block border-b text-lg hover:border-black hover:border-b-2 md:text-lg tracking-tight text-gray-900 ">
            Become a host
          </button>
          <button className="pb-2 block border-b text-lg hover:border-black hover:border-b-2 md:text-lg tracking-tight text-gray-900 ">
            Hosted Places
          </button>
          <button className="pb-2 block border-b text-lg hover:border-black hover:border-b-2 md:text-lg tracking-tight text-gray-900 ">
            Logout
          </button>
        </div>

      </div>
    </section>
  );
}

export default MenuModal;
