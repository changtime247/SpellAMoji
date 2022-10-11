import React from 'react'
import { Navbar } from 'react-bootstrap'
import Award from './Award'

const Footer = ({ clearAwards }) => {
  return (
    <Navbar fixed='bottom' className='navbar'>
      <Award clearAwards={clearAwards}></Award>
    </Navbar>
  )
}

export default Footer
