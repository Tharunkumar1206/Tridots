import React from 'react';

export default function Header() {
  return (
    <div className="bg-white text-black p-6">
      <div className="max-w-7xl mt-2 w-3/4 flex flex-col lg:flex-row gap-8 justify-start">
        {/* Left Section */}
        <div className="lg:w-3/4 space-y-6">
          {/* Featured News */}
          <div className="relative rounded overflow-hidden">
            <img src="/images/rahul.png" alt="Rahul Gandhi" className="w-full h-80 object-cover rounded" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">IN FOCUS</span>
              <h2 className="text-xl font-bold mt-2 text-white">Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car</h2>
              <p className="text-sm text-gray-300">Rahul Gandhi</p>
            </div>
          </div>

          {/* More Stories */}
          <div className="space-y-4">
            {/* Individual story card */}
            {[{
              image: '/images/momo.png',
              category: 'SELECT CITYWALK',
              title: 'Wow! Momo Foods enters Bhopal with Wow!',
            },
            {
              image: '/images/kfc.png',
              category: 'FOOD & BEVERAGE',
              title: 'KFC opens another outlet in Punjab',
            },
            {
              image: '/images/fnp.png',
              category: 'SELECT CITYWALK',
              title: 'FNP (Ferns N Petals) appoints Ashish Goel',
            }
            ].map((story, index) => (
              <div key={index} className="flex items-start gap-4 border-b border-gray-200 pb-4">
                <img src={story.image} alt={story.title} className="w-28 h-20 object-cover rounded" />
                <div>
                  <p className="text-xs font-bold text-red-600 uppercase">{story.category}</p>
                  <p className="text-sm font-medium text-gray-800">{story.title}</p>
                  <p className="text-xs text-gray-500 mt-1">#reel stories podcast</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Latest News */}
        <div className="lg:w-1/4 space-y-6">
          <h3 className="text-lg font-semibold border-b border-red-600 inline-block pb-1">Latest News</h3>
          {[{
            image: '/images/archies.png',
            title: 'Unwrapping the Archies’ reinvention plan',
          },
          {
            image: '/images/ai_store.png',
            title: 'How AI is enhancing stores, How AI is enhancing stores',
          },
          {
            title: 'These companies created a lot of hype when they listed on the...',
          },
          {
            title: 'These companies created a lot of hype when they listed on the...',
          }
          ].map((item, idx) => (
            <div key={idx} className="space-y-2 border-b border-gray-200 pb-4">
              {item.image && (
                <img src={item.image} alt="News" className="w-full h-36 object-cover rounded" />
              )}
              <p className="text-sm font-medium text-gray-700">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
