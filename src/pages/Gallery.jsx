import React, { useEffect, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/listFiles")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }}>
        {images.map((img) => (
          <img key={img.public_id} src={img.secure_url} alt="" style={{ width: "100%" }} />
        ))}
      </div>
    </div>
  );
}
