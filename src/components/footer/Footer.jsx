import React from 'react'
import { blogData } from '../../data';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
       <div className="footer-container">
           <div className="left-footer">
               <img src='./FigmaAssets/Logo.svg' alt='' />
               <p>
               Get out there & discover your next slope, mountain & destination!
               </p>
            </div>

               <section className='middle-footer'>
                   <div>
                       <h4>More on The Blog</h4>
                       {blogData.map((usage)=>{
                           const {id, text} = usage;
                        return (
                           <ul key={id}>
                             <li><a href='/'>{text}</a></li>
                          </ul>
                  )
          })}
                   </div>
               </section>

            <section className='right-footer'>
                <h4>More on MNTN</h4>
                <ul>
                    <li><a href="/">The team</a></li>
                    <li><a href="/">Jobs</a></li>
                    <li><a href="/">Press</a></li>
                </ul>
            </section>
           </div>

           <span></span>
    </footer>
  )
}

export default Footer