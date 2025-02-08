import { useState } from "react";

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
  "/blog/blog1.png",
  "/blog/blog2.png",
  "/blog/blog1.png",
  "/blog/blog3.png",
  "/blog/blog1.png",
  "/blog/blog4.png",
  "/blog/blog1.png",
  "/blog/blog5.png",
];

const generateData = (page) => {
  return Array.from({ length: 8 }, (_, i) => ({
    id: (page - 1) * 8 + i + 1,
    title: titles[i % titles.length],
    description: descriptions[i % descriptions.length],
    image: images[i % images.length]
  }));
};

const ITEMS_PER_PAGE = 8;
const TOTAL_ITEMS = 100;
const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

export default function PaginationComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonSet, setButtonSet] = useState(1);
  const selectedData = generateData(currentPage);

  const handleNextSet = () => {
    if (buttonSet * 3 < totalPages) {
      setButtonSet(buttonSet + 1);
    }
  };

  return (
    <div className="p-5 max-w-5xl mx-auto relative bottom-31">
      <div className="py-10">
        <div className="bg-white shadow-lg rounded-lg p-5 max-w-3xl mx-auto">
          <img src={selectedData[0]?.image} alt={selectedData[0]?.title} className="w-full h-60 object-cover rounded" />
          <h2 className="text-xl font-bold mt-2">{selectedData[0]?.title}</h2>
          <p className="text-gray-600">{selectedData[0]?.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-5">
        {selectedData.slice(1).map((item) => (
          <div key={item.id} className="bg-white p-4 shadow-md rounded-lg flex items-center space-x-4">
            <img src={item.image} alt={item.title} className="w-52 h-32 object-cover rounded" />
            <div>
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: 3 }, (_, i) => buttonSet * 3 - 2 + i).map((num) => (
          num <= totalPages && (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-4 py-2 rounded-md transition-all ${
                currentPage === num ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {num}
            </button>
          )
        ))}
        <button
          onClick={handleNextSet}
          className="px-4 py-2 bg-gray-200 text-blue-600 rounded-md"
        >
          →
        </button>
      </div>
    </div>
  );
}
