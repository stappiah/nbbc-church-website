import Image from 'next/image';
import { Calendar, Clock, MapPin, User, Tag, Share2 } from 'lucide-react';

export default function EventDetails() {
  return (
    <div className="bg-white text-gray-800">
      {/* Event Header */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/fire-camp-banner.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        <div className="container mx-auto px-6 relative h-full flex flex-col justify-end pb-12 text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Born Fire Camp 2025</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">An unforgettable weekend of faith, fellowship, and fire.</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details & Registration */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">About the Event</h2>
            <p className="mt-4 text-lg text-gray-700">
              Born Fire Camp is our flagship annual gathering for youth and young adults from across our global campuses. It's a powerful weekend dedicated to spiritual renewal, deep connection, and equipping the next generation of leaders. Join us for dynamic worship sessions under the stars, impactful teachings from guest speakers, and unforgettable moments of fellowship around the bonfire.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Whether you are seeking a breakthrough, looking to make lifelong friends, or wanting to deepen your relationship with God, this camp is for you. Prepare to be transformed!
            </p>

            {/* Schedule */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">Event Schedule</h3>
              <ul className="mt-4 border-l-2 border-blue-500 pl-6 space-y-6">
                <li>
                  <h4 className="font-semibold">Day 1: Arrival & Opening Night</h4>
                  <p className="text-gray-600">Check-in, opening worship session, and bonfire fellowship.</p>
                </li>
                <li>
                  <h4 className="font-semibold">Day 2: Workshops & Main Session</h4>
                  <p className="text-gray-600">Morning workshops, afternoon activities, and a powerful evening service.</p>
                </li>
                <li>
                  <h4 className="font-semibold">Day 3: Closing & Commissioning</h4>
                  <p className="text-gray-600">Final worship, commissioning prayer, and departure.</p>
                </li>
              </ul>
            </div>

            {/* Speakers */}
            <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900">Guest Speakers</h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Speaker 1 */}
                    <div className="flex items-center gap-4">
                        <Image src="/images/mcp2.jpg" alt="Speaker 1" width={80} height={80} className="rounded-full" />
                        <div>
                            <h4 className="font-bold">Pastor Blessed Dashie</h4>
                            <p className="text-sm text-gray-600">Host & Lead Pastor</p>
                        </div>
                    </div>
                     {/* Speaker 2 */}
                     <div className="flex items-center gap-4">
                        <Image src="/images/apostle.jpg" alt="Speaker 2" width={80} height={80} className="rounded-full" />
                        <div>
                            <h4 className="font-bold">Guest Minister</h4>
                            <p className="text-sm text-gray-600">Apostle Joshua Selman</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg sticky top-8">
              <button className="w-full px-6 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Register Now
              </button>
              <ul className="mt-8 space-y-4 text-gray-700">
                <li className="flex items-center">
                  <Calendar className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <span className="font-semibold">Date:</span> December 15-17, 2023
                  </div>
                </li>
                <li className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <span className="font-semibold">Time:</span> Starts 6:00 PM Friday
                  </div>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <span className="font-semibold">Location:</span> Anagkazo Bible College
                  </div>
                </li>
                <li className="flex items-center">
                  <Tag className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <span className="font-semibold">Cost:</span> Free Admission
                  </div>
                </li>
              </ul>
              <div className="mt-8 border-t pt-6 text-center">
                <h4 className="font-semibold">Share this event!</h4>
                <div className="flex justify-center gap-4 mt-3">
                    <Share2 className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                    {/* Add links for social sharing */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
