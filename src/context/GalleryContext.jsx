import React, { createContext, useState } from "react";

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (url, type) => {
    setItems((prev) => [...prev, { url, type }]);
  };

  return (
    <GalleryContext.Provider value={{ items, addItem }}>
      {children}
    </GalleryContext.Provider>
  );
};
