import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import PushFile from './pages/PushFile';
import { GalleryProvider } from './context/GalleryContext';

export default function App() {
  return (
    <GalleryProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-900 text-white">
          <header className="bg-black/70 backdrop-blur py-4">
            <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
              <Link to="/" className="text-2xl font-semibold">Pixel Frames</Link>
              <nav className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/gallery" className="hover:underline">Gallery</Link>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
                <Link to="/pushfile" className="hover:underline">PushFile</Link>
              </nav>
            </div>
          </header>

          <main className="max-w-5xl mx-auto px-4 py-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pushfile" element={<PushFile />} />
            </Routes>
          </main>

          <footer className="border-t border-gray-800 py-6 mt-12">
            <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-400">
              © {new Date().getFullYear()} Pixel Frames — Wedding & Event Photography
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </GalleryProvider>
  );
}
