import { ArrowRight, Users, HandHeart, Droplet } from 'lucide-react'
import Link from 'next/link'

export default function JoinUs() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-800 text-white">
        <img
          src="https://images.unsplash.com/photo-1529303770809-f19c4b651a19?q=80&w=2070&auto=format&fit=crop"
          alt="Diverse group of people smiling"
          className="w-full h-[50vh] object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Join Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Ready to take the next step? We’re excited to connect with you and help you grow in your faith.
          </p>
        </div>
      </div>

      {/* Next Steps Section */}
      <div className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Find Your Place</h2>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            Whether you're new to faith or have been a believer for years, there's a place for you in our community. Explore the opportunities below to get involved.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Join a Group */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <div className="p-8">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Join a Group</h3>
              <p className="mt-3 text-gray-600">
                Life is better together. Find a small group where you can build relationships, grow in your faith, and do life with others.
              </p>
            </div>
            <Link href="#" className="block bg-gray-100 p-4 text-center font-semibold text-blue-600 group-hover:bg-blue-50 transition-colors">
              Find a Group <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>

          {/* Card 2: Start Serving */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <div className="p-8">
              <HandHeart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Start Serving</h3>
              <p className="mt-3 text-gray-600">
                Make a difference by using your gifts to serve others. Join a team and be a part of what God is doing in our church and community.
              </p>
            </div>
            <Link href="#" className="block bg-gray-100 p-4 text-center font-semibold text-blue-600 group-hover:bg-blue-50 transition-colors">
              Explore Teams <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>

          {/* Card 3: Get Baptized */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
            <div className="p-8">
              <Droplet className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">Get Baptized</h3>
              <p className="mt-3 text-gray-600">
                Baptism is an outward expression of an inward decision to follow Jesus. Take this important step in your journey of faith.
              </p>
            </div>
            <Link href="#" className="block bg-gray-100 p-4 text-center font-semibold text-blue-600 group-hover:bg-blue-50 transition-colors">
              Learn More <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
