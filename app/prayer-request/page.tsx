import { Lock, Send } from 'lucide-react'

export default function PrayerRequest() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-800 text-white">
        <img
          src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=2070&auto=format&fit=crop"
          alt="Hands held in prayer"
          className="w-full h-[50vh] object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Prayer Requests</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Share your prayer needs with us. We are here to stand with you in faith.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="container py-16">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800">Share Your Request</h2>
          <p className="text-center text-gray-600 mt-3">
            Every request is prayed for with compassion and confidentiality by our dedicated prayer team.
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name (optional)
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="request" className="block text-sm font-medium text-gray-700">
                Your Prayer Request
              </label>
              <textarea
                id="request"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3"
                rows={8}
                placeholder="Share what's on your heart..."
              />
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Lock size={20} className="text-gray-400" />
              </div>
              <div className="ml-3 text-sm">
                <p className="text-gray-500">
                  Your request is confidential and will only be shared with our pastoral and prayer team.
                </p>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                <Send size={20} />
                Submit Prayer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
