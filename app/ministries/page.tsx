import Image from "next/image";
import {
  Handshake,
  Users,
  Church,
  Heart,
  Lightbulb,
  Music,
  Globe,
} from "lucide-react";

export default function Ministries() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/ministries-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Our Global Ministries
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl">
              Serving God and humanity across continents with love and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            A Place for Everyone to Serve
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            At New Breed Bible Church, we believe that every member is a
            minister. Our diverse ministries provide opportunities for you to
            grow in your faith, use your gifts, and make a tangible difference
            in the lives of others, both locally and globally.
          </p>
        </div>
      </section>

      {/* Featured Ministries Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Key Ministries
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kingdom Partners Ministry */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <Handshake className="w-16 h-16 text-blue-700 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                Kingdom Partners Ministry
              </h3>
              <p className="mt-4 text-gray-700">
                Our Kingdom Partners are vital to extending the reach of the
                Gospel worldwide. This ministry connects individuals and
                organizations who share our vision, providing resources and
                support for global missions, church planting, and community
                development initiatives in underserved regions. Join us in
                making a lasting impact for Christ.
              </p>
            </div>

            {/* Model Church (Youth Ministry) */}
            <div className="bg-green-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <Church className="w-16 h-16 text-green-700 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                Model Church
              </h3>
              <p className="mt-4 text-gray-700">
                "Model Church" is our vibrant ministry dedicated to empowering
                the next generation of leaders and disciples. Through dynamic
                worship, relevant teaching, and engaging community events, we
                equip young people and young adults to live out their faith
                boldly, discover their purpose, and become models of Christ-like
                character in their schools, workplaces, and communities.
              </p>
            </div>

            {/* Children's Ministry */}
            <div className="bg-yellow-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <Heart className="w-16 h-16 text-yellow-700 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                Children's Ministry
              </h3>
              <p className="mt-4 text-gray-700">
                We provide a safe, fun, and nurturing environment where children
                can learn about God's love through age-appropriate lessons,
                creative activities, and engaging worship. Our dedicated team is
                passionate about planting seeds of faith in young hearts.
              </p>
            </div>

            {/* Worship Ministry */}
            <div className="bg-purple-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <Music className="w-16 h-16 text-purple-700 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                Worship Ministry
              </h3>
              <p className="mt-4 text-gray-700">
                Our Worship Ministry leads the congregation into the presence of
                God through music, song, and creative arts. We seek to cultivate
                an atmosphere of heartfelt praise and adoration, inviting
                everyone to experience the joy and power of worship.
              </p>
            </div>

            {/* Community Outreach */}
            <div className="bg-red-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <Globe className="w-16 h-16 text-red-700 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                Global Outreach & Missions
              </h3>
              <p className="mt-4 text-gray-700">
                Driven by the Great Commission, our Global Outreach Ministry is
                committed to spreading the Gospel and demonstrating Christ's
                love through humanitarian aid, evangelism, and church planting
                efforts in various nations.
              </p>
            </div>

            {/* Discipleship & Education */}
            <div className="bg-indigo-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <Lightbulb className="w-16 h-16 text-indigo-700 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                Discipleship & Education
              </h3>
              <p className="mt-4 text-gray-700">
                We are dedicated to spiritual growth through Bible studies,
                small groups, and educational programs for all ages. Our goal is
                to equip believers with a deeper understanding of God's Word and
                how to apply it to daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Find Your Place to Serve
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Whether you're passionate about teaching children, leading worship,
            supporting global missions, or connecting with young adults, there's
            a ministry for you to thrive in and contribute to God's kingdom.
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300">
            Explore Opportunities
          </button>
        </div>
      </section>
    </div>
  );
}
