import React from 'react'
import avatarImg from "./../assets/Individual-sessions-1-removebg-preview.png";
import TextChange from './TextChange';

const Home = () => {
    return (
        <div className='text-white flex w-full justify-between items-start p-10 md:p-20 '>

            <div className='md:w-2/4 md:pt-10 '>
                <h1 className='text-3xl md:text-6xl font-bold leading-normal tracking-tighter'><TextChange /></h1>
                <p className='text-sm md:text-2xl tracking-tight'>
                    An aspiring Software Engineer and Full Stack Developer
                    Currently in my final year of B.Tech (CSE), I build responsive and dynamic web applications using the MERN stack, focusing on clean code, real-world functionality, and modern UI/UX design.
                </p>
               
            </div>

            <div>
                <img className="" src={avatarImg} alt="" />
            </div>


        </div>
    )
}

export default Home
