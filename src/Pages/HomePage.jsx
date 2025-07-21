import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const HomePage = () => {
  const auth = getAuth();

  const navigate = useNavigate()
  const data = useSelector(state => state.userinfo.value)
  console.log(data, "data");

  const [verify, setverify] = useState(false)
  useEffect(() => {
    if (!data) {
      navigate("/login")
    }
  })
  onAuthStateChanged(auth, (user) => {
    console.log(user,"homepage");
    
    if (user.emailVerified) {
      setverify(true)
    } 
  });


  return (
    <>
      {
        verify ?
        <div>
          <div className='flex p-[35px]'>
            <div className='w-[186px]'>
              <Sidebar />
            </div>
            <div className='w-[427px]'>uiyguogyog</div>
            <div className='w-[344px]'>uigyougyj</div>
            <div className='w-[344px]'>ogyuouigyou</div>
          </div>
        </div>
        :
        <p>Please verify your email</p>
      }
    </>
  )
}

export default HomePage
