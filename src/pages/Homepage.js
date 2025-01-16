import React, { useState } from "react";
import Header from "../components/layout/Header";
import ProductGridFilters from "../components/assets/ProductGridFilters";
import ProductGrid from "../components/assets/ProductGrid";
import '../styles/index.css';

const Homepage = () => {
  const [collection, setCollection] = useState("");
  const [sortOption, setSortOption] = useState("");

  return (
    <div className="page-content flex flex-col gap-y-6 min-h-dvh bg-gray-100">
      <Header />
      
      <main className="flex-auto flex flex-col gap-y-10">
      <ProductGridFilters collection={collection} setCollection={setCollection} setSort={setSortOption} />
      {collection && <ProductGrid collection={collection} sortOption={sortOption} />}
      </main>
    </div>
  );
};


export default Homepage;
