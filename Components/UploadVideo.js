'use client';

import { CldUploadWidget } from 'next-cloudinary';

export default function UploadVideo() {
  const handleUpload = (result) => {
    console.log('Uploaded:', result.info.secure_url);
    // You can store this URL in your state or database
  };

  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      options={{ resourceType: 'video' }}
      onUpload={handleUpload}
    >
      {({ open }) => (
        <button onClick={() => open()} className="upload-button">
          Upload Video
        </button>
      )}
    </CldUploadWidget>
  );
}
