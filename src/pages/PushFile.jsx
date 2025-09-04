import React, { useState } from "react";

export default function PushFile() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const res = await fetch("/.netlify/functions/upload", {
        method: "POST",
        body: JSON.stringify({ file: reader.result }),
      });
      const data = await res.json();
      alert("Uploaded successfully!");
      console.log(data);
    };
  };

  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
