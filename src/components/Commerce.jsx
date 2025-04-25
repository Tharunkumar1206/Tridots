import React from "react";

const Commerce = () => {
  const sections = [
    {
      title: "E-Commerce",
      posts: [
        {
          image: "/images/c1.png",
          category: "FASHION",
          author: "TAYLOR SWIFT",
          title: "Why retailers can’t afford to ignore composable",
          description: "Composable commerce opens new avenues for brands to thrive...",
          hashtag: "#fashion",
        },
        {
          image: "/images/c2.png",
          category: "FASHION",
          author: "TAYLOR SWIFT",
          title: "ONDC has completely automated grievance",
          description: "ONDC is also enabling an online resolution mechanism apart...",
          hashtag: "#fashion",
        },
        {
          image: "/images/c3.png",
          category: "FASHION",
          author: "TAYLOR SWIFT",
          title: "Shiprocket seller app integrates with ONDC",
          description: "Shiprocket plans to enable five key categories on ONDC...",
          hashtag: "#lifestyle",
        },
      ],
    },
    {
      title: "People",
      posts: [
        {
          image: "/images/c4.png",
          category: "FASHION",
          author: "TAYLOR SWIFT",
          title: "Fashion brand icons: Shailesh Chaturvedi of Arvind Fashions",
          description: "IndiaRetailing brings you a series in which we highlight...",
          hashtag: "#fashion",
        },
        {
          image: "/images/c5.png",
          category: "FASHION",
          author: "TAYLOR SWIFT",
          title: "Zouk marries heritage with functionality",
          description: "IndiaRetailing brings you a series in which we highlight...",
          hashtag: "#fashion",
        },
        {
          image: "/images/c6.png",
          category: "FASHION",
          author: "TAYLOR SWIFT",
          title: "FNP (Ferns N Petals) appoints Ashish Goel as...",
          description: "Goel will spearhead the company's technological...",
          hashtag: "#lifestyle",
        },
      ],
    },
    {
      title: "D2C Remove Buzz",
      posts: [
        {
          image: "/images/c7.png",
          category: "FASHION",
          author: "TAYLOR SWIFT",
          title: "The D2C growth story",
          description: "According to reports in Q2 2022, Indian D2C startups...",
          hashtag: "#fashion",
        },
        {
          image: "/images/c8.png",
          category: "FASHION",
          author: "TAYLOR SWIFT",
          title: "D2C brand Koparo onboards Mira Kapoor as brand",
          description: "The singer-songwriter has been spotted in the hybrid garment...",
          hashtag: "#fashion",
        },
        {
          image: "/images/c9.png",
          category: "FASHION",
          author: "TAYLOR SWIFT",
          title: "India D2C Summit & Awards 2023 Honours..",
          description: "House of Chikankari, Plum Goodness, Accessorize London...",
          hashtag: "#lifestyle",
        },
      ],
    },
  ];

  return (
    <div className="bg-white w-[97%] p-6 m-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-4 flex-1">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">{section.title}</h2>
              <span className="text-gray-500 text-sm cursor-pointer">See more &gt;</span>
            </div>
            {/* Red underline */}
            <div className="h-1 w-8 bg-red-500 mb-6"></div>

            {/* Posts */}
            <div className="flex flex-col gap-6">
              {section.posts.map((post, idx) => (
                <div key={idx} className="flex gap-4">
                  <img src={post.image} alt="post" className="w-30 h-30 rounded object-cover" />
                  <div className="flex flex-col">
                    <div className="text-xs text-red-500 font-semibold">{post.category} | {post.author}</div>
                    <h3 className="text-sm font-bold mt-1">{post.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{post.description}</p>
                    <div className="text-xs text-gray-400 mt-1">{post.hashtag}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commerce;
