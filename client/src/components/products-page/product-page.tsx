import React, { useEffect, useState } from "react";
import { useProductVariants } from "../../context/product-variant-context";
import { ProductPageContainer } from "./product.styles";
import { Announcement } from "../announcement/announcement";
import { FilterProduct } from "./Filter-product";
import { SearchBar } from "../search-bar/search-bar";
import { Newsletter } from "../news-letter/news-letter";

export function ProductPage() {
  const { productVariants, isFetchProductLoading, isError, hasMorePages } =
    useProductVariants();
  const [filteredProducts, setFilteredProducts] = useState(productVariants);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = productVariants.filter((product) =>
      searchTerm
        ? product.productName.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    );
    setFilteredProducts(filtered);
  }, [productVariants, searchTerm]);

  if (isFetchProductLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div> something went wrong...</div>;
  }
  return (
    <section>
      <ProductPageContainer>
        <Announcement />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterProduct
          products={filteredProducts}
          hasMorePages={hasMorePages}
        />
          <Newsletter />
      </ProductPageContainer>
    
    </section>
  );
}
