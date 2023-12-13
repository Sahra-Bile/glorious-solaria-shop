import { styled } from "styled-components";

export const ProductCard = styled.div`
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  position: relative;
`;
export const ProductInfo = styled.div(() => ({
  textAlign: "center",
  marginTop: "10px",
}));

export const Price = styled.div(() => ({
  margin: "10px 0",
}));

export const OriginalPrice = styled.span(() => ({
  fontWeight: "bold",
}));

export const ColorOptions = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  margin: "10px 0",
}));

export const ColorOption = styled.span(() => ({
  display: "inline-block",
  width: "20px",
  height: "20px",
  border: "1px solid #ccc",
  cursor: "pointer",
}));

export const ProductTitle = styled.h1(() => ({
  fontFamily: "Open Sans",
  fontSize: "1.5rem",
  fontWeight: "bold",
  margin: "10px 0",
  textAlign: "center",
}));

export const AddToBagButton = styled.button(() => ({
  background: "#1D6453",
  color: "white",
  border: "none",
  padding: "10px",
  width: "100%",
  cursor: "pointer",
}));

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`;

export const CarouselItem = styled.img`
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 90%;
  margin-right: 5%;
  object-fit: cover;
`;

export const Arrow = styled.div<{ direction: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "prev" ? "left: 10px;" : "right: 10px;")}
  height: 30px;
  width: 30px;
  background: white;
  border-radius: 50%;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 2;
`;

export const DotsContainer = styled.div`
  text-align: center;
  padding-top: 10px;
`;

export const Dot = styled.span`
  display: inline-block;
  margin: 0 5px;
  width: 10px;
  height: 10px;
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
`;
// export const MainContent = styled.main`
//   display: grid;
//   gap: 32px 24px;
//   padding: 16px;
//   margin-top: 5rem;
//   justify-content: center;
//   align-items: flex-start;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(1, 1fr);
//     padding-top: 3rem;
//   }

//   @media (min-width: 769px) and (max-width: 1024px) {
//     grid-template-columns: repeat(2, 1fr);
//     padding-top: 4rem;
//   }

//   @media (min-width: 1025px) {
//     grid-template-columns: repeat(3, 1fr);
//     padding-top: 4rem;
//   }
// `;

export const MainContent = styled.main`
  display: flex;
  gap: 32px 24px;
  padding: 16px;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;

`;