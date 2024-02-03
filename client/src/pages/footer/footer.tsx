import styled from "styled-components";
import { Link } from "react-router-dom";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #1d6453;
  color: #f6f6f3;
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  box-sizing: border-box;
`;
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;
export const FooterHeading = styled.h3`
  margin-bottom: 1rem;
`;
export const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
`;
export const FooterLinkItem = styled.li`
  margin-bottom: 0.5rem;
`;
export const FooterLink = styled(Link)`
  color: #f6f6f3;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const SocialIcon = styled.a`
  color: #f6f6f3;
  font-size: 24px;
  margin-right: 1rem;
  &:hover {
    color: #ccc;
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLinkList>
            <FooterLinkItem>
              <FooterLink to="/">Home</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink to="/shop">Shop</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink to="/about">About Us</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </FooterLinkItem>
          </FooterLinkList>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Contact Us</FooterHeading>
          <p>1234 Solarievägen 12 , Stockholm</p>
          <p>info@glorious-solaria.com</p>
          <p>+ 467 456 7890</p>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Follow Us</FooterHeading>
          <div>
            <SocialIcon href="https://instagram.com" target="_blank">
              <Instagram />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank">
              <Twitter />
            </SocialIcon>
            <SocialIcon href="https://facebook.com" target="_blank">
              <Facebook />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank">
              <LinkedIn />
            </SocialIcon>
          </div>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
}
