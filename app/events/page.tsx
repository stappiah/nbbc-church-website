import Image from 'next/image';
import { Calendar, MapPin, Clock, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Events() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/events-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Upcoming Events</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl">Join us for life-changing experiences and global connections.</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Connect, Grow, and Serve</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Stay up-to-date with the latest events at New Breed Bible Church. We offer a variety of opportunities to connect with others, grow in your faith, and serve our community, both locally and globally.
          </p>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Events</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Born Fire Camp */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image
                src="/images/file.png"
                alt="Born Fire Camp"
                width={500}
                height={300}
                className="rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900">Born Fire Camp</h3>
              <p className="mt-2 text-gray-700">
                Join us this December for an unforgettable campus meeting filled with dynamic worship, powerful messages, and life-changing encounters.
              </p>
              <div className="mt-4 flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-2" />
                <span>December 2023</span> {/* Update with actual dates */}
              </div>
              <div className="mt-2 flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Campus Location</span> {/* Update with actual location */}
              </div>
              <Link href="/event-details" passHref>
                <p className="mt-auto w-full text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                  Learn More & Register
                </p>
              </Link>
            </div>

            {/* Online Prayer Meetings */}
            <div className="bg-green-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image
                src="/images/online.jpg"
                alt="Online Prayer Meetings"
                width={500}
                height={300}
                className="rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900">Online Prayer Meetings</h3>
              <p className="mt-2 text-gray-700">
                Connect with our global community in powerful online prayer meetings. Experience God's presence and lift up your needs and praises.
              </p>
              <div className="mt-4 flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                <span>Every Wednesday at 7:00 PM (GMT)</span> {/* Update with actual time */}
              </div>
              <div className="mt-2 flex items-center text-gray-600">
                <Globe className="w-5 h-5 mr-2" />
                <span>Online (Global)</span>
              </div>
              <button className="mt-auto w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                Get Link to Join
              </button>
            </div>

            {/* Add more events here */}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Stay Connected</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Join our mailing list to receive updates on upcoming events, special announcements, and opportunities to get involved.
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300">
            Subscribe to Newsletter
          </button>
        </div>
      </section>
    </div>
  );
}
