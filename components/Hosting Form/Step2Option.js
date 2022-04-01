import React from 'react';

function Step2Option({id, name, description}) {
  return (
    <div className='mx-auto max-w-md md:max-w-lg w-full'>
              <input type="radio" name="radio" value={name} id={id} className='hidden peer' />
              <label htmlFor={id} className="border-[1px] border-grey peer-checked:border-black peer-checked:border-2 rounded-xl pl-4 pr-3 py-6 md:space-y-2 md:pr-7 flex flex-col justify-between items-start">
                <div className="text-md md:text-lg md:text font-semibold">{name}</div>
                <div className="inline-block text-sm text-[#717171]">
                  {description}
                </div>
              </label>
    </div>
  )}

export default Step2Option;