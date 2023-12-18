import { styled } from "styled-components";
import HeroImage from "../../asserts/hero2.png";
import { MediaQueries } from "../../utils/style-constants";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e0e0d6;
  margin-top: 100px;
`;
export const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: url(${HeroImage}) center/cover no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 4rem 1rem;
`;
export const HeroText = styled.div`
  color: #e0e0d6;
  text-shadow: 4px 4px 6px #000000;
  line-height: 1.5;
  & h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  & p {
    font-size: 2rem;
  }
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
  border: 1px solid #ddd;
  padding: 10px;
  background: white;
  font-size: 1.8rem;
`;
export const SustainabilitySection = styled.section`
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
  @media ${MediaQueries.smUp} {
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
