import { Mails, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-800 text-white">
        <img
          src="https://images.unsplash.com/photo-1555982189-478f94ca1eb4?q=80&w=2070&auto=format&fit=crop"
          alt="People connecting"
          className="w-full h-[50vh] object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            We'd love to hear from you! Reach out with any questions, prayer requests, or feedback.
          </p>
        </div>
      </div>

      {/* Contact Form and Details */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3"
                ></textarea>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-600">
                <MapPin className="h-5 w-5 text-blue-500" /> 123 Church Street, Cityville
              </p>
              <p className="flex items-center gap-3 text-gray-600">
                <Phone className="h-5 w-5 text-blue-500" /> (123) 456-7890
              </p>
              <p className="flex items-center gap-3 text-gray-600">
                <Mails className="h-5 w-5 text-blue-500" /> hello@ourchurch.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
