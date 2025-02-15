import React from 'react';

const BlogCard2 = () => {
  const titles = [
    "Exploring the Universe",
    "The Future of AI",
    "The Beauty of Nature",
    "Mastering Web Development",
    "The Art of Storytelling",
    "The Mystery of Black Holes",
    "Innovations in Medicine",
    "The Power of Mindfulness"
  ];

  const descriptions = [
    "A deep dive into the wonders of space exploration.",
    "How artificial intelligence is shaping our future.",
    "Capturing the essence of nature through photography.",
    "Building modern web applications with React and Tailwind CSS.",
    "How storytelling influences human emotions and communication.",
    "Understanding the enigmatic nature of black holes.",
    "Breakthroughs in medical science and technology.",
    "Practicing mindfulness for a balanced and focused life."
  ];

  const images = [
    "/blog/blog5.png",
    "/blog/blog2.png",
    "/blog/blog5.png",
    "/blog/blog4.png",
    "/blog/blog1.png",
    "/blog/blog3.png",
    "/blog/blog2.png",
    "/blog/blog1.png"
  ];

  return (
    <div className="p-5 max-w-5xl mx-auto ">
      {/* Main blog card */}
      <div className="py-10">
        <div className="bg-white shadow-lg flex flex-wrap items-center rounded-lg p-5 max-w-3xl mx-auto">
          <img
            src={images[1]} // Example: Display image from second index (could be dynamic)
            alt={titles[1]} // Example: Display title from second index
            className="w-full h-60 object-cover rounded"
          />
          <h2 className="text-xl font-bold mt-2">{titles[1]}</h2>
          <p className="text-gray-600">{descriptions[1]}</p>
        </div>
      </div>

      {/* Other cards, dynamically populated */}
      <div className="grid grid-cols-1 gap-4 mt-5">
        {images.map((image, index) => (
          <div key={index} className="bg-white flex flex-wrap p-4 shadow-md rounded-lg items-center space-x-4">
            <img
              src={image}  // Dynamically change the image
              alt={titles[index]}  // Dynamically change the title
              className="w-72 h-32 object-cover rounded "
            />
            <div>
              <h2 className="text-lg font-bold">{titles[index]}</h2>
              <p className="text-gray-600 text-sm">{descriptions[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard2;
