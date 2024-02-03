import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CloseSharp, HorizontalSplit } from '@material-ui/icons'
import Badge from '@material-ui/core/Badge'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import { styled } from 'styled-components'

import { Cart } from '../../components/cart/cart'
import { useCartItems } from '../../context/cart-context'


import {
  BasketIcon,
  Container,
  Hamburger,
  Heading,
  List,
  ListItem,
  ListItemLink,
  MobileMenu,
  Nav,
} from './navbar.styles'
import { data } from './data'

const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
`

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { cartOpen, setCartOpen, getTotalItems, cartItems, isAuthenticated, setIsAuthenticated } =
    useCartItems()
  const navRef = React.useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const handleLogout = () => {
    localStorage.removeItem('authToken')
    setIsAuthenticated(false)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen, navRef])

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    setIsAuthenticated(Boolean(token))
  }, [isAuthenticated])

  return (
    <Nav>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart />
      </Drawer>
      <Container>
        <ListItemLink as={Link} to="/">
          <Heading className="logo"> Glorious Solaria</Heading>
        </ListItemLink>
        <Hamburger onClick={toggleMenu}>
          {isOpen ? (
            <CloseSharp fontSize="medium" style={{ color: '#f6f6f3' }} />
          ) : (
            <HorizontalSplit fontSize="medium" style={{ color: '#f6f6f3' }} />
          )}
        </Hamburger>
        {isOpen && (
          <MobileMenu>
            {data.map((item) => (
              <ListItem key={item.id}>
                <ListItemLink as={Link} to={item.Link} onClick={() => setIsOpen(false)}>
                  {item.title}
                </ListItemLink>
              </ListItem>
            ))}
            <ListItem>
              {isAuthenticated ? (
                <ListItemLink to="" onClick={handleLogout}>
                  Logout
                </ListItemLink>
              ) : (
                <ListItemLink as={Link} to="/login">
                  Login
                </ListItemLink>
              )}
            </ListItem>
            <ListItem>
              <StyledButton onClick={() => setCartOpen(true)}>
                <Badge badgeContent={getTotalItems(cartItems)} color="secondary">
                  <BasketIcon fontSize="small" />
                </Badge>
              </StyledButton>
            </ListItem>
          </MobileMenu>
        )}
        <List>
          {data.map((item) => (
            <ListItem key={item.id}>
              <ListItemLink as={Link} to={item.Link}>
                {item.title}
              </ListItemLink>
            </ListItem>
          ))}
          <ListItem>
            {isAuthenticated ? (
              <ListItemLink to="" onClick={handleLogout}>
                Logout
              </ListItemLink>
            ) : (
              <ListItemLink as={Link} to="/login">
                Login
              </ListItemLink>
            )}
          </ListItem>
          <ListItem>
            <StyledButton onClick={() => setCartOpen(true)}>
              <Badge badgeContent={getTotalItems(cartItems)} color="secondary">
                <BasketIcon fontSize="small" />
              </Badge>
            </StyledButton>
          </ListItem>
        </List>
      </Container>
    </Nav>
  )
}
