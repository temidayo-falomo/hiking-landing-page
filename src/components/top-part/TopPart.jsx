import React from 'react'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import './TopPart.css'

const TopPart = () => {
  return (
    <section className='top-part'>
        <div className="top-part-container">
        <Navbar />
        <Header />
        </div>

        <img src='./FigmaAssets/HG.svg' alt='' className='hg'/>
        <img src='./FigmaAssets/MG.svg' alt='' className='mg'/>
        <img src='./FigmaAssets/VG.svg' alt=''className='vg' />
        <img src='./FigmaAssets/BG Content.svg' alt=''className='bg' />
    </section>
  )
}

export default TopPart