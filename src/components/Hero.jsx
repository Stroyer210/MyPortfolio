import React from 'react'
import heroImage from '../assets/MyFinishedPhoto.png'
import { TypeAnimation } from 'react-type-animation'
import Skills from './Skills'
import { Link} from 'react-router-dom';

const PDF_FILE_URL = 'Resume.pdf'
const Hero = () => {
    const downloadFileAtURL = (url) => {
        const fileName = 'Resume.pdf'
        const aTag = document.createElement('a')
        aTag.href=url
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }
  return (
    <div>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black dark:bg-white'>

        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
            <img className="shadow stay-shadow"src={heroImage} alt="myimage" />
        </div>

        <div className='col-span-2 px-5 my-auto'>

            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span> <br/>
                <TypeAnimation
                sequence={[
                    "Front-end Dev",
                    1000,
                    "Web-designer",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat= {Infinity}
                />
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is Sergio Ardila-Alvarado and I have 1+ years experience in web development. 
            </p>

            <div className='my-8 text-center md:text-left'>
                <button onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}} className='shadow-button px-6 py-3 rounded-xl mr-4 bg-gradient-to-br from-yellow-500 to-red-600 text-white'>Download CV</button>
                <Link to="/Contact" className='shadow-button px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-yellow-500 to-red-600 text-white hover:border-none'>
                    Contact
                </Link>
            </div>
        </div>
        
    </div>
        <div className='md:mb-20'>
            <Skills />
        </div>
    </div>
    
  )
}

export default Hero
