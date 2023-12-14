import React from "react";
import TeamMemberImage from "../../asserts/bile.png";
import MemberImage from "../../asserts/designer-loura.png";
import {
  AboutPageContainer,
  HeroSection,
  Image,
  Role,
  Section,
  SubTitle,
  TeamMember,
  TeamSection,
  Text,
  Title,
  Name,
} from "./about-us.styles";

export function AboutUs() {
  return (
    <AboutPageContainer>
      <HeroSection>
        <Title>About Glorious Solaria</Title>
      </HeroSection>
      <Section>
        <SubTitle>Our Story</SubTitle>
        <Text>
          Glorious Solaria was born from a dream to create a wardrobe that
          cherishes the earth...
        </Text>
      </Section>
      <Section>
        <SubTitle>Our Values</SubTitle>
        <Text>
          Our commitment to sustainability is at the core of everything we do...
        </Text>
      </Section>
      <Section>
        <SubTitle>Sustainability Practices</SubTitle>
        <Text>
          We use sustainable materials and ethical practices to support both the
          planet and its people...
        </Text>
      </Section>
      <TeamSection>
        <TeamMember>
          <Image src={TeamMemberImage} alt="Team Member sahra" />
          <Name>Sahra </Name>
          <Role>Developer</Role>
        </TeamMember>
        <TeamMember>
          <Image src={MemberImage} alt="Team Member loura" />
          <Name>Loura</Name>
          <Role>Designer</Role>
        </TeamMember>
      </TeamSection>
    </AboutPageContainer>
  );
}