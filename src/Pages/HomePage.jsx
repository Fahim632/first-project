import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Grouplist from '../Components/Grouplist/Grouplist'
import Friends from '../Components/Friends/Friends'
import UserList from '../Components/UserList/UserList'
import FriendRequest from '../Components/FriendRequest/FriendRequest'
import MyGroup from '../Components/MyGroup/MyGroup'
import BlockedUsers from '../Components/BlockedUsers/BlockedUsers'

const HomePage = () => {
  const auth = getAuth();

  const navigate = useNavigate()
  const data = useSelector(state => state.userinfo.value)
  console.log(data, "data");

  const [verify, setverify] = useState(false)
  const [loading,setloading] = useState(true)
  useEffect(() => {
    if (!data) {
      navigate("/login")
    }
  })
  onAuthStateChanged(auth, (user) => {
    // console.log(user,"homepage");
    
    if (user.emailVerified) {
      setverify(true);
    } 
    setloading(false);
  });
 if(loading){
  return " "
 }

  return (
    <>
      {
        verify ?
        <div>
          <div className='flex p-[35px]'>
            <div className='w-[186px]'>
              <Sidebar />
            </div>
            <div className='w-[427px]'>
              <Grouplist/>
              <FriendRequest/>
            </div>
            <div className='w-[427px]'>
              <Friends/>
              <MyGroup/>
            </div>
            <div className='w-[427px]'>
              <UserList/>
              <BlockedUsers/>
            </div>
          </div>
        </div>
        :
        <div className='bg-primary w-full h-screen flex justify-center items-center text-white font-primary'>
            <div>
              <p className='font-bold text-4xl'>please verify your email</p>
              <div className='text-center m-auto mt-[40px]'>
                <Link to={"/login"}
                  // onClick={handlregistration}
                  className=" font-bold mt-10 py-[14px] px-5   text-white font-secondary bg-yellow-400 rounded-[8px]" >
                  Back to Login 
                </Link>
              </div>

            </div>
          </div>
      }
    </>
  )
}

export default HomePage
