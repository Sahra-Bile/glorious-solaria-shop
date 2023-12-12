import { styled } from "styled-components";

export const MainContent = styled.main`
height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProductCard = styled.div(() => ({
    width: "300px",
    height: '100vh',
    border: "1px solid #ccc",
    padding: "10px",
    position: "relative",
  }));
  const ProductInfo = styled.div(() => ({
    textAlign: "center",
    marginTop: "10px",
  }));
  
  const ProductImage = styled.div(() => ({
    position: "relative",
  }));
  
  const Image = styled.img(() => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }));
  
  const WishlistButton = styled.button(() => ({
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
  }));
  
  const Price = styled.div(() => ({
    margin: "10px 0",
  }));
  
  const OriginalPrice = styled.span(() => ({
    fontWeight: "bold",
  }));
  
  const ColorOptions = styled.div(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    margin: "10px 0",
  }));
  
  const ColorOption = styled.span(() => ({
    display: "inline-block",
    width: "20px",
    height: "20px",
    border: "1px solid #ccc",
    cursor: "pointer",
  }));
  
  const AddButton = styled.button(() => ({
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
  }));
  
  const AddToBagButton = styled.button(() => ({
    background: "black",
    color: "white",
    border: "none",
    padding: "10px",
    width: "100%",
    cursor: "pointer",
  }));