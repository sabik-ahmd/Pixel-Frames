// netlify/functions/delete.js
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "du52qhm9z",          // ✅ your cloud name
  api_key: process.env.CLOUDINARY_KEY,     // set in Netlify dashboard
  api_secret: process.env.CLOUDINARY_SECRET // set in Netlify dashboard
});

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { publicId } = JSON.parse(event.body);

    if (!publicId) {
      return { statusCode: 400, body: "publicId is required" };
    }

    // delete from Cloudinary
    const result = await cloudinary.v2.uploader.destroy(publicId);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, result }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
