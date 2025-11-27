import Image from 'next/image';
import { Heart, Users, Globe, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/church-community.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">About New Breed Bible Church</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl">A worldwide family united by faith, hope, and love.</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            From a small gathering in a living room to a global community of believers, New Breed Bible Church has always been about one thing: sharing the transformative love of Jesus Christ. We are a diverse family of worshippers from every corner of the earth, connected by a shared passion for God and a desire to see His kingdom grow.
          </p>
        </div>
      </section>

      {/* Our Beliefs Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Believe</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Our faith is rooted in the timeless truths of the Bible. We believe in one God, the redemptive work of Jesus Christ, and the empowering presence of the Holy Spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Pastor Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Lead Pastor</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="mt-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden shadow-lg">
              <Image
                src="/images/mcp2.jpg"
                alt="Pastor John Doe"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900">Blessed Dashie (MCP)</h3>
              <p className="text-blue-600 font-semibold">Lead Pastor & General Overseer</p>
              <p className="mt-4 text-gray-700 max-w-2xl">
                Pastor Blessed has dedicated his life to teaching the Word of God with clarity, passion, and a heart for people. With over 20 years in ministry, he founded New Breed Bible Church with a vision to build a church without walls, reaching people across continents with a message of hope and grace. He and his wife, Jane, have three children and a passion for global missions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Values</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8">
              <Heart className="w-12 h-12 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Love God & People</h3>
              <p className="mt-2 text-gray-700">Love is the foundation of all we do.</p>
            </div>
            <div className="p-8">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Bible-Centered</h3>
              <p className="mt-2 text-gray-700">God's Word is our ultimate authority.</p>
            </div>
            <div className="p-8">
              <Users className="w-12 h-12 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Authentic Community</h3>
              <p className="mt-2 text-gray-700">We are better together.</p>
            </div>
            <div className="p-8">
              <Globe className="w-12 h-12 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Global Mission</h3>
              <p className="mt-2 text-gray-700">We are called to reach the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Join Our Global Family</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            No matter where you are in the world, there's a place for you at New Breed Bible Church. Join a service online, connect with a local group, and be part of our growing family.
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300">
            Connect With Us
          </button>
        </div>
      </section>
    </div>
  );
}
