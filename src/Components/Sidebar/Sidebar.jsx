import React from 'react'
import profil from '../../assets/profil.png'
import { MdOutlineHome } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { ImExit } from "react-icons/im";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { userinfo } from '../../slice/userSlice';




const Sidebar = () => {
    const data = useSelector((selector)=>(selector?.userinfo?.value))
    console.log(data,"sidbar");
    
    const auth = getAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlesingout = () => {
        console.log('ok cool');
        signOut(auth).then(() => {
            localStorage.removeItem("userinfo");
            dispatch(userinfo(null));
            setTimeout(()=>{
                navigate("/login");
            })
        }).catch((error) => {
            // An error happened.
        });

    }
    return (
        <div className='bg-[#1E1E1E] h-screen rounded-lg '>
            <div className=''>
                <img className='m-auto pt-[38px]'
                    src={profil} alt="#profile" />
            </div>
            <div className='flex justify-center  text-white text-lg mt-2 font-bold'>
                <p>{data?.user?.displayName || data?.user?.displayName}</p>
            </div>
            <div className='relative mt-[74px] z-[1] py-[20px] after:content-[""] after:absolute after:top-0 after:left-[20px] after:w-full after:h-full after:bg-white after:z-[-1] after:rounded-l-2xl before:content-[""] before:absolute before:top-0 before:right-0 before:w-[10px] before:h-full before:bg-[#1E1E1E] before:rounded-l-2xl before:shadow-2xl '>
                <MdOutlineHome size={60} className='m-auto' />
            </div>
            <div className='mt-[57px]'>
                <LuMessageCircleMore size={60} className='m-auto text-white' />
            </div>
            <div className='mt-[69px]'>
                <CiSettings size={60} className='m-auto text-white' />
            </div>
            <div className='mt-[300px]'>
                <ImExit onClick={handlesingout}
                    size={60} className='m-auto text-white cursor-pointer' />
            </div>
        </div>
    )
}

export default Sidebar
