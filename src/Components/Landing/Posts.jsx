import { useState } from "react";
import BlogCard2 from "/blog/blog1.png";
import BlogCard3 from "/blog/blog2.png";
import BlogCard4 from "/blog/blog3.png";
import BlogCard5 from "/blog/blog4.png";
import BlogCard6 from "/blog/blog5.png";

const titles = [
  "Exploring the Universe",
  "The Future of AI",
  "The Beauty of Nature",
  "Mastering Web Development",
  "The Art of Storytelling",
  "The Mystery of Black Holes",
  "Innovations in Medicine",
  "The Power of Mindfulness",
];

const descriptions = [
  "A deep dive into the wonders of space exploration.",
  "How artificial intelligence is shaping our future.",
  "Capturing the essence of nature through photography.",
  "Building modern web applications with React and Tailwind CSS.",
  "How storytelling influences human emotions and communication.",
  "Understanding the enigmatic nature of black holes.",
  "Breakthroughs in medical science and technology.",
  "Practicing mindfulness for a balanced and focused life.",
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
    image: images[i % images.length],
  }));
};

const ITEMS_PER_PAGE = 8;
const TOTAL_ITEMS = 100;
const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

function PaginationComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonSet, setButtonSet] = useState(1);
  const [activeComponent, setActiveComponent] = useState(1);

  const selectedData = generateData(currentPage);

  const handleNextSet = () => {
    if (buttonSet * 3 < totalPages) {
      setButtonSet(buttonSet + 1);
    }
  };

  const handlePrevSet = () => {
    if (buttonSet > 1) {
      setButtonSet(buttonSet - 1);
    }
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 1:
        return (
          <div className="p-5 max-w-5xl mx-auto">
            <div className="py-10">
              <div className="bg-white shadow-lg rounded-lg p-5 max-w-3xl mx-auto">
                <img
                  src={selectedData[0]?.image}
                  alt={selectedData[0]?.title}
                  className="w-full h-60 object-cover rounded"
                />
                <h2 className="text-xl font-bold mt-2">
                  {selectedData[0]?.title}
                </h2>
                <p className="text-gray-600">{selectedData[0]?.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-5">
              {selectedData.slice(1).map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 shadow-md rounded-lg flex flex-wrap items-center space-x-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-72 h-32 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return <BlogCard2 selectedData={selectedData} />;
      case 3:
        return <BlogCard3 selectedData={selectedData} />;
      case 4:
        return <BlogCard4 selectedData={selectedData} />;
      case 5:
        return <BlogCard5 selectedData={selectedData} />;
      case 6:
        return <BlogCard6 selectedData={selectedData} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-5 max-w-5xl mx-auto relative bottom-31">
      {renderComponent()}
      <div className="flex justify-center mt-6 space-x-2 flex-wrap sm:space-x-4">
        <button
          onClick={handlePrevSet}
          disabled={buttonSet === 1}
          className="px-2 py-1 text-sm rounded-md bg-gray-200 text-black disabled:bg-gray-400 disabled:text-gray-600 sm:px-4 sm:py-2 sm:text-base"
        >
          Previous
        </button>
        {[...Array(3)].map((_, i) => {
          const buttonIndex = buttonSet * 3 - 3 + i + 1;
          return (
            buttonIndex <= 6 && (
              <button
                key={buttonIndex}
                onClick={() => setActiveComponent(buttonIndex)}
                className={`px-2 py-1 text-sm rounded-md transition-all sm:px-4 sm:py-2 sm:text-base ${
                  activeComponent === buttonIndex ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
                }`}
              >
                {buttonIndex}
              </button>
            )
          );
        })}
        <button
          onClick={handleNextSet}
          disabled={buttonSet * 3 >= 6}
          className="px-2 py-1 text-sm rounded-md bg-gray-200 text-black disabled:bg-gray-400 disabled:text-gray-600 sm:px-4 sm:py-2 sm:text-base"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationComponent;
