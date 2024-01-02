import React from "react";
import { Link } from "react-router-dom";

import SectionImage from "../../asserts/product.png";
import ProductImage from "../../asserts/product2.png";
import Shoes from "../../asserts//shoes.png";
import ShoesImg from "../../asserts/shoes1.png";
import EcoWoman from "../../asserts/eco-woman.png";
import EcoShop from "../../asserts//eco-woman2.png";
import HeroImage from "../../asserts/hero2.png";

import {
  AboutSection,
  Button,
  FeaturedProductsSection,
  HeroSection,
  HeroText,
  HeroWrapper,
  HomePageContainer,
  Image,
  ProductCard,
  SustainabilitySection,
} from "./home.page.styles";
import { paragraphs } from './about-description';


export function HomePage() {
  return (
    <HomePageContainer className="container">
      <HeroWrapper>
        <HeroSection>
          <Image src={HeroImage} alt="hero image" />
        </HeroSection>
        <HeroText>

          <h1>Welcome to Glorious Solaria</h1>
          <p>
            Discover sustainable and  exo-friendly fashion
          </p>
          <div>
            <Link to="/shop">
              <Button>Shop Now</Button>
            </Link>
          </div>
        </HeroText>
      </HeroWrapper>

      <ProductCard>Upcoming products</ProductCard>
      <FeaturedProductsSection>
        <p>
          At Glorious Solaria, our passion for fashion goes hand in hand with
          our dedication to the planet.
        </p>
        <Image src={Shoes} alt="Upcoming products" />
        <p>
          Born from a dream to create a wardrobe that cherishes the earth, we
          offer an array of exquisite, eco-conscious garments designed for the
          modern woman who stands bold and beautiful.
        </p>
        <Image src={ShoesImg} alt="Upcoming products" />
        <Image src={EcoShop} alt="Upcoming products" />
        <Image src={ProductImage} alt="Upcoming products" />
        <Image src={EcoWoman} alt="Upcoming products" />
        <Image src={SectionImage} alt="Upcoming products" />
      </FeaturedProductsSection>
      <SustainabilitySection>
        <h2>Our Commitment to Sustainability</h2>
        <p>Learn more about our practices and how we&apos;re helping the planet.</p>
      </SustainabilitySection>
      <AboutSection>
        <h2>About Glorious Solaria</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </AboutSection>
    </HomePageContainer>
  );
}
