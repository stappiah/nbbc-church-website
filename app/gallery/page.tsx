'use client'

import { useState } from 'react'
import { ZoomIn, X } from 'lucide-react'
import { GalleryItem } from '@/components/Types'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const galleryItems: GalleryItem[] = [
    {
      src: '/images/gallery1.jpg',
      alt: 'Community gathering',
      title: 'Community Gathering',
      description: 'Joyful moments from our recent community event.',
    },
    {
      src: '/images/gallery2.jpg',
      alt: 'Worship service',
      title: 'Sunday Worship',
      description: 'Experiencing the presence of God together.',
    },
    {
      src: '/images/gallery3.jpg',
      alt: 'Mission trip to Africa',
      title: 'Mission Trip: Africa',
      description: 'Sharing love and hope in local communities.',
    },
    {
      src: '/images/gallery4.jpg',
      alt: 'Kingdom Partners group',
      title: 'Kingdom Partners',
      description: 'Fun and faith with our amazing partners.',
    },
    {
      src: '/images/gallery5.jpg',
      alt: 'Baptism ceremony',
      title: 'Baptism Celebration',
      description: 'New beginnings in faith.',
    },
    {
      src: '/images/gallery6.jpg',
      alt: 'Church building exterior',
      title: 'Our Church Home',
      description: 'A place of worship and community.',
    },
    {
      src: '/images/gallery9.jpg',
      alt: 'Volunteers serving',
      title: 'Serving Our Neighbors',
      description: 'Making a difference through service.',
    },
    {
      src: '/images/gallery8.jpg',
      alt: 'Music team leading worship',
      title: 'Worship Team',
      description: 'Leading hearts in praise.',
    },
  ]

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-800 text-white">
        <img
          src="/images/hero2.jpg"
          alt="Church interior with people"
          className="w-full h-[50vh] object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Our Gallery</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Moments of worship, community, and celebration from around the globe.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-2">Captured Moments</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>


        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => openModal(item)}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold text-center">{item.title}</h3>
                  <p className="text-sm text-center mt-2">{item.description}</p>
                  <div className="mt-4">
                    <ZoomIn size={32} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full p-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-sm mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
