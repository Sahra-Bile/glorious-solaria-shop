import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { styled } from 'styled-components'

import { ToastContainer } from '../utils/notifications'
import { Navbar, AboutUs, Contact, Footer, HomePage } from '../pages'
import { ScrollToTop } from '../helpers/scroll'
import { Login, ProductDetails, ProductPage, Register, Checkout, GoogleAuthRedirect } from '../components'
import { TrackLastPage } from '../helpers/track-last-page'

import { NoMatch } from './no-match'

const Wrapper = styled.div({
  height: '100%',
  overflow: 'hidden',
})

const PageContent = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  overflowX: 'scroll',
}))

export function AppRoutes() {
  return (
    <Wrapper>
      <ToastContainer />
      <BrowserRouter>
        <ScrollToTop />
        <TrackLastPage />
        <Navbar />
        <PageContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ProductPage />} />
            <Route path="/shop/:id" element={<ProductDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<GoogleAuthRedirect />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
        </PageContent>
        <Footer />
      </BrowserRouter>
    </Wrapper>
  )
}
