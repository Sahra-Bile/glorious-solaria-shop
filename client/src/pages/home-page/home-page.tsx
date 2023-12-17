import React from "react";
import SectionImage from "../../asserts/product.png";
import ProductImage from "../../asserts/product2.png";
import Shoes from "../../asserts//shoes.png";
import ShoesImg from "../../asserts/shoes1.png";
import EcoWoman from "../../asserts/eco-woman.png";
import EcoShop from "../../asserts//eco-woman2.png";

import {
  AboutSection,
  Button,
  FeaturedProductsSection,
  HeroSection,
  HeroText,
  HomePageContainer,
  ProductCard,
  SustainabilitySection,
} from "./home.page.styles";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <HomePageContainer className="container">
      <HeroSection>
        <HeroText>
          <h1>Welcome to Glorious Solaria</h1>
          <p>
            Discover sustainable and <br /> eco-friendly fashion
          </p>
          <div>
            <Link to="/shop">
              <Button>Shop Now</Button>
            </Link>
          </div>
        </HeroText>
      </HeroSection>
      <ProductCard>Upcoming products</ProductCard>
      <FeaturedProductsSection>
        <p>
          At Glorious Solaria, our passion for fashion goes hand in hand with
          our dedication to the planet.
        </p>
        <img src={Shoes} alt="img" />
        <p>
          Born from a dream to create a wardrobe that cherishes the earth, we
          offer an array of exquisite, eco-conscious garments designed for the
          modern woman who stands bold and beautiful.
        </p>
        <img src={ShoesImg} alt="img" />
        <img src={EcoShop} alt="img" />
        <img src={ProductImage} alt="img" />
        <img src={EcoWoman} alt="img" />
        <img src={SectionImage} alt="img" />
      </FeaturedProductsSection>
      <SustainabilitySection>
        <h2>Our Commitment to Sustainability</h2>
        <p>Learn more about our practices and how we're helping the planet.</p>
      </SustainabilitySection>
      <AboutSection>
        <h2>About Glorious Solaria</h2>
        <p>
          Glorious Solaria is where timeless fashion meets environmental
          consciousness. Our ethos is woven into every garment we present to
          you, the discerning and environmentally aware shopper. Our journey is
          fueled by the belief that fashion should be a force for good - good
          for the people who make it, good for those who wear it, and good for
          the planet we all share.
        </p>
        <p>
          Each thread, each stitch, each pattern is a commitment to ecological
          integrity and ethical transparency. We meticulously select materials
          that are not only gentle on the environment but also on your skin. Our
          clothing line, crafted from organic, renewable, and recycled
          resources, speaks to those who are passionate about nurturing the
          environment without compromising on style and quality.
        </p>
        <p>
          At Glorious Solaria, we're not just selling clothes; we're cultivating
          a movement. A movement that celebrates the beauty of nature through
          sustainable practices that support a balanced ecosystem. Join us in
          embracing fashion that cares, fashion that matters, and fashion that
          makes a difference.
        </p>
        <p>
          Welcome to our world - a world where green is not just a color, but a
          promise of a brighter, more sustainable future. Step into the world of
          Glorious Solaria, and dress in the change you wish to see.
        </p>
      </AboutSection>
    </HomePageContainer>
  );
};
