import React from 'react';

export default function TrendingNews() {
  const categories = [
    {
      title: 'Retail With Rasul',
      videos: [
        { thumbnail: '/images/p1.png', caption: 'Senco Gold IPO subscribed 69% on first day of subscription' },
        { thumbnail: '/images/p4.png', caption: 'India D2C Summit & Awards 2023 Trailblazing Brands and Professionals' },
      ],
    },
    {
      title: 'The Store',
      videos: [
        { thumbnail: '/images/p2.png', caption: 'Fastrack Smart onboards Ranveer Singh as brand ambassador' },
        { thumbnail: '/images/p5.png', caption: 'Planet Fashion by ABFRL opens 2 outlets in Mumbai' },
      ],
    },
    {
      title: 'IR Studio',
      videos: [
        { thumbnail: '/images/p3.png', caption: 'Zoca Cafe launches outlet in Bengaluru' },
        { thumbnail: '/images/p6.png', caption: 'Unwrapping the Archies’ reinvention plan' },
      ],
    },
  ];

  return (
    <div className="w-full bg-gray-900 px-6 py-10">
      {/* Header with See More */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white relative inline-block">
          IR Video Wall
          <span className="block w-6 h-1 bg-red-600 absolute -bottom-1 left-0"></span>
        </h2>
        <button className="px-5 py-2 border border-white text-white text-sm uppercase hover:bg-white hover:text-black transition">
          See More
        </button>
      </div>

      {/* Content */}
      <div className="flex gap-8">
        {/* Main Video */}
        <div className="w-1/2 relative">
          <img
            src="/images/p0.png"
            alt="Reebok opens store at Lulu Mall, Lucknow"
            className="w-full h-[400px] object-cover"
          />
          {/* <p className="text-white text-lg font-semibold mt-4">
            Reebok opens store at Lulu Mall, Lucknow
          </p> */}
        </div>

        {/* Category Videos */}
        <div className="w-1/2 flex gap-6">
          {categories.map((category, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h3 className="text-white text-lg font-semibold relative inline-block">
                {category.title}
                <span className="block w-4 h-1 bg-red-600 absolute -bottom-1 left-0"></span>
              </h3>
              {category.videos.map((video, index) => (
                <div key={index} className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.caption}
                    className="w-full h-36"
                  />
                  <p className="text-white text-xs mt-1">{video.caption}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
