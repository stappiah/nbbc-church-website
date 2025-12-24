'use client'

import { useState } from 'react'
import { Quote, PlusCircle, X } from 'lucide-react'
import Link from 'next/link'

export default function Testimonies() {
  const [selectedTestimony, setSelectedTestimony] = useState<any>(null)
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)

  const testimonyData = [
    {
      name: 'Maria S.',
      location: 'São Paulo, Brazil',
      quote: "God's faithfulness has been my anchor in the storm.",
      storySnippet:
        'For months, I was facing uncertainty in my career and family life. Through the online services and the small group I joined, I found a community that prayed with me. God opened new doors, and my family has never been stronger...',
      fullStory:
        "For months, I was facing uncertainty in my career and family life. Through the online services and the small group I joined, I found a community that prayed with me. God opened new doors, and my family has never been stronger. The teachings helped me anchor my faith, and the support from my group was a direct answer to my prayers. I'm so grateful for this global family and how God used them to remind me of His constant presence and faithfulness.",
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
      slug: 'maria-s-story',
    },
    {
      name: 'David O.',
      location: 'Lagos, Nigeria',
      quote: 'I experienced healing that I never thought was possible.',
      storySnippet:
        'I was diagnosed with a chronic illness, and the doctors gave me little hope. The church community rallied around me, and we prayed for a miracle. My latest medical reports show a remarkable recovery that has left my doctors amazed...',
      fullStory:
        'I was diagnosed with a chronic illness, and the doctors gave me little hope. The church community rallied around me, and we prayed for a miracle. My latest medical reports show a remarkable recovery that has left my doctors amazed. This journey has been more than just physical healing; it has been a profound spiritual renewal. My faith is stronger than ever, and I now know that with God, nothing is impossible. I thank my church family for standing with me.',
      image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1976&auto=format&fit=crop',
      slug: 'david-o-story',
    },
    {
      name: 'Chloe L.',
      location: 'Seoul, South Korea',
      quote: 'Finding this community felt like coming home.',
      storySnippet:
        "Moving to a new city was lonely. I stumbled upon this church online and decided to join a virtual group. The warmth and genuine love I received were overwhelming. I've built lifelong friendships and have grown so much in my faith...",
      fullStory:
        "Moving to a new city was lonely. I stumbled upon this church online and decided to join a virtual group. The warmth and genuine love I received were overwhelming. I've built lifelong friendships and have grown so much in my faith. It's more than just a Sunday service; it's a family that spans continents. I finally feel like I belong, and I'm excited to see how God will use me in this community.",
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
      slug: 'chloe-l-story',
    },
  ]

  return (
    <>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gray-800 text-white">
          <img
            src="https://images.unsplash.com/photo-1507692049790-de58668c0945?q=80&w=2070&auto=format&fit=crop"
            alt="People sharing stories"
            className="w-full h-[50vh] object-cover opacity-25"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold">Stories of Faith</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Be encouraged by what God is doing in the lives of people around the world.
            </p>
          </div>
        </div>

        {/* Testimonies Grid */}
        <div className="container py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonyData.map((testimony) => (
              <div key={testimony.slug} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <img src={testimony.image} alt={testimony.name} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <Quote className="h-8 w-8 text-blue-500 mb-4" />
                  <blockquote className="text-xl font-semibold text-gray-800 italic">
                    {testimony.quote}
                  </blockquote>
                  <p className="mt-4 text-gray-600 flex-grow">{testimony.storySnippet}</p>
                  <div className="mt-6">
                    <p className="font-bold text-gray-900">{testimony.name}</p>
                    <p className="text-sm text-gray-500">{testimony.location}</p>
                  </div>
                  <button
                    onClick={() => setSelectedTestimony(testimony)}
                    className="mt-6 text-blue-600 font-semibold hover:underline text-left"
                  >
                    Read Full Story
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Your Story CTA */}
        <div className="bg-white">
          <div className="container py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Do You Have a Story to Share?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Your story could be the encouragement someone else needs to hear. Let us know how God has been at work in your life.
            </p>
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="mt-8 inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              <PlusCircle size={22} />
              Share Your Testimony
            </button>
          </div>
        </div>
      </div>

      {/* Testimony Modal */}
      {selectedTestimony && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedTestimony(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={() => setSelectedTestimony(null)}
              className="sticky top-4 right-4 float-right text-gray-500 hover:text-gray-800 z-10 bg-white rounded-full p-1"
            >
              <X size={24} />
            </button>
            <img src={selectedTestimony.image} alt={selectedTestimony.name} className="w-full h-64 object-cover" />
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800">{selectedTestimony.name}</h2>
              <p className="text-md text-gray-500 mb-4">{selectedTestimony.location}</p>
              <p className="text-gray-700 whitespace-pre-wrap">{selectedTestimony.fullStory}</p>
            </div>
          </div>
        </div>
      )}

      {/* Share Testimony Modal */}
      {isShareModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setIsShareModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setIsShareModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Share Your Story</h2>
            <p className="text-gray-600 mb-6">We're so excited to hear what God has done in your life. Please fill out the form below.</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="share-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="share-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2" />
              </div>
              <div>
                <label htmlFor="share-location" className="block text-sm font-medium text-gray-700">Location</label>
                <input type="text" id="share-location" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2" />
              </div>
              <div>
                <label htmlFor="share-email" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                <input type="tel" id="share-email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2" />
              </div>
              <div>
                <label htmlFor="share-story" className="block text-sm font-medium text-gray-700">Your Testimony</label>
                <textarea id="share-story" rows={6} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2" placeholder="Describe what God has done..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold">Submit My Story</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
