import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Film, Users, Calendar } from 'lucide-react';

export default function Home() {
  const heroBackground = '/images/hero2.jpg'; // Path to your background image

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-screen w-full flex items-center justify-center"
        style={{
          backgroundImage: `url('${heroBackground}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // subtle scroll effect
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-black/50 via-black/30 to-black/50 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center justify-center h-full">
          
          {/* Highlight Tag */}
          <div className="inline-flex items-center gap-3 mb-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="rounded-full bg-yellow-100 text-yellow-700 px-3 py-1 text-sm font-semibold">New</span>
            <span className="text-sm text-white/90">Sundays • Family friendly • All are welcome</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight text-white">
            Experience God's Grace
            <br />
            <span className="inline-block bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Find Your Community
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg md:text-xl max-w-2xl text-white/90">
            Welcome to Grace Life Church — a warm, inviting community where faith, service, and relationships grow together. Join us this Sunday!
          </p>

          {/* Call-to-Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-6 py-3 rounded-full bg-yellow-500 text-white font-semibold shadow-lg hover:bg-yellow-400 transition"
            >
              I'm New Here
            </Link>

            <Link
              href="/sermons"
              className="px-6 py-3 rounded-full bg-white/20 text-white font-semibold backdrop-blur-sm shadow-lg hover:bg-white/30 transition flex items-center justify-center gap-2"
            >
              Watch Sermons
              <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Next Service Info */}
          <p className="mt-6 text-sm text-white/80">
            <strong>Next Service:</strong> Sunday at 9:00 & 11:00 AM — drop by or plan your visit.
          </p>

        </div>
      </section>


      {/* I'm New Section */}
      <section className="container py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 grid md:grid-cols-2 items-center gap-8">
          <div>
            <h2 className="text-3xl font-display font-semibold text-brand-deep">Planning a Visit?</h2>
            <p className="mt-4 text-gray-600">
              We can't wait to meet you! Attending a new church for the first time can be daunting. We want to make your visit as smooth and welcoming as possible. Let us know you're coming, and we'll have a special gift waiting for you.
            </p>
            <div className="mt-6">
              <Link href="/visit" className="btn btn-primary">
                Plan Your Visit
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg text-brand-deep">Worship Service Times</h3>
            <p className="text-5xl font-display font-bold text-yellow-500 mt-2">9:00 <span className="text-3xl">&</span> 11:00 AM</p>
            <p className="mt-2 text-gray-500">Every Sunday</p>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-brand-deep">Get Involved</h2>
            <p className="mt-4 text-gray-600">
              There are many ways to connect and grow at Grace Life. Whether you're looking to join a small group, serve the community, or attend an event, there's a place for you here.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="inline-block p-4 bg-yellow-100 text-yellow-500 rounded-full">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="mt-4 font-semibold text-xl text-brand-deep">Join a Group</h3>
              <p className="text-sm text-gray-600 mt-2">Find meaningful relationships and grow in your faith by joining one of our small groups for all ages.</p>
              <Link href="/ministries" className="mt-4 inline-block text-sm font-semibold text-yellow-500 hover:text-yellow-600">
                Find a Group <span className="group-hover:ml-1 transition-all">→</span>
              </Link>
            </div>
            <div className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="inline-block p-4 bg-yellow-100 text-yellow-500 rounded-full">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="mt-4 font-semibold text-xl text-brand-deep">Upcoming Events</h3>
              <p className="text-sm text-gray-600 mt-2">Stay up-to-date with all the latest events, from community outreaches to special worship nights.</p>
              <Link href="/events" className="mt-4 inline-block text-sm font-semibold text-yellow-500 hover:text-yellow-600">
                View Events <span className="group-hover:ml-1 transition-all">→</span>
              </Link>
            </div>
            <div className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="inline-block p-4 bg-yellow-100 text-yellow-500 rounded-full">
                <Film className="w-8 h-8" />
              </div>
              <h3 className="mt-4 font-semibold text-xl text-brand-deep">Latest Sermon</h3>
              <p className="text-sm text-gray-600 mt-2">Catch up on our most recent message and explore our archive of past sermons.</p>
              <Link href="/sermons" className="mt-4 inline-block text-sm font-semibold text-yellow-500 hover:text-yellow-600">
                Watch Now <span className="group-hover:ml-1 transition-all">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermon Section */}
      <section className="container py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Sermon Video Placeholder</p>
          </div>
          <div>
            <h2 className="text-3xl font-display font-semibold text-brand-deep">The Power of Forgiveness</h2>
            <p className="mt-4 text-gray-600">Join Pastor John as he explores the transformative power of forgiveness and how it can free us to live a life of grace and peace. This is a message you won't want to miss.</p>
            <Link href="/sermons" className="btn btn-outline mt-6">
              View All Sermons
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
