import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import SEO from './SEO/SEO'
import './all.sass'

const addDeviceClass = () => {
  if (typeof window === 'undefined' || !window.document) {
    return
  }
  document.documentElement.classList.add(
    'ontouchstart' in document.documentElement ? 'touch' : 'no-touch'
  )
}

const Layout = ({ children, title }) => {
  addDeviceClass()

  return (
    <div>
      <SEO title={title} />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
