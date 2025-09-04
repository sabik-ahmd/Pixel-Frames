import React, { useState } from "react";

export default function PushFile() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "wedding_upload"); // ✅ your preset

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/du52qhm9z/auto/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();

      if (data.secure_url) {
        alert("Upload successful! Go to Gallery page to see it.");
      }
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Upload Photos & Videos</h2>
      <input
        type="file"
        accept="image/*,video/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 px-4 py-2 rounded-lg"
      >
        Upload
      </button>
    </div>
  );
}
