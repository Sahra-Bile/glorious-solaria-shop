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
  color: black;
  padding-top: 2.5em;
  text-align: start;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
  }
`;
export const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
   
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
  font-size: 2rem;
  color: black;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  padding: 5px;
  width: 30%;
  height: 70px;
  margin-bottom: 15px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f6f6f3;

  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 1024px) {
    width: 90%;
  }
`;
export const TextArea = styled.textarea`
 padding: 10px;
 width: 100%;
  height: 150px;
  margin-bottom: 15px;
  border: 1px solid black;
  border-radius: 5px;
  resize: vertical; 
  background-color: #f6f6f3;
   
  @media (min-width: 768px) {
    height: 400px; 
    max-width: 700px; 

  }
`;
export const Button = styled.button`
  background: #1d6453;
  color: white;
  border: none;
  padding: 10px;
  width: 300px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    background-color: #e0e0d6;
  }
`;
export const Label = styled.label`
  font-size: 1rem;
  color: black;
`;
