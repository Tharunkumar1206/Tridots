import React from "react";

const ShoppingCenters = () => {
  const posts = [
    {
      image: "your-image-1.png", // replace with your image name
      category: "SELECT CITYWALK",
      type: "LIFESTYLE",
      title: "Select Citywalk opens 4 new stores in June",
      description: "The new stores opened at Select Citywalk include Choko la, Raymond, Looks Salon and Home Stop.",
    },
    {
      image: "your-image-2.png",
      category: "INFINITI MALL",
      type: "NEWS",
      title: "Infiniti Mall collaborates with T-Series & PVR Inox to unveil Adipurush artwork",
      description: "Constructed by Rubik's Cubes mosaic artist Selwyn Santmajor and Nikhil from Nikhil Artwork.",
    },
    {
      image: "your-image-3.png",
      category: "MULTIMEDIA",
      type: "NEWS",
      title: "DLF creating new retail space in Delhi for France’s Galeries Lafayette",
      description: "DLF is earmarking space for the luxury retailer between two of its top-end malls, Emporio and Promenade.",
    },
  ];

  return (
    <div className="bg-white w-full p-6">
      <h1 className="text-2xl font-bold mb-6 text-black">Shopping Centers</h1>

      <div className="flex flex-col gap-10">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 p-4 border border-gray-200 rounded-lg"
          >
            {/* Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full md:w-1/2 h-64 object-cover rounded-lg"
            />

            {/* Text Content */}
            <div className="flex flex-col justify-center text-black">
              <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                <span className="text-red-600">{post.category}</span>
                <span>|</span>
                <span>{post.type}</span>
              </div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-2">{post.description}</p>
              <p className="text-gray-400 text-sm">#real stories podcast</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCenters;
