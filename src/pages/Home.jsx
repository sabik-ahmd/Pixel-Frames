import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Capture your perfect moments</h1>
          <p className="text-gray-300 mb-6">
            Professional wedding & event photography and videography. We store and organize your photos and videos, deliver galleries, and provide full event coverage.
          </p>
          <div className="space-x-3">
            <Link to="/gallery" className="inline-block px-5 py-2 bg-pink-600 rounded">View Gallery</Link>
            <Link to="/contact" className="inline-block px-5 py-2 border border-gray-700 rounded">Get in touch</Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-tr from-pink-600 to-indigo-600 p-8">
          <div className="h-64 flex items-center justify-center">
            <img 
              src="logo.jpg"   // replace with your image path
              alt="Hero"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
