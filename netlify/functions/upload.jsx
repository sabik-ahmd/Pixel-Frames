import fetch from "node-fetch";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const body = JSON.parse(event.body);
  const { file } = body;

  const url = `https://api.cloudinary.com/v1_1/${process.env.du52qhm9z}/upload`;

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      file,
      upload_preset: process.env.wedding_upload,
    }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  return { statusCode: 200, body: JSON.stringify(data) };
}
