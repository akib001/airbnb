import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import { useRouter } from 'next/router';

function MenuModal() {
  const modalRef = useRef();
  const router = useRouter();
  const dispatch = useDispatch();

  const stateShowMenuModal = useSelector(
    (state) => state.ui.showMenuModal
  );

  const stateLogginIn = useSelector((state) => state.ui.userToken);

  const closeModal = (e) => {
    // To identify click only occurs at backdrop
    if (modalRef.current === e.target) {
      dispatch(uiActions.setShowMenuModal());
    }
  };

   // if user is already logged in I don't show login popup
   const becomeAHostHandler = () => {
    if(!stateLogginIn) {
      dispatch(uiActions.setShowModal());
    } else {
      router.push('/become-a-host/intro')
    }
  }

  const showLoginModalHandler = () => {
    dispatch(uiActions.setShowMenuModal());
    dispatch(uiActions.setShowModal());
  }


  return (
    stateShowMenuModal && (<section
      onClick={closeModal}
      ref={modalRef}
      className="w-full h-screen fixed z-[60] text-gray-800"
    >
      {/* card */}
      <div className="bg-white shadow-md rounded-xl max-w-xs absolute right-2 top-20">
        

        {/* Info Container */}

        <div className="pl-3 pt-2 pr-2">
          
          <button onClick={showLoginModalHandler} className="pb-2 block border-b hover:border-black hover:border-b-2 text-lg md:text-lg tracking-tight text-gray-900 ">
            Login
          </button>
          <button className="pb-2 block border-b text-lg hover:border-black hover:border-b-2 md:text-lg tracking-tight text-gray-900 ">
            Booked Places
          </button>
          <button onClick={becomeAHostHandler} className="pb-2 block border-b text-lg hover:border-black hover:border-b-2 md:text-lg tracking-tight text-gray-900 ">
            Become a host
          </button>
          <button className="pb-2 block border-b text-lg hover:border-black hover:border-b-2 md:text-lg tracking-tight text-gray-900 ">
            Hosted Places
          </button>
          <button className="pb-2 mb-2 block border-b text-lg hover:border-black hover:border-b-2 md:text-lg tracking-tight text-gray-900 ">
            Logout
          </button>
        </div>

      </div>
    </section>)
  );
}

export default MenuModal;
