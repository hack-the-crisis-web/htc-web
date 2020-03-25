import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import SEO from './SEO/SEO'
import './all.sass'

const Layout = ({ children, title }) => (
  <div>
    <SEO title={title} />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default Layout
