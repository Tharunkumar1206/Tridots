import React from "react";

export default function TopStories() {
  const leadersData = [
    {
      image: "/images/store1.png",
      profile: "/images/Ellipse 1.png",
      title: "Top 5 iconic Apple stores across the world by design",
      description: "From a total of around 522 Apple stores across the world..",
      author: "Arundhati Roy",
    },
    {
      image: "/images/store2.png",
      profile: "/images/Ellipse 2.png",
      title: "Rollercoaster ride of four retail industry IPOs",
      description: "These companies created a lot of hype when they listed on the...",
      author: "Vikram Seth",
    },
    {
      image: "/images/store3.png",
      profile: "/images/Ellipse 3.png",
      title: "Uniqlo India’s Success Mantra: Making headway...",
      description: "Uniqlo, Asia’s largest fashion retailer has managed to hit...",
      author: "Jhumpa Lahiri",
    },
  ];

  const researchData = [
    {
      image: "/images/store4.png",
      title: "Human touchpoint is extremely important for us,",
      tag: "FASHION",
      video: true,
    },
    {
      image: "/images/store5.png",
      title: "US denim brand Lee opens outlets in Sikar, Patna..",
      tag: "BEAUTY",
      video: false,
    },
  ];

  const allCards = [...leadersData, ...researchData];

  return (
    <div className="w-full bg-white px-4 py-8">
      {/* Section Titles */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-6">
        <h2 className="text-xl font-semibold text-gray-800 relative inline-block">
          Leaders Ink
          <span className="block w-6 h-1 bg-red-600 absolute -bottom-1 left-0"></span>
        </h2>
        <h2 className="text-xl font-semibold text-gray-800 relative inline-block">
          Research
          <span className="block w-6 h-1 bg-red-600 absolute"></span>
        </h2>
      </div>

      {/* All Cards Full Width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {allCards.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm flex flex-col rounded-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              {item.video && (
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1">
                  ▶ 5 min
                </div>
              )}
            </div>
            <div className="p-3 flex flex-col flex-grow">
              {item.profile && (
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={item.profile}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <h3 className="text-sm font-semibold leading-tight">{item.title}</h3>
                </div>
              )}
              {!item.profile && (
                <h3 className="text-sm font-semibold leading-tight mb-2">{item.title}</h3>
              )}
              {item.description && (
                <p className="text-xs text-gray-500 mb-2">{item.description}</p>
              )}
              {item.author && (
                <p className="text-xs font-medium text-gray-700">{item.author}</p>
              )}
              {item.tag && (
                <p className="text-xs font-bold text-red-600 mt-auto">{item.tag}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
