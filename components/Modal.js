import React from 'react'

function Modal() {
  return (
    // Background
    <section className='w-full h-screen fixed z-[60] bg-black bg-opacity-30 flex justify-center items-center'>
      {/* card */}
        <div className='bg-white p-4 shadow-md rounded-lg'>
          I am a Modal
        </div>
    </section>
  )
}

export default Modal