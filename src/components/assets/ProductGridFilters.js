import React, { useState } from "react";

const ProductGridFilters = ({ collection, setCollection, setSort }) => {
    const [sortOption, setSortOption] = useState(null);

    const handleSortChange = (option) => {
        setSortOption(option);
        setSort(option);
    };

    return (
        <section data-type="pfilters-section" className="flex flex-col md:flex-row justify-between gap-x-4 gap-y-2 px-4">
            <nav className="pfilters__nav flex flex-wrap gap-x-2 gap-y-1" role="Product grid collection filter">
                <button
                    className={`flex px-4 py-2 border border-solid hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all rounded ${collection === 'hydrogen' ? 'text-white bg-blue-500 border-blue-500' : 'border-black'}`}
                    onClick={() => setCollection("hydrogen")}
                    aria-label="Show Hydrogen collection"
                >
                    Hydrogen
                </button>
                <button
                    className={`flex px-4 py-2 border border-solid hover:bg-green-500 hover:text-white hover:border-green-500 transition-all rounded ${collection === 'neon' ? 'text-white bg-green-500 border-green-500' : 'border-black'}`}
                    onClick={() => setCollection("neon")}
                    aria-label="Show Neon collection"
                >
                    Neon
                </button>
            </nav>

            <nav className="pfilters__nav flex flex-wrap gap-x-2 gap-y-1" role="Product grid sort filter">
                <button
                    className={`flex px-4 py-2 border border-solid hover:bg-yellow-500 hover:text-white hover:border-yellow-500 transition-all rounded ${sortOption === 'name' ? 'text-white bg-yellow-500 border-yellow-500' : 'border-black'}`}
                    onClick={() => handleSortChange("name")}
                    aria-label="Sort by name"
                >
                    Sort by Name
                </button>
                <button
                    className={`flex px-4 py-2 border border-solid hover:bg-yellow-500 hover:text-white hover:border-yellow-500 transition-all rounded ${sortOption === 'price' ? 'text-white bg-yellow-500 border-yellow-500' : 'border-black'}`}
                    onClick={() => handleSortChange("price")}
                    aria-label="Sort by price"
                >
                    Sort by Price
                </button>
            </nav>
        </section>
    );
};

export default ProductGridFilters;
