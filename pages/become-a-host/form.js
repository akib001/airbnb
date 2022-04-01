import React, { useState } from 'react';
import Step1 from '../../components/Hosting Form/Step1';
import Step2 from '../../components/Hosting Form/Step2';
import Step3 from '../../components/Hosting Form/Step3';

function form() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    user: {},
    profile: {},
    settings: {}
  });

  const goNextPage = () => {
    setPage((page) => page + 1);
  }

  const updateData = (type, newData) => {
    setData((data) => {
      return { ...data, [type]: newData };
    });
  }

  return (
    <div>
      {/* Header Button */}
      <div className="hidden fixed right-0 md:visible md:flex py-8 mx-12 md:justify-end">
          <button className="rounded-3xl px-4 py-2 text-black bg-neutral-200 text-xs font-semibold hover:bg-neutral-400">
            Exit
          </button>
      </div>
      {/* Question Component */}
      {page === 1 && <Step3 />}
      {/* Progress Bar and Buttons*/}
      <div className="w-full bg-white md:w-[50%] fixed bottom-0 md:right-0">
        <div className="w-full h-[2px] bg-[#EBEBEB]">
          <div className="w-[10%] h-[2px] bg-black"/>
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
