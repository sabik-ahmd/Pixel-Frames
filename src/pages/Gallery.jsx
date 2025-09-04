import React, { useEffect, useState } from "react";

export default function Gallery() {
  const [files, setFiles] = useState([]);

  // Fetch gallery from Cloudinary
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(
          `https://res.cloudinary.com/du52qhm9z/image/list/wedding_upload.json`
        );
        const data = await res.json();
        if (data.resources) {
          setFiles(data.resources);
        }
      } catch (err) {
        console.error("Error fetching gallery:", err);
      }
    };
    fetchGallery();
  }, []);

  // Delete file
  const handleDelete = async (publicId) => {
    try {
      const res = await fetch("/.netlify/functions/delete", {
        method: "POST",
        body: JSON.stringify({ publicId }),
      });
      const data = await res.json();

      if (data.success) {
        setFiles(files.filter((file) => file.public_id !== publicId));
      } else {
        alert("Delete failed");
      }
    } catch (err) {
      console.error("Error deleting:", err);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {files.map((file) => (
        <div key={file.public_id} className="relative">
          {file.format === "mp4" ? (
            <video
              src={file.secure_url}
              controls
              className="rounded-lg w-full"
            />
          ) : (
            <img
              src={file.secure_url}
              alt="Uploaded"
              className="rounded-lg w-full"
            />
          )}

          {/* Delete button */}
          <button
            onClick={() => handleDelete(file.public_id)}
            className="absolute top-2 right-2 bg-red-500 px-3 py-1 text-sm rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
