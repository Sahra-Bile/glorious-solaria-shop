import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { MediaQueries } from "../../utils/style-constants";
import { ShoppingCartOutlined } from "@material-ui/icons";

export const Nav = styled.nav`
  width: 100%;
  height: 5em;
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
  padding-left:  1rem;
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
  @media ${MediaQueries.mdUp} {
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
    align-items: center;
    padding: 2rem;
    gap: 2rem;
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
    padding: 2rem;
  }
  @media ${MediaQueries.x2Up} {
    padding: 4rem;
  }
`;
export const Heading = styled.h1`
  text-align: center;
  color: #f6f6f3;
  font-size: 20px;
  @media ${MediaQueries.mdUp} {
    font-size: 20px;
  }
`;
export const BasketIcon = styled(ShoppingCartOutlined)<{ isOpen: boolean }>`
  color: #f6f6f3;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  @media ${MediaQueries.mdUp} {
    display: block;
  }
`;
