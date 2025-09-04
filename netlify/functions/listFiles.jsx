import fetch from "node-fetch";

export async function handler() {
  const url = `https://api.cloudinary.com/v1_1/${process.env.du52qhm9z}/resources/image`;

  const auth = Buffer.from(
    `${process.env.613888884572576}:${process.env.*********************************}`
  ).toString("base64");

  const res = await fetch(url, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  const data = await res.json();
  return { statusCode: 200, body: JSON.stringify(data.resources) };
}
