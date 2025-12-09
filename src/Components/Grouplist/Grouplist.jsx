import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import grouplist from '../../assets/grouplist.png'

const Grouplist = () => {
    return (
        <div className=' shadow-lg border-0 rounded-lg py-3 px-5 font-primary ml-[43px] mb-[43px] '>
            <div className='flex justify-between items-center'>
                <h2 className='w-[113px] font-semibold test-[20px] font-primary'>Groups List</h2>
                <BsThreeDotsVertical className=' font-semibold test-xl font-primary' />

            </div>
            <div className='px-1 h-[400px] overflow-y-scroll'>
                <div className='flex justify-between items-center border-b-2 border-[#4D4D4D] pb-[13px] mt-[17px] '>
                    <div className='flex items-center'>
                        <img src={grouplist} alt="" />
                        <div className='ml-[14px] '>
                            <h1 className='text-[18px] font-semibold font-primary'>Reunion</h1>
                            <p className='text-[#4D4D4D] text-[14px] font-medium font-primary'>today, 11:53pm</p>
                        </div>
                    </div>
                    <div>
                        <button className=' bg-black rounded-[6px] px-[22px] py-[3px] text-[20px] text-white font-semibold'>Join</button>
                    </div>
                </div>

                <div className='flex justify-between items-center border-b-2 border-[#4D4D4D] pb-[13px] mt-[17px] '>
                    <div className='flex items-center'>
                        <img src={grouplist} alt="" />
                        <div className='ml-[14px] '>
                            <h1 className='text-[18px] font-semibold font-primary'>Reunion</h1>
                            <p className='text-[#4D4D4D] text-[14px] font-medium font-primary'>today, 11:53pm</p>
                        </div>
                    </div>
                    <div>
                        <button className=' bg-black rounded-[6px] px-[22px] py-[3px] text-[20px] text-white font-semibold'>Join</button>
                    </div>
                </div>

                <div className='flex justify-between items-center border-b-2 border-[#4D4D4D] pb-[13px] mt-[17px] '>
                    <div className='flex items-center'>
                        <img src={grouplist} alt="" />
                        <div className='ml-[14px] '>
                            <h1 className='text-[18px] font-semibold font-primary'>Reunion</h1>
                            <p className='text-[#4D4D4D] text-[14px] font-medium font-primary'>today, 11:53pm</p>
                        </div>
                    </div>
                    <div>
                        <button className=' bg-black rounded-[6px] px-[22px] py-[3px] text-[20px] text-white font-semibold'>Join</button>
                    </div>
                </div>

                <div className='flex justify-between items-center border-b-2 border-[#4D4D4D] pb-[13px] mt-[17px] '>
                    <div className='flex items-center'>
                        <img src={grouplist} alt="" />
                        <div className='ml-[14px] '>
                            <h1 className='text-[18px] font-semibold font-primary'>Reunion</h1>
                            <p className='text-[#4D4D4D] text-[14px] font-medium font-primary'>today, 11:53pm</p>
                        </div>
                    </div>
                    <div>
                        <button className=' bg-black rounded-[6px] px-[22px] py-[3px] text-[20px] text-white font-semibold'>Join</button>
                    </div>
                </div>

                <div className='flex justify-between items-center border-b-2 border-[#4D4D4D] pb-[13px] mt-[17px] '>
                    <div className='flex items-center'>
                        <img src={grouplist} alt="" />
                        <div className='ml-[14px] '>
                            <h1 className='text-[18px] font-semibold font-primary'>Reunion</h1>
                            <p className='text-[#4D4D4D] text-[14px] font-medium font-primary'>today, 11:53pm</p>
                        </div>
                    </div>
                    <div>
                        <button className=' bg-black rounded-[6px] px-[22px] py-[3px] text-[20px] text-white font-semibold'>Join</button>
                    </div>
                </div>

                <div className='flex justify-between items-center border-b-2 border-[#4D4D4D] pb-[13px] mt-[17px] '>
                    <div className='flex items-center'>
                        <img src={grouplist} alt="" />
                        <div className='ml-[14px] '>
                            <h1 className='text-[18px] font-semibold font-primary'>Reunion</h1>
                            <p className='text-[#4D4D4D] text-[14px] font-medium font-primary'>today, 11:53pm</p>
                        </div>
                    </div>
                    <div>
                        <button className=' bg-black rounded-[6px] px-[22px] py-[3px] text-[20px] text-white font-semibold'>Join</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grouplist
