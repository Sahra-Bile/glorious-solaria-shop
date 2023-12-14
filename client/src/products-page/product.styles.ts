import { styled } from "styled-components";

export const ProductCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  position: relative;
  border-radius: 5px;
  border: 1px solid black;
`;

export const ProductCardsl = styled.div`
 display: grid;
  grid-gap: 30px;
  padding: 20px
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;


  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;


export const ProductCards = styled.div({
  display: 'grid',
  gridTemplateColumns: '350px auto',
  gridRowGap: 20,
  alignItems: 'center',
})

export const ProductInfo = styled.div(() => ({
  textAlign: "center",
  marginTop: "10px",
}));

export const Price = styled.p(() => ({
  margin: "10px 0",
  fontFamily: "Open Sans",
  fontSize: "1.5rem",
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

export const AddToBagButton = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #1d6453;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  &:hover {
    opacity: 0.7;
  }
`;

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
