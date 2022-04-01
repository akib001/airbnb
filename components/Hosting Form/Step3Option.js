import React from 'react';

function Step3Option({id, name}) {
  return (
    <div className='mx-auto max-w-md md:max-w-lg w-full'>
              <input type="radio" name="radio" value={name} id={id} className='hidden peer' />
              <label htmlFor={id} className="border-[1px] peer-checked:border-black peer-checked:border-2 peer-checked:m-[-1px] hover:border-black hover:border-2 hover:m-[-1px] transition-all rounded-xl pl-4 pr-3 py-6 md:py-8 md:pr-7 flex flex-col justify-between items-start">
                <div className="text-md md:text-lg md:text font-semibold">{name}</div>
              </label>
    </div>
  )}

export default Step3Option;