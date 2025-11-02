import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function Pagination({ items, itemsPerPage, renderCard }) {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = items.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  function incPageNum(num) {
    if (num == totalPages) return totalPages;
    return num + 1;
  }
  function decPageNum(num) {
    if (num == 1) return num;
    return num - 1;
  }
  return (
    <div>
      {/* Render cards */}
      <div className="grid gap-4">
        {selectedItems.map((item, index) => (
          <div key={index}>{renderCard(item)}</div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          className="px-2 py-1 rounded bg-gray-200 text-gray-700"
          onClick={() => setCurrentPage((prev) => decPageNum(prev))}
        >
          <IoIosArrowBack />
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-2 py-1 rounded bg-gray-200 text-gray-700"
          onClick={() => {
            setCurrentPage((prev) => incPageNum(prev));
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
