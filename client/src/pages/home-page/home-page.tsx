import React from 'react';
import styled from 'styled-components';
import HeroImage from '../../asserts/hero2.png';

// Styled components for different sections of the home page
const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  max-width: 1200px;
  background: url(${HeroImage}) center/cover no-repeat;
`;

const HeroText = styled.div`
  color: white;
  text-align: center;
`;

const FeaturedProductsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  background: white;
`;

const SustainabilitySection = styled.section`
  background-color: #e8f5e9;
  padding: 20px;
`;

const AboutSection = styled.section`
  padding: 20px;
`;

export const HomePage = () => {
  return (
    <HomePageContainer>
      <HeroSection >
        <HeroText>
          <h1>Welcome toGlorious Solaria</h1>
          <p>Discover sustainable and eco-friendly fashion</p>
        </HeroText>
      </HeroSection>
      <FeaturedProductsSection>
        {/* Render your product cards here */}
      </FeaturedProductsSection>
      <SustainabilitySection>
        <h2>Our Commitment to Sustainability</h2>
        <p>Learn more about our practices and how we're helping the planet</p>
      </SustainabilitySection>
      <AboutSection>
        <h2>About EcoFashion</h2>
        <p>Find out who we are and why we started this journey</p>
      </AboutSection>
      {/* Add more sections as needed */}
    </HomePageContainer>
  );
};


