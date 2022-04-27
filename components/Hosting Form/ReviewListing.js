import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {formActions} from '../../store/form-slice';

function ReviewListing() {
    const dispatch = useDispatch();
    const stateData = useSelector((state) => state.form.data);


  return (
    <section className="flex flex-col md:flex-row min-h-fit md:h-screen gradient-background md:bg-white">
      {/* Gradient Background with Question */}
      <div className="min-h-[50vh] flex flex-col justify-end md:justify-center md:h-screen w-full md:w-[50%] overflow-hidden relative">
        <h1 className="text-[26px] md:text-5xl font-semibold text-white mb-8 mt-12 mr-6 md:mb-0 ml-6 md:ml-14 md:mr-20 shadow-sm">
         Please review your listing one more time
        </h1>
      </div>

      {/* Option Container */}
      <div className="bg-white  text-[#222] min-h-fit pb-36 md:min-h-full w-full md:w-[50%] rounded-t-2xl md:rounded-none flex flex-col justify-center md:my-auto">
       {stateData}
      </div>
    </section>
  );
}

export default ReviewListing;