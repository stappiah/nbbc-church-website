import { Download, Search } from 'lucide-react'
import Link from 'next/link'

export default function Sermons() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-800 text-white">
        <img
          src="/images/hero-image.jpg"
          alt="Church congregation"
          className="w-full h-[50vh] object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Sermons</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Listen to past sermons and discover thoughtful teaching from our global community.
          </p>
        </div>
      </div>

      <div className="container py-16">
        {/* Sermon Archive */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">All Sermons</h2>
            <div className="relative mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Search sermons..."
                className="border rounded-lg py-2 px-4 pl-10 w-full md:w-64"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder sermon cards */}
            {[
              {
                series: 'The Good News',
                title: 'Living in Grace',
                pastor: 'Pastor John',
                date: '20 Nov 2025',
                summary: 'A brief summary of the sermon to entice the listener.',
                slug: 'sermon-details',
              },
              {
                series: 'The Good News',
                title: 'Walking in Faith',
                pastor: 'Pastor Sarah',
                date: '13 Nov 2025',
                summary: 'A brief summary of the sermon to entice the listener.',
                slug: 'walking-in-faith',
              },
              {
                series: 'Foundations',
                title: 'The Power of Prayer',
                pastor: 'Pastor David',
                date: '6 Nov 2025',
                summary: 'A brief summary of the sermon to entice the listener.',
                slug: 'the-power-of-prayer',
              },
              // Add more sermon objects here
            ].map((sermon) => (
              <Link key={sermon.slug} href={`/${sermon.slug}`} className="block group">
                <div className="p-6 bg-white rounded-lg shadow-md group-hover:shadow-xl transition-shadow h-full">
                  <p className="text-sm text-gray-500">{sermon.series}</p>
                  <h4 className="font-semibold text-xl mt-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {sermon.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {sermon.pastor} — {sermon.date}
                  </p>
                  <p className="mt-3 text-gray-600 text-sm">{sermon.summary}</p>
                  <div className="flex items-center gap-2 mt-4 text-blue-600 font-semibold">
                    <Download size={18} />
                    <span>Download Audio</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
