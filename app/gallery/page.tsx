import { ZoomIn } from 'lucide-react'

export default function Gallery() {
  const galleryItems = [
    {
      src: 'https://images.unsplash.com/photo-1517486804877-be31726a6f29?q=80&w=2070&auto=format&fit=crop',
      alt: 'Community gathering',
      title: 'Community Gathering',
      description: 'Joyful moments from our recent community event.',
    },
    {
      src: 'https://images.unsplash.com/photo-1528605248644-14dd04022c38?q=80&w=2070&auto=format&fit=crop',
      alt: 'Worship service',
      title: 'Sunday Worship',
      description: 'Experiencing the presence of God together.',
    },
    {
      src: 'https://images.unsplash.com/photo-1543966888-7c1dc482a810?q=80&w=2070&auto=format&fit=crop',
      alt: 'Mission trip to Africa',
      title: 'Mission Trip: Africa',
      description: 'Sharing love and hope in local communities.',
    },
    {
      src: 'https://images.unsplash.com/photo-1518057912066-ec1994b706c7?q=80&w=2070&auto=format&fit=crop',
      alt: 'Youth group activity',
      title: 'Youth Fellowship',
      description: 'Fun and faith with our amazing youth.',
    },
    {
      src: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=2070&auto=format&fit=crop',
      alt: 'Baptism ceremony',
      title: 'Baptism Celebration',
      description: 'New beginnings in faith.',
    },
    {
      src: 'https://images.unsplash.com/photo-1501504905252-473c4787d62f?q=80&w=2070&auto=format&fit=crop',
      alt: 'Church building exterior',
      title: 'Our Church Home',
      description: 'A place of worship and community.',
    },
    {
      src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop',
      alt: 'Volunteers serving',
      title: 'Serving Our Neighbors',
      description: 'Making a difference through service.',
    },
    {
      src: 'https://images.unsplash.com/photo-1516246875585-e1d6d7560e9f?q=80&w=2070&auto=format&fit=crop',
      alt: 'Music team leading worship',
      title: 'Worship Team',
      description: 'Leading hearts in praise.',
    },
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-800 text-white">
        <img
          src="/images/hero2.jpg"
          alt="Church interior with people"
          className="w-full h-[50vh] object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Our Gallery</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Moments of worship, community, and celebration from around the globe.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Captured Moments</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-center">{item.title}</h3>
                <p className="text-sm text-center mt-2">{item.description}</p>
                <div className="mt-4">
                  <ZoomIn size={32} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
