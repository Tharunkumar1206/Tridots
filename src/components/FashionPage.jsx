import React from "react";

const FashionPage = () => {
  const fashionItems = [
    {
      title: "What makes Fila unique is its attitude and...",
      subtitle: "The singer-songwriter has been spotted in the hybrid garment...",
      tag: "FASHION | FOOD",
      image: "/images/f1.png",
      time: "1 min",
    },
    {
      title: "French Connection announces Siddhant Chaturvedi as ..",
      subtitle: "The singer-songwriter has been spotted in the hybrid garment...",
      tag: "SIDDHANT | FASHION",
      image: "/images/f2.png",
      time: "1 min",
    },
    {
      title: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
      subtitle: "The Gucci loafer has been a signature style for 70 years.",
      tag: "SHAILESH | FASHION",
      image: "/images/f3.png",
      time: "1 min",
    },
    {
      title: "Indian fashion retailers to witness revenue ...",
      subtitle: "The singer-songwriter has been spotted in the hybrid garment...",
      tag: "FASHION | RETAILERS",
      image: "/images/f4.png",
      time: "1 min",
    },
    {
      title: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
      subtitle: "BTS attended the 2022 Grammy Awards in complementary ...",
      tag: "LIFESTYLE | FASHION",
      image: "/images/f5.png",
      time: "1 min",
    },
    {
      title: "Zouk marries heritage with functionality",
      subtitle: "The singer-songwriter has been spotted in the hybrid garment...",
      tag: "FASHION | ZOUK",
      image: "/images/f6.png",
      time: "1 min",
    },
  ];

  const beautyItems = [
    {
      tag: "BEAUTY | NEWS",
      title: "Sugar Cosmetics unveils its 200th brand-owned store",
      image: "/images/p1.png",
    },
    {
      tag: "WELLNESS | NEWS",
      title: "Athiya Shetty becomes the face of Just Herbs’...",
      image: "/images/p2.png",
    },
    {
      tag: "WELLNESS | NEWS",
      title: "Indian stars dazzle at Cannes 2023",
      image: "/images/p3.png",
    },
    {
      tag: "BEAUTY | NEWS",
      title: "Recode Studios to expand footprint with 5 store...",
      image: "/images/p4.png",
    },
    {
      tag: "BEAUTY | NEWS",
      title: "Recode Studios to expand footprint with 5 store...",
      image: "/images/p5.png",
    },
  ];

  return (
    <div className="bg-white w-[97%] mx-auto p-4">
      {/* Heading container */}
      <div className="flex justify-start items-start mb-6">
        {/* Fashion & Lifestyle heading */}
        <div className="flex flex-col items-start w-1/2">
          <h2 className="text-lg font-bold text-left">Fashion & Lifestyle</h2>
          <span className="block w-10 h-1 bg-red-600 mt-2"></span>
        </div>

        {/* Beauty & Wellness heading */}
        <div className="flex flex-col items-start w-1/2 ml-auto">
          <h2 className="text-lg font-bold text-left">Beauty & Wellness</h2>
          <span className="block w-10 h-1 bg-red-600 mt-2"></span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - Fashion Items */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {fashionItems.map((item, index) => (
            <div key={index} className="flex flex-col bg-white shadow-sm">
              {/* Image and Text in Row Layout */}
              <div className="flex">
                <img src={item.image} alt="fashion" className="rounded-l-lg h-36 w-1/3 object-cover" />
                <div className="p-4 flex flex-col justify-between">
                  <div className="text-red-500 text-sm font-semibold">{item.tag}</div>
                  <h2 className="text-gray-800 font-semibold mt-2">{item.title}</h2>
                  <p className="text-gray-600 text-sm mt-1">{item.subtitle}</p>
                  <div className="text-gray-400 text-xs mt-2">{item.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Beauty Items */}
        <div className="w-full lg:w-[350px]">
          <div className="flex flex-col gap-4">
            {beautyItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <img src={item.image} alt="beauty" className="w-20 h-20 object-cover rounded" />
                <div>
                  <div className="text-red-500 text-xs font-semibold">{item.tag}</div>
                  <h3 className="text-gray-800 text-sm font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionPage;
