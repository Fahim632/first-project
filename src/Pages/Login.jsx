import React from 'react'
import { useState } from "react";
import google from "../assets/google.png"
import login from "../assets/login.jpg"
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userinfo } from '../slice/userSlice';



const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const navigate= useNavigate()
  const dispatch = useDispatch();

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [show, setshow] = useState(false)

  const [emailerr, setemailerr] = useState("")
  const [passworderr, setpassworderr] = useState("")

  const handlemail = (e) => {
    setemail(e.target.value);
    setemailerr("")
  }
  const handlpassword = (e) => {
    setpassword(e.target.value);
    setpassworderr("")
  }
  const handllogin = () => {

    if (!email) {
      setemailerr("Please enter your email");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setemailerr("your email don't valid");

      }
    }


    if (!password) {
      setpassworderr("Please enter your password");
    } else {
      const pwdPattern = /^(?=.{6,})((?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*\d)|(?=.*[A-Z])(?=.*\d)).+$/;
      if (!pwdPattern.test(password)) {
        setpassworderr("Password must be ≥6 chars and include a mix of upper/lower or letters & numbers");
      }
    }

    if (email && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {

      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          dispatch(userinfo(user))
          toast.success("login successfully done")
          localStorage.setItem("userinfo",JSON.stringify(user))
          console.log(user);
          setTimeout(()=>{
            navigate("/homepage")
          },2000)


          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode.includes("auth/invalid-credential")) {
            toast.error("please Give your valid email & password");

          }

        });
      // console.log("Login successfully done");
      // setemail("");
      // setpassword("");
    }


  }
  const handlgooglesignin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((user) => {
        console.log(user);
        console.log("success");
        


      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);

      });
  }

  return (
    <>
      <div className="">
        <div className="flex">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          // transition={Bounce}
          />
          <div className="w-[55%] pt-[160px] pl-[220px]">
            <h1 className="font-secondary font-bold text-[#11175D] text-[34px]">Login to your account!</h1>
            <div className='w-[250px] '>
              <div onClick={handlgooglesignin} className='flex justify-center py-[22px] border-1 border-black/40 rounded-[8.5px] mt-[29px]'>
                <img src={google} alt="" />
                <p className='ml-3'>Login with Google</p>
              </div>

            </div>
            <div className="mt-[61.5px]">
              <div className="relative">
                <input
                  onChange={handlemail}
                  value={email}
                  type="text"
                  className="py-[20px] px-[52px] border-black/40 border-2 w-[368px] rounded-[8.6px] focus:outline-0 "
                  placeholder="Enter your email address"
                />
                <p className="text-red-500">{emailerr}</p>
                <label className="absolute top-[-12px] left-[52.6px] bg-white px-[15px] font-secondary font-semibold tracking-[4px] text-black/50">Email Address</label>

              </div>

              <div className="relative w-[368px] mt-10">
                <input onChange={handlpassword}
                  value={password}
                  type={show ? "text" : "password"}
                  className="py-[20px] px-[52px] border-black/40 border-2 w-full rounded-[8.6px] focus:outline-0 "
                  placeholder="Enter your password"
                />
                {
                  show ?
                    <FaEyeSlash onClick={() => setshow(!show)} className="absolute top-[25px] right-7" />
                    :
                    <FaEye onClick={() => setshow(!show)} className="absolute top-[25px] right-7" />

                }

                <p className="text-red-500">{passworderr}</p>
                <label className="absolute top-[-12px] left-[52.6px] bg-white px-[15px] font-secondary font-semibold tracking-[4px] text-black/50 ">Password</label>

              </div>

              <div className="mt-[40px] w-[368px]">
                <button
                  onClick={handllogin}
                  className="py-[20px]  text-white font-secondary bg-[#1E1E1E] rounded-[8.7px] w-full" >
                  Login to Continue
                </button>


                <p className="font-sans text-[13.34px] w-[218px] text-center m-auto mt-[16px]  ">Don’t have an account ? <Link to="/registration" className="text-[#EA6C00] font-bold">Sign up</Link>
                </p>
                <div className="text-center m-auto">
                  <Link to={"/forgotpassword"} className="font-sans font-bold text-[13.34px] w-[218px]  mt-[5px]  ">Forget password ?</Link>
                </div>

              </div>
            </div>
          </div>
          <div className="w-[45%]">
            <img className="w-full h-screen object-cover"
              src={login} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
