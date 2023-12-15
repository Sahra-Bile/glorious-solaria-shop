import { styled } from "styled-components";
import { GroupedProduct } from "../products-page/group-product-variants";
import { MediaQueries } from "../../utils/style-constants";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { BsFillBasket3Fill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: row;
  padding: 20px;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const ProductWrapper = styled.div`
display: flex;
display: 1;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #f6f6f3;
margin: 5px;
min-width: 280px;
height: 500px;
position: relative;
&:hover{
    ${InfoContainer}{
        opacity: 1;
 }
}
@media ${MediaQueries.mdUp} {
    flex-direction: row;
    min-width: 380px;
}
}
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

type ProductListProps = {
  products: GroupedProduct[];
};

export const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <RightWrapper>
    {products.map((product) => (
      <ProductWrapper key={product.variantId}>
        <Circle />
        <Image src={product.image_3} alt={product.productName} />
        <InfoContainer>
          <IconWrapper>
            <BsFillBasket3Fill />
          </IconWrapper>
          <IconWrapper>
            <Link to={`/shop/${product.variantId}`}>
              <IoSearchSharp size={20} />
            </Link>
          </IconWrapper>
          <IconWrapper>
            <FaHeart />
          </IconWrapper>
        </InfoContainer>
      </ProductWrapper>
    ))}
  </RightWrapper>
);
