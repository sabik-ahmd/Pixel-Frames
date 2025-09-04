import fetch from "node-fetch";

export async function handler() {
  const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`;

  const auth = Buffer.from(
    `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
  ).toString("base64");

  const res = await fetch(url, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  const data = await res.json();
  return { statusCode: 200, body: JSON.stringify(data.resources) };
}
