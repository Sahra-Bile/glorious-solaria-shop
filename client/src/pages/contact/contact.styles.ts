import { styled } from "styled-components";

export const ContactPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const ContactWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Heading = styled.h1`
  margin-bottom: 15px;
  margin-top: 15px;
  font-size: 2rem;
  font-family:
    Open Sans,
    sans-serif;
  color: black;
  padding-top: 2.5em;
  text-align: start;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  font-family:
    Open Sans,
    sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    line-height: 1.5;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ListContainer = styled.ul`
  margin: 30px;
  padding: 1em;
`;

export const IconPlaceholder = styled.li`
  font-size: 50px;
  color: black;
  &:hover {
    color: black;
    transform: translateY(-0.5rem);
  }
`;

export const List = styled.li`
  font-size: 20px;
`;

export const MessageContainer = styled.div`
  padding: 15px;
  width: 90%;
`;

export const Header = styled.h2`
  margin-bottom: 30px;
  font-size: 40px;
  font-family:
    Open Sans,
    sans-serif;
  font-size: 2rem;
  color: black;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgba(22, 16, 26, 0.2);
`;

export const Input = styled.input`
  padding: 5px;
  width: 30%;
  height: 70px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 1024px) {
    width: 70%;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
background: #1D6453;
color: white;
border: none;
padding: 10px;
width: 300px;
cursor: pointer;
  &:hover {
    background-color: #1D6453;
  }
`;

  
export const Label = styled.label`
  font-weight: bold;
  font-size: 1rem;
  color: black;
  font-family:
    Open Sans,
    sans-serif;
`;
