import React, { useEffect, useState } from 'react'

import { useProductVariants } from '../../context/product-variant-context'
import { SearchBar } from '../search-bar/search-bar'
import { Newsletter } from '../news-letter/news-letter'

import { FilterProduct } from './Filter-product'
import { ProductPageContainer } from './product.styles'

export function ProductPage() {
  const { productVariants, isFetchProductLoading, isError, hasMorePages } = useProductVariants()
  const [filteredProducts, setFilteredProducts] = useState(productVariants)
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchPerformed, setIsSearchPerformed] = useState(false)

  useEffect(() => {
    setFilteredProducts(productVariants);
  }, [productVariants]);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm === '') {
      setFilteredProducts(productVariants)
    } else {
      const filtered = productVariants.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredProducts(filtered)
      setIsSearchPerformed(true)
    }
  }
  const handleClear = () => {
    setSearchTerm('')
    setFilteredProducts(productVariants)
    setIsSearchPerformed(false)
  }

  if (isFetchProductLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div> something went wrong...</div>
  }

  return (
    <ProductPageContainer>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
        onClear={handleClear}
        isSearchPerformed={isSearchPerformed}
      />
      <FilterProduct products={filteredProducts} hasMorePages={hasMorePages} />
      <Newsletter />
    </ProductPageContainer>
  )
}
