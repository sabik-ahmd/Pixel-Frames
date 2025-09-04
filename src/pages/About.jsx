import React from 'react'

export default function About(){
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">About Us</h2>
      <p className="text-gray-300 mb-4">
        Pixel Frame is a small studio specializing in wedding photography, event coverage, and videography. We focus on candid moments, cinematic storytelling, and reliable delivery.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div><strong>Services:</strong> Wedding shoots, Pre-wedding, Candid, Event coverage, Highlights video</div>
          <div><strong>Delivery:</strong> High-resolution images, Edited galleries, Video highlights</div>
          <div><strong>Storage:</strong> We can upload delivered galleries to cloud storage on request.</div>
        </div>

        <div className="space-y-2">
          <div><strong>Owner:</strong> Fayaz </div>
          <div><strong>Email:</strong> sabik.mh@gmail.com</div>
          <div><strong>Phone:</strong> +91 8495044921</div>
        </div>
      </div>
    </section>
  )
}
