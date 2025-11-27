import { Download, Paperclip, MessageSquare, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// This function will fetch the sermon data based on the slug
// For now, it returns placeholder data
async function getSermon(slug: string) {
  // In a real app, you would fetch this from a CMS or database
  return {
    series: 'The Good News',
    title: 'Living in Grace',
    pastor: 'Pastor John',
    date: '20 Nov 2025',
    summary:
      'This sermon explores the profound depths of God\'s grace and how it empowers us to live a life of freedom and purpose. Discover how grace is not just a one-time gift but a continuous source of strength and transformation in our daily walk with Christ.',
    scriptures: ['Ephesians 2:8-9', '2 Corinthians 12:9', 'Titus 2:11-12'],
    discussionQuestions: [
      'How has God\'s grace impacted your life personally?',
      'In which areas of your life do you find it difficult to accept or extend grace?',
      'How can we, as a community, better demonstrate the grace of God to the world around us?',
    ],
    slug: 'living-in-grace',
    // Example direct video URL and poster image
    videoUrl: '/images/video.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1593949995396-d7b3543ab13a?q=80&w=1974&auto=format&fit=crop',
  }
}

export default async function SermonDetail({ params }: { params: { slug: string } }) {
  const sermon = await getSermon(params.slug)

  return (
    <div className="bg-gray-50">
      {/* Sermon Trailer and Header */}
      <div className="relative bg-gray-900">
        {/* The video tag is used here for the sermon trailer */}
        <video
          className="w-full max-h-[500px] object-contain"
          controls
          src={sermon.videoUrl}
          poster={sermon.posterUrl}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back to Sermons Link */}
          <Link href="/sermons" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6">
            <ArrowLeft size={18} />
            <span>Back to All Sermons</span>
          </Link>

          {/* Sermon Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-md text-blue-600 font-semibold">{sermon.series}</p>
            <h1 className="text-4xl font-bold mt-2 text-gray-800">{sermon.title}</h1>
            <p className="text-lg text-gray-500 mt-2">
              {sermon.pastor} — {sermon.date}
            </p>

            <div className="mt-6 border-t pt-6">
              <button className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                <Download size={24} />
                <span>Download Full Audio</span>
              </button>
            </div>

            <div className="mt-8 prose max-w-none">
              <p>{sermon.summary}</p>
            </div>

            {/* Deeper Engagement Section */}
            <div className="mt-10 border-t pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Key Scriptures */}
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-700">
                    <Paperclip size={22} />
                    Key Scriptures
                  </h3>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
                    {sermon.scriptures.map((scripture) => (
                      <li key={scripture}>{scripture}</li>
                    ))}
                  </ul>
                </div>
                {/* Discussion Questions */}
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-700">
                    <MessageSquare size={22} />
                    Discussion Questions
                  </h3>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
                    {sermon.discussionQuestions.map((question) => (
                      <li key={question}>{question}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}