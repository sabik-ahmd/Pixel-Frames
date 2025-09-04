import React, { createContext, useState, useEffect } from "react";

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [files, setFiles] = useState([]);

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  // Fetch all uploaded files from Cloudinary
  const fetchGallery = async () => {
    try {
      const response = await fetch(
        `https://res.cloudinary.com/${cloudName}/image/list/wedding_upload.json`
      );
      const data = await response.json();
      if (data.resources) {
        setFiles(data.resources);
      }
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <GalleryContext.Provider value={{ files, setFiles, fetchGallery }}>
      {children}
    </GalleryContext.Provider>
  );
};
