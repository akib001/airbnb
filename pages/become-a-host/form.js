import React from 'react';
import Step1 from '../../components/Hosting Form/Step1';

function form() {
  return (
    <div>
      {/* Header Button */}

      {/* Question Component */}
      <Step1 />

      {/* Progress Bar and Buttons*/}
      <div className="w-full bg-white md:w-[50%] fixed bottom-0 md:right-0">
        <div className="w-full h-[2px] bg-[#EBEBEB]">
          <div className="w-[10%] h-[2px] bg-black" />
        </div>

        {/* Buttons */}
        <div className="flex justify-between pl-4 pr-6 py-4">
          <button className="font-semibold underline px-3 py-2 rounded-lg hover:bg-neutral-200">
            Back
          </button>
          <button className="bg-[#222] hover:bg-black text-white font-semibold px-6 py-3 rounded-lg">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default form;
