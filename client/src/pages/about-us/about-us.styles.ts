import { styled } from 'styled-components';

import HeroImage from '../../asserts/about-png.png'; 
import { MediaQueries } from '../../utils/style-constants';

export const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeroSection = styled.section`
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  height: 70vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const Section = styled.section`
  padding: 2rem;
`;
export const Title = styled.h1`
  font-size: 0.7rem;
  color: #1D6453; 
   @media (${MediaQueries.mdUp}){
    font-size: 1.5rem;
  }
`;
export const Text = styled.p`
  font-size: 1.1rem;
  margin: 1rem 0;
`;
export const SubTitle = styled.h2`
  font-size: 2rem;
  color: #1D6453;
`;
export const TeamSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const TeamMember = styled.div`
  flex-basis: calc(33% - 1rem); 
  margin: 0.5rem;
  text-align: center;
  @media (${MediaQueries.mdUp}){
    flex-basis: calc(25% - 0.5rem); 
  }
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
 

`;
export const Name = styled.h3`
  font-size: 1.5rem;
  color: #1D6453;
  text-align: center;
`;
export const Role = styled.p`
  font-style: italic;
  text-align: center;
`;
