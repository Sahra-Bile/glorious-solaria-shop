import { styled } from "styled-components";

import { MediaQueries } from "../../utils/style-constants";

export const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 100%;
max-width: 1200px;
margin-top: 100px;
height: 100%;
background-color: #e0e0d6;
`;

export const HeroWrapper = styled.div`
  background-color: #fff8eb;
  display: flex;
  flex-direction: column; 
  flex-wrap: wrap; 
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  gap: 20px;
  @media ${MediaQueries.mdUp} {
    flex-direction: row;
  }

`;
export const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1; 
`;
export const HeroText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  color:  #1d6453;
  line-height: 1.5;
  flex: 1; 
  font-size: 0.8rem;
  @media ${MediaQueries.mdUp} {
    font-size: 1.2rem;
  }
`;
export const Image = styled.img`
  max-width: 100%; 
  object-fit: cover;
  align-self: stretch; 
`;
export const FeaturedProductsSection = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;

  & p {
    font-size: 1.2rem;
    line-height: 2rem;
    letter-spacing: 0.05em;
    font-feature-settings: "ss05";
    line-break: loose;
    color: black;
  }
`;
export const ProductCard = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  padding: 10px;
  background: white;
  font-size: 1.8rem;
`;
export const SustainabilitySection = styled.section`
   width: 100%;
  background-color: white;
  padding: 20px;
`;
export const AboutSection = styled.section`
  font-size: 1.2rem;
  line-height: 2.5rem;
  letter-spacing: 0.05em;
  font-feature-settings: "ss05";
  line-break: loose;
  padding: 20px;
  color: black;
  @media ${MediaQueries.mdUp} {
    font-size: 1.3rem;
    line-height: 3.25rem;
  }
  & p {
    padding-bottom: 20px;
  }
`;
export const Button = styled.button`
  border: none;
  outline: 0;
  padding: 20px;
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

