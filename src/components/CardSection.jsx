import React from 'react';

export default function CardsSection() {
  return (
    <div className="mt-8">
      {/* Heading with red line */}
      <div className="mb-6 px-6">
        <h2 className="text-xl font-semibold text-gray-800 inline-block">Food and Beverages</h2>
        <span className="block w-[1cm] h-[2px] bg-red-600 mt-2"></span>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-4 justify-center">
        {[ 
          { image: '/images/fnp.png', title: 'Fashion brand icons: Shailesh Chaturvedi' },
          { image: '/images/burger.png', title: 'DLF creating new retail space in Delhi' },
          { image: '/images/truck.png', title: 'PE firm Carlyle offloads entire stake' },
          { image: '/images/store.png', title: 'How AI is enhancing stores' },
          { image: '/images/coffee.png', title: 'Shilpa Shetty invests in KsaanKonnnect' }
        ].map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] lg:w-[18%] rounded-lg bg-white shadow hover:shadow-md transition-shadow duration-200"
          >
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-t-lg" />
            <p className="p-2 text-sm text-gray-700 font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
