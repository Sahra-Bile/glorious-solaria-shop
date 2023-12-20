import React from "react";
import styled from "styled-components";

import { useProductVariants } from "../../context/product-variant-context";

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;
const PageNumber = styled.button<{ isActive?: boolean }>`
  background: ${(props) => (props.isActive ? " #1d6453" : "transparent")};
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background: #d6d6cd;
  }
`;
const Ellipsis = styled.span`
  padding: 0 10px;
`;

export function Pagination() {
  const MAX_PAGE_NUMBERS = 5;

  const { setPage, currentPage, totalPages } = useProductVariants();
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  // count total pages and generate array of pages
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    Math.max(0, currentPage - 1 - Math.floor(MAX_PAGE_NUMBERS / 2)),
    Math.min(totalPages, currentPage + Math.floor(MAX_PAGE_NUMBERS / 2))
  );

  return (

    <PaginationWrapper>
      <PageNumber onClick={() => handlePageChange(currentPage - 1)}>
        &lt;
      </PageNumber>
      {currentPage > 1 + Math.floor(MAX_PAGE_NUMBERS / 2) && (
        <Ellipsis>...</Ellipsis>
      )}
      {pageNumbers.map((number) => (
        <PageNumber
          key={number}
          isActive={currentPage === number}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </PageNumber>
      ))}
      {currentPage < totalPages - Math.floor(MAX_PAGE_NUMBERS / 2) && (
        <Ellipsis>...</Ellipsis>
      )}
      <PageNumber onClick={() => handlePageChange(currentPage + 1)}>
        &gt;
      </PageNumber>
    </PaginationWrapper>
  );
}
