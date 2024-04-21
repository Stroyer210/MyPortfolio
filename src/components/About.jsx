import React from 'react'
import me from '../assets/me.jpeg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
      
        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>
                        About Me
                    </h2>
                    <p className='text-base lg:text-xl mt-5'>
                    I am 24 years old, I am originally from <span className='primary-color font-bold'>Colombia</span> but I live in Wisconsin, USA.
                    I do speak three languages: English, Spanish and portuguese. In Colombia I studied Electrical Engineering for a around two years but I did not see myself working on that field for rest of my life so I started to look for a different path.
                    After years of working in random jobs I finally decided to get into the <span className='primary-color font-bold'>web development</span> field because it is something that I love and I know I will be happy to do it because for me it is more than a job.
                    I am currently enrolled in the University of Wisconsin coding bootcamp. Let's work together.
                    </p>
                </div>
            </div>

            <img className=" mx-auto rounded-3xl py-8 md:py-0 shadow-pic" src={me} alt="me" width={300} height={300} />
        </div>

    </div>
  )
}

export default About
