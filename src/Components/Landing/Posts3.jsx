import React from 'react';

const Posts3 = ({ selectedData }) => {
  return (
    <div className="p-5 max-w-5xl mx-auto">
      {/* Main blog post */}
      <div className="py-10">
        <div className="bg-white shadow-lg flex flex-wrap items-center rounded-lg p-5 max-w-3xl mx-auto">
          <img
            src={selectedData[0]?.image}
            alt={selectedData[0]?.title}
            className="w-full h-60 object-cover rounded"
          />
          <h2 className="text-xl font-bold mt-2">{selectedData[0]?.title}</h2>
          <p className="text-gray-600">{selectedData[0]?.description}</p>
        </div>
      </div>

      {/* Other posts */}
      <div className="grid grid-cols-1 gap-4 mt-5">
        {selectedData.slice(1).map((item) => (
          <div key={item.id} className="bg-white p-4 shadow-md flex flex-wrap rounded-lg items-center space-x-4">
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
};

export default Posts3;
