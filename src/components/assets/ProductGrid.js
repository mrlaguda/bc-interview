import React, { useState, useEffect } from "react";
import client from "../../utils/shopifyClient";

const ProductGrid = ({ collection, sortOption }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    /* Pull Collection */
    if (!collection) return;

    const fetchCollection = async () => {
      const query = `
        query GetCollection($handle: String!) {
          collection(handle: $handle) {
            products(first: 10) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  totalInventory
                  compareAtPriceRange {
                    minVariantPrice {
                      amount
                    }
                    maxVariantPrice {
                      amount
                    }
                  }
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                    maxVariantPrice {
                      amount
                    }
                  }
                  images(first: 2) {
                    edges {
                      node {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;

      const variables = { handle: collection };

      try {
        const response = await client.request(query, { variables });
        const fetchedProducts = response?.data?.collection?.products?.edges?.map(edge => edge.node) || [];
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("GraphQL Error:", error);
      }
    };

    fetchCollection();
  }, [collection]);

  /* Sort Collection */
  const sortedProducts = () => {
    let sorted = [...products];

    if (sortOption === "name") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "price") {
      sorted.sort((a, b) => parseFloat(a.priceRange.maxVariantPrice.amount) - parseFloat(b.priceRange.maxVariantPrice.amount));
    }

    return sorted;
  };

  /* Render Collection */
  return (
    <section data-type="pgrid-section" className="pb-12">
      <div className="pgrid__container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-5 px-4">
        {sortedProducts().map((product) => (
          <div key={product.id} className="pgrid__item flex flex-col gap-y-4">
            <div className="pgrid__item-media group relative w-full aspect-square rounded overflow-hidden">
              <div className="aspectholder bg-white w-full h-full">
                <img
                  src={product.images.edges[0]?.node.url}
                  alt={product.title}
                  className="block w-full h-full object-contain"
                />
                {product.images.edges[1] && (
                  <img
                    src={product.images.edges[1]?.node.url}
                    alt={product.title}
                    className="hidden md:block absolute top-0 left-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 z-2 transition-all"
                  />
                )}
              </div>

              {(product.totalInventory <= 0 && !product.availableForSale) && (
                <div className="pgrid__item-badges flex flex-wrap gap-1 absolute bottom-2 left-2 max-w-[calc(100%-1rem)]">
                  <span className="text-xs text-white bg-black py-1 px-3 rounded-xl">Sold Out</span>
                </div>
              )}
            </div>

            <div className="pgrid__item-text">
              <h2 className="text-base font-semibold">{product.title}</h2>
              <p>
                {product.compareAtPriceRange && parseFloat(product.compareAtPriceRange.maxVariantPrice.amount) > parseFloat(product.priceRange.maxVariantPrice.amount) ? (
                  <>
                    <span className="text-base text-red-500">
                      ${parseFloat(product.priceRange.maxVariantPrice.amount).toFixed(2)}
                    </span>
                    <span className="text-base line-through ml-2">
                      ${parseFloat(product.compareAtPriceRange.maxVariantPrice.amount).toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-base">
                    ${parseFloat(product.priceRange.maxVariantPrice.amount).toFixed(2)}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
