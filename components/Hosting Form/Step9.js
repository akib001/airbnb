import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formActions } from '../../store/form-slice';
import { amenitiesData } from './CheckboxItems';

function Step9() {
  const dispatch = useDispatch();
  const stateAmenitiesArray = useSelector(
    (state) => state.form.data.amenitiesArray
  );

  const handleAmenitiesOnChange = (e, position) => {
    const aminitiesValue = e.target.value;
    const updatedAmenitiesArray = stateAmenitiesArray.map((item, index) => {
        return (index === position ? ((item === '') ? aminitiesValue : '') : item)
    }
    );
    dispatch(formActions.addAmenitiesArray(updatedAmenitiesArray));
  };

  return (
    <section className="flex flex-col md:flex-row min-h-fit md:h-screen gradient-background md:bg-white">
      {/* Gradient Background with Question */}
      <div className="min-h-[50vh] flex flex-col justify-end md:justify-center md:h-screen w-full md:w-[50%] overflow-hidden relative">
        <h1 className="text-[26px] md:text-5xl font-semibold text-white mb-9 mt-12 mr-6 md:mb-0 ml-6 md:ml-14 md:mr-20 shadow-sm">
          Let guests know what your place has to offer
        </h1>
      </div>

      {/* Option Container */}
      <div className="bg-white  text-[#222] min-h-fit pb-36 md:min-h-full w-full md:w-[50%] rounded-t-2xl md:rounded-none flex flex-col justify-center md:my-auto">
        <div className="mx-auto max-w-lg md:max-w-lg 2xl:max-w-xl w-full my-12 px-9 md:px-12">
          {/* Aminities */}
          <p>Do you have any standout amenities?</p>
          <div className="flex">
            {amenitiesData.map((name, index) => {
              return (
                <div key={index} className="flex items-center mr-4">
                  <input
                    id={name}
                    name={name}
                    type="checkbox"
                    value={name}
                    checked={stateAmenitiesArray[index]}
                    onChange={(e) => handleAmenitiesOnChange(e, index)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={name}
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {name}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Step9;
