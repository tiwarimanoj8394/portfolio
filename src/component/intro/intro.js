import React from 'react'
import './intro.css'
import bgimg from '../../assets/mohit.png'
//background img
import { Link } from 'react-scroll'
import btnimg from '../../assets/hireme.png'
// home file
const Intro = () => {
    return (
        <section id="intro">
            <div className="introcontent">
                <span className="hello"> Hello ! </span>
                <span className="introtext">
                    I am  </span>
                <span className="introname">
                   MOHIT
                </span>
                The PRoGRamErrrrorr
                <p className="intopara">
                <br />
                    I am a skilled web and softwere developer and want to make your design to a webpage
                </p>
                <Link><button className='btn'> <img src={btnimg} alt="button img" className='btnimg' />Hire Me</button></Link>
            </div>
            <img src={bgimg} alt="profile" className="bg" />
        </section>
    )
}

export default Intro