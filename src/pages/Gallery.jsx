import React, { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";

const Gallery = () => {
  const { files } = useContext(GalleryContext);

  return (
    <div>
      <h1 className="text-2xl mb-6 text-center">Gallery</h1>
      {files.length === 0 ? (
        <p className="text-center">No files uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {files.map((file) => (
            <div
              key={file.public_id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              {file.resource_type === "video" ? (
                <video
                  controls
                  className="w-full h-64 object-cover"
                  src={file.secure_url}
                />
              ) : (
                <img
                  src={file.secure_url}
                  alt="uploaded"
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-2 text-sm text-gray-300 text-center">
                {file.public_id}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
