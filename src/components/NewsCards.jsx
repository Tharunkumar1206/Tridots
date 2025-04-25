import React from 'react';

const articles = [
  {
    image: '/images/news1.png',
    category: 'HOTSPOTS',
    title: 'Luxury hotspots: 5 most expensive high streets in the..',
  },
  {
    image: '/images/news2.png',
    category: 'AI',
    title: '5 ways to leverage the power of ChatGPT in retail',
  },
  {
    image: '/images/news3.png',
    category: 'SHIPPING',
    title: 'Reliance to open 250 Azorte stores in 2–3 years',
  },
];

export default function NewsCards() {
  return (
    <div className="bg-[#F8F9FA] py-8 px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="flex bg-white rounded-lg shadow-sm overflow-hidden p-4 items-center gap-4 border border-gray-200"
          >
            <img
              src={article.image}
              alt={article.category}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p className="text-red-600 text-xs font-bold uppercase">{article.category}</p>
              <p className="text-sm text-gray-800 font-medium mt-1">{article.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
