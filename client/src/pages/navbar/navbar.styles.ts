
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { MediaQueries } from "../../utils/style-constants";
import { ShoppingCartOutlined } from "@material-ui/icons";


export const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1d6453;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Hamburger = styled.div`
  display: block;
  cursor: pointer;
  padding: 1.5rem;

  @media ${MediaQueries.mdUp} {
    display: none;
  }
`;
export const MobileMenu = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
position: absolute;
top: 100%;
left: 0;
right: 0;
background: #1D6453;
padding: 1rem;
z-index: 10;
}
& li {
list-style: none;
}
& a {
color: #f6f6f3;
}
  @media ${MediaQueries.smUp} {
    display: none;
  }
`;
export const List = styled.ul`
  list-style: none;
  display: none;
  flex-direction: column;

  @media ${MediaQueries.mdUp} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
   padding: 5rem;
  }

  @media ${MediaQueries.lgUp} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 5rem;
  }
`;
export const ListItem = styled.li`
  color: #f6f6f3;
  font-size: 1.3rem;
`;
export const ListItemLink = styled(Link)`
  text-decoration: none;
  color: #f6f6f3;

  &:hover {
    color: #ccc;
  }
  @media ${MediaQueries.lgUp} {
     padding: 4rem;
  }
`;
export const Heading = styled.h1`
  text-align: center;
  color: #f6f6f3;
  font-size: 16px;
  font-family: cursive;
  @media ${MediaQueries.mdUp} {
    font-size: 20px;
  }
  @media ${MediaQueries.lgUp} {
    font-size: 24px;
  }
`;
export const BasketIcon = styled(ShoppingCartOutlined)<{ isOpen: boolean }>`
  color: #f6f6f3;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  @media ${MediaQueries.mdUp} {
    display: block;
  }
  
`;

export const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
justify-content: center;
background: #e0e0d6;

 `;

export const SearchInput = styled.input`
border: none;
background: #e0e0d6;
padding: 5px;

 `;
