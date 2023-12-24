import React from "react";
import { Link } from "react-router-dom";

import SectionImage from "../../asserts/product.png";
import ProductImage from "../../asserts/product2.png";
import Shoes from "../../asserts//shoes.png";
import ShoesImg from "../../asserts/shoes1.png";
import EcoWoman from "../../asserts/eco-woman.png";
import EcoShop from "../../asserts//eco-woman2.png";
import HeroImage from "../../asserts/hero3.png";

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
            <Link to="/shop">p
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
}
