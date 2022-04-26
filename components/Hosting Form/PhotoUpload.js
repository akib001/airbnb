import React from 'react';
import { useState, useEffect } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from 'firebase/storage';
import { storage } from '../../Firebase/firebase';
import { v4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import {formActions} from '../../store/form-slice';

function PhotoUpload() {
  const dispatch = useDispatch();
  const [imageUpload, setImageUpload] = useState(null);
  const stateImageUrls = useSelector((state) => state.form.data.imageUrls);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        dispatch(formActions.addImageUrlFn(url));
      });
    });
  };

  return (
    <section className="flex flex-col md:flex-row min-h-fit md:h-screen gradient-background md:bg-white">
      {/* Gradient Background with Question */}
      <div className="min-h-[50vh] flex flex-col justify-end md:justify-center md:h-screen w-full md:w-[50%] overflow-hidden relative">
        <h1 className="text-[26px] md:text-5xl font-semibold text-white mb-8 mt-12 mr-6 md:mb-0 ml-6 md:ml-14 md:mr-20 shadow-sm">
          Next, let's add some photos of your place
        </h1>
      </div>

      {/* Option Container */}
      <div className="bg-white text-[#222] min-h-fit pb-36 md:min-h-full w-full md:w-[50%] rounded-t-2xl md:rounded-none flex flex-col justify-center md:my-auto">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {stateImageUrls.map((url) => {
        return <img key={url} src={url} />;
      })}
      </div>
    </section>
  );
}

export default PhotoUpload;