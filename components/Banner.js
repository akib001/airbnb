import React from 'react';
import Image from 'next/image';
import  { useRouter } from 'next/router';
import { uiActions } from '../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

function Banner() {
  const router = useRouter(); 
  const dispatch = useDispatch();

  const stateLoggedIn = useSelector((state) => state.ui.token);

  const becomeAHostHandler = () => {
    if(!stateLoggedIn) {
      dispatch(uiActions.setShowModal());
    } else {
      router.push('/become-a-host/Intro')
    }
  }

  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/rent-space-f74e9.appspot.com/o/images%2Fbanner.pngbad2d7d0-d33e-4d29-af91-ae9deb4cfc13?alt=media&token=aebb3103-1ebe-420c-a1dc-61c929ea564f"
        layout="fill"
        objectfit="cover"
        alt="cover"
      />
      {/* Make parrent relative and it's content obsolute to position item */}
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg mb-6">.</p>
        <button onClick={becomeAHostHandler} className="text-purple-500 bg-white px-6 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          Become a Host
        </button>
      </div>
    </div>
  );
}


export default Banner;
