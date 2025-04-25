import React from 'react';

export default function HeroSection() {
  return (
    <div className="w-full bg-white px-4 py-8">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b-2 border-red-600 inline-block">
        Web Specials
      </h2>

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        {/* Feature */}
        <div className="lg:w-1/3 relative overflow-hidden rounded-lg">
          <img
            src="/images/rahul.png"
            alt="Rahul Gandhi"
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-4">
            <h3 className="text-lg text-white font-bold leading-snug">
              Rahul Gandhi In Manipur: Chopper Ride After Women Protesters Surround Car
            </h3>
            <p className="text-sm text-gray-300 mt-1">Rahul Gandhi</p>
          </div>
        </div>

        {/* Bullets */}
        <div className="lg:w-1/3 flex flex-col justify-center border-l border-gray-300 pl-6">
          <ul className="space-y-4 text-sm text-gray-800 list-none">
            {[
              'B2B managed marketplace The Yarn',
              'Sequoia Capital exits Go Fashion',
              'New investment in food tech',
              'Retail-tech partnerships growing',
              'Top brands expanding Tier 2/3 cities',
              'Emerging trends in shopping malls',
            ].map((text, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0"></span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Ad Section */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <div className="text-center text-xs text-gray-400 mb-2">- Advertisement -</div>
          <div className="w-full h-[300px] overflow-hidden">
            <img
              src="/images/ad_banner.png"
              alt="Ad"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Divider Row */}
      <div className="flex flex-wrap border-t border-gray-300 divide-x divide-gray-300 text-sm text-gray-800">
        {[
          'B2B managed marketplace The Yarn',
          'Sequoia Capital exits Go Fashion',
          'B2B managed marketplace The Yarn',
          'Sequoia Capital exits Go Fashion',
        ].map((text, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-3 w-full sm:w-1/2 lg:w-1/4"
          >
            <span className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0"></span>
            <p>{text}</p>
          </div>
        ))}
      </div>

      {/* Cards Section */}
      <div className="mt-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { image: '/images/fnp.png', title: 'Fashion brand icons: Shailesh Chaturvedi' },
            { image: '/images/burger.png', title: 'DLF creating new retail space in Delhi' },
            { image: '/images/truck.png', title: 'PE firm Carlyle offloads entire stake' },
            { image: '/images/store.png', title: 'How AI is enhancing stores' },
            { image: '/images/coffee.png', title: 'Shilpa Shetty invests in KsaanKonnnect' },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[18%] rounded-lg bg-white shadow hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <p className="p-2 text-sm text-gray-700 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="mt-4 bg-white p-4 shadow-sm">
        {/* Trending Header */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3 relative inline-block">
          Trending
          <span className="block w-6 h-1 bg-red-600 absolute -bottom-1 left-0"></span>
        </h2>

        {/* Trending Tags */}
        <div className="flex flex-wrap items-center gap-1 mt-2">
          {[
            'Rahul Gandhi In Manipur',
            'Meta',
            'E-Commerce',
            'Fashion',
            'Live Cricket Score',
            'Adipurush',
            'Sushant Singh Rajput death Case',
            'Myntra Launches',
            'E-Commerce',
            'Live Cricket Score',
          ].map((tag, index) => (
            <button
              key={index}
              className="border border-gray-400 px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              {tag}
            </button>
          ))}

          {/* Arrows */}
          <div className="flex items-center gap-2 ml-2">
            <button className="border border-gray-400 p-2 hover:bg-gray-100">
              &lt;
            </button>
            <button className="border border-gray-400 p-2 hover:bg-gray-100">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
