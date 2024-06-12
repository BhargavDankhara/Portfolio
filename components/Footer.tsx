import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
    return (
        <footer className='w-full mb-[100px] md:mb-5 pb-10' id='contact'>
            
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready to take <span className='text-purple'>Your</span> digital presence to te next level?
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s  discuss how i can help you achive your goals.</p>
                <a href="mailto:bhargavdankhara17@gmail.com">
                    <MagicButton 
                        title='Let&apos;s get in touch'
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Bhargav Dankhara</p>
                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border border-black-300 rounded-lg'>
                           
                            <a href={profile.link}>
                            <img src={profile.img} alt="social media" 
                                width={20} height={20}
                            />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer