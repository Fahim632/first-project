import React from 'react'
import profil from '../../assets/profil.png'
import { MdOutlineHome } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { ImExit } from "react-icons/im";



const Sidebar = () => {
    return (
        <div className='bg-[#1E1E1E] h-screen rounded-lg '>
            <div className=''>
                <img className='m-auto pt-[38px]'
                 src={profil} alt="#profile" />
            </div>
            <div className='relative mt-[74px] z-[1] py-[20px] after:content-[""] after:absolute after:top-0 after:left-[20px] after:w-full after:h-full after:bg-white after:z-[-1] after:rounded-l-2xl before:content-[""] before:absolute before:top-0 before:right-0 before:w-[10px] before:h-full before:bg-[#1E1E1E] before:rounded-l-2xl before:shadow-2xl '>
                <MdOutlineHome size={60} className='m-auto'/>
            </div>
            <div className='mt-[57px]'>
                <LuMessageCircleMore  size={60} className='m-auto text-white'/>
            </div>
            <div className='mt-[57px]'>
                <CiSettings   size={60} className='m-auto text-white'/>
            </div>
            <div className='mt-[57px]'>
                <ImExit   size={60} className='m-auto text-white'/>
            </div>
        </div>
    )
}

export default Sidebar
