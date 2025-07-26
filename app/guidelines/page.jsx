import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Rules from './Rules'

function page() {
  return (
    <div className='relative'>
      <Navbar />
      <Rules />
      <Footer />
    </div>
  )
}

export default page