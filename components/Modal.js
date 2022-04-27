import React, { useRef } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import { signInWithGoogle } from '../Firebase/firebase';
import { useRouter } from 'next/router';

function Modal() {
  const modalRef = useRef();

  const dispatch = useDispatch();
  const router = useRouter();

  const stateShowModal = useSelector((state) => state.ui.showModal);

  const closeModal = (e) => {
    // To identify click only occurs at backdrop
    if (modalRef.current === e.target) {
      dispatch(uiActions.setShowModal());
    }
    console.log(e.target);
  };

  const signInWithGoogleHandler = () => {
    signInWithGoogle()
      .then((result) => {
        dispatch(uiActions.userLogin(result._tokenResponse.idToken));
        dispatch(
          uiActions.setUserProfile({
            name: result._tokenResponse.firstName,
            email: result._tokenResponse.email,
          })
        );
        router.push('/host/homes')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // Background / Backdrop
    stateShowModal && (
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
              onClick={() => dispatch(uiActions.setShowModal())}
              className="hover:bg-gray-100 rounded-full px-3 py-1 font-semibold"
            >
              X
            </button>
            <h1 className="font-bold mx-auto">Log in or sign up</h1>
          </div>

          {/* Login Form */}
          <form>
  <div className="mb-6">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
  </div>
  <div className="mb-6">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
    </div>
    <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

          {/* continue with google */}
          <div className="my-5 mx-6">
            <button
              onClick={signInWithGoogleHandler}
              className="border w-full border-black rounded-md hover:bg-gray-100"
            >
              <div className="flex mx-5 py-2">
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="
                  alt="Google Icon"
                  objectFit="contain"
                  height="12px"
                  width="20px"
                />
                <div className="mx-auto text-md">Continue With Google</div>
              </div>
            </button>
          </div>
        </div>
      </section>
    )
  );
}

export default Modal;
