import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import './HikeGear.css'



const HikeGear = () => {
  return (
    <div className='hike-gear'>
      <div className='hike-gear-container'>

        <div className='gear one' id='one'>
          <div className='gear-desc'>
          <img src='./FigmaAssets/Equipment-1.svg' alt='' className='number'/>
        <div className="top-part-middle">
            <div className="underline"></div>
            <h5>A Hiking Guide</h5>
          </div>
          <h1>What level of  hiker are you?</h1>
          <p>
          Determining what level of hiker you are can be an important tool when planning future hikes. 
          This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker.
           What type of hiker are you – novice,
            moderate, advanced moderate, expert, or expert backpacker? 
          </p>
          <p><a href='/' className='align'>read more <BsArrowRight /></a></p>
          </div>

          <img src='./FigmaAssets/01.svg' alt='' />
        </div>

        <div className='gear-two' id='two'>
          <div className='gear-desc'>
            <img src='./FigmaAssets/Equipment-2.svg' alt='' className='number'/>
        <div className="top-part-middle">
            <div className="underline"></div>
            <h5>Hiking Essentials</h5>
          </div>
          <h1>Picking the right Hiking Gear!</h1>
          <p>
          The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
          Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.
          </p>
          <p><a href='/' className='align'>read more <BsArrowRight /></a></p>
          </div>

          <img src='./FigmaAssets/02.svg' alt='' />
        </div>

        <div className='gear three' id='three'>
          <div className='gear-desc'>
          <img src='./FigmaAssets/Equipment-3.svg' alt='' className='number'/>
        <div className="top-part-middle">
            <div className="underline"></div>
            <h5>where you go is the key</h5>
          </div>
          <h1>Understand Your Map & Timing</h1>
          <p>
          To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. 
          Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example,
           I’ll read the guide and know that say, in a mile, I make a right turn at the junction..
          </p>
          <p><a href='/' className='align'>read more <BsArrowRight /></a></p>
          </div>

          <img src='./FigmaAssets/03.svg' alt='' />
        </div>
      </div>
    </div>
  )
}

export default HikeGear