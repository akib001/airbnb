/* eslint-disable @next/next/no-img-element */
import React from 'react';

function hostingDetails() {
  const data = {
    place: 'Secondary Unit',
    propertyType: 'Serviced apartment',
    listingType: 'A private room',
    location: { latitude: '23.78433474056456', longitude: '90.36918142592657' },
    address: {
      street: '159/A, Road: 10, Adabor',
      aptSuite: '',
      city: 'Dhaka',
      state: '',
      zipCode: '1207',
      country: 'Bangladesh',
    },
    guests: 3,
    beds: 2,
    bathrooms: 1,
    imageUrls: [
      'https://firebasestorage.googleapis.com/v0/b/rent-space-f74e9.appspot.com/o/images%2F2.jpg8db7f3e1-c2f0-46ef-aa55-bdc7f62cec43?alt=media&token=c9df9426-730e-4939-9d04-2cc42063b09e',
    ],
    title: 'A Sweet Place',
    amenitiesArray: ['', 'Hot tub', '', '', 'Fire pit', '', '', '', ''],
    guestFavoritesArray: [
      '',
      '',
      '',
      '',
      'Free parking on premises',
      '',
      '',
      '',
      '',
    ],
    safetyItemsArray: ['', '', 'Carbon monoxide', '', ''],
    description:
      'Hi I am Kalyan singh  , I belong to Cheog , we are Apple farmers by profession and i also run a School in Cheog where we promote sports . i have represented state in Volleyball Championships , My daughter has represented in various national wreslting championships.',
    price: 1200,
  };

  console.log(data.address);

  return (
    <div className="">
        {/* Wrapper */}
      <div className='max-w-full md:max-w-3xl lg:max-w-5xl mx-auto mt-14'>
        <img className='md:rounded-xl object-cover' src={data.imageUrls[0]} alt={data.title} />
        <div className="p-5">
              <h5 className="mb-2 pb-4 text-2xl border-b font-bold tracking-tight text-gray-900 ">
                {data.title}
              </h5>
              <p className="mb-2 pb-4 pt-2 text-xl border-b font-semibold tracking-tight text-gray-900 ">
               {`${data.place} in ${data.address.city}`}
              </p>
              <p className="mb-2 pb-4 pt-2 text-md border-b tracking-tight text-gray-900 ">
               {`${data.guests} guests : ${data.beds} beds : ${data.bathrooms} bathrooms`}
              </p>
              <p className="mb-2 pb-4 pt-2 text-sm border-b tracking-tight text-gray-900 ">
               {data.description}
              </p>
              <div className='mb-2 pb-4 pt-2 text-sm border-b tracking-tight text-gray-900'>
                <p className='text-lg font-semibold'>Aminities</p>
                <p className="text-sm pt-2">
                  {data.amenitiesArray.map((item) => {
                    return ` ${item}`
                  })}
                </p>
              </div>

              <div className='mb-2 pb-4 pt-2 text-sm tracking-tight text-gray-900'>
                <p className='text-lg font-semibold'>Location</p>
                <p className="text-sm pt-2">
                  {data.address.street + ', ' + data.address.city + ', ' + data.address.country }
                </p>
              </div>
          </div>
      </div>
    </div>
  );
}

export default hostingDetails;
