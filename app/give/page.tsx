'use client'

import { useState } from 'react'
import { HandHeart, Landmark, Mail, X } from 'lucide-react'

export default function Give() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gray-800 text-white">
          <img
            src="/images/give.jpg"
            alt="Hands offering support"
            className="w-full h-[50vh] object-cover opacity-30"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold">Partner With Us</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Your generosity fuels our mission to share love and hope across the globe.
            </p>
          </div>
        </div>

        {/* Giving Section */}
        <div className="container py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Giving Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Give Online</h2>
              <div className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Choose an amount</label>
                  <div className="grid grid-cols-3 gap-4">
                    <button className="p-3 border rounded-md text-center hover:bg-gray-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">GHS 50</button>
                    <button className="p-3 border rounded-md text-center hover:bg-gray-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">GHS 100</button>
                    <button className="p-3 border rounded-md text-center hover:bg-gray-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">GHS 250</button>
                  </div>
                  <input
                    type="number"
                    placeholder="Or enter a custom amount"
                    className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3"
                  />
                </div>
                {/* Frequency */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
                  <div className="flex gap-4">
                    <button className="flex-1 p-3 bg-blue-600 text-white rounded-md">One-Time</button>
                    <button className="flex-1 p-3 border rounded-md hover:bg-gray-100">Monthly</button>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold">
                  Give Securely
                </button>
              </div>
            </div>

            {/* Kingdom Partners & Other Ways to Give */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <HandHeart className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800">Become a Kingdom Partner</h3>
                <p className="mt-3 text-gray-600">
                  Kingdom Partners are a dedicated group of givers who commit to supporting our global vision through consistent, planned giving.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors font-semibold"
                >
                  I want to be a Partner
                </button>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Other Ways to Give</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Landmark className="h-6 w-6 text-blue-500" />
                    <p className="text-gray-600">Bank Transfer or Zelle</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-blue-500" />
                    <p className="text-gray-600">By Mail (Cheque)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kingdom Partner Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Become a Kingdom Partner</h2>
            <p className="text-gray-600 mb-6">Thank you for your interest! Please fill out the form below, and our team will be in touch with you shortly.</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="partner-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="partner-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2" />
              </div>
              <div>
                <label htmlFor="partner-email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="partner-email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-2" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
