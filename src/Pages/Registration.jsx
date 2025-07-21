import React from 'react'
import { useState } from "react";
import ragistration from "../assets/registration.png"
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { sendEmailVerification } from "firebase/auth";
import { EmailAuthCredential } from 'firebase/auth/web-extension';
import { ToastContainer, toast } from 'react-toastify';
import { SiJbl } from 'react-icons/si';
import { ColorRing } from 'react-loader-spinner'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";





const Registration = () => {
      const auth = getAuth();
      const navigate= useNavigate()

      const[email,setemail]=useState("")
      const[fullname,setfullname]=useState("")
      const[password,setpassword]=useState("")
      const[show,setshow]=useState(false)
      const [loading, setLoading] = useState(false);

    
      // const[test,settest]=useState('')
      const[emailerr,setemailerr]= useState("")
      const[fullnameerr,setfullnameerr]=useState("")
      const[passworderr,setpassworderr]=useState("")
    
      const handlemail = (e) =>{
       setemail(e.target.value);
       setemailerr("")
      }
      const handlfullname= (e)=>{
        setfullname(e.target.value);
        setfullnameerr("")
      }
      const handlpassword= (e)=>{
          setpassword(e.target.value);
          setpassworderr("")
      }
      const handlregistration= () =>{
        
        if(!email){
          setemailerr("Please enter your email");
        }else{
          if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
             setemailerr("tor email valid nah");
            
          }
        }
    
    
    
        if(!fullname){
          setfullnameerr("Please enter your name");
          
        }
    
        if (!password) {
          setpassworderr("Please enter your password");
        } else {
          const pwdPattern = /^(?=.{6,})((?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*\d)|(?=.*[A-Z])(?=.*\d)).+$/;
          if (!pwdPattern.test(password)) {
            setpassworderr("Password must be ≥6 chars and include a mix of upper/lower or letters & numbers");
          }
        }
            setLoading(true);

        if( email && fullname && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
          createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            sendEmailVerification(auth.currentUser);
            toast.success("Registration successful! Please verify your email.");
            setemail("");
            setfullname("");
            setpassword("");

            setTimeout(() => {
              setLoading(false);
              navigate("/login");
            }, 2000);
          })
          .catch((error) => {
            setLoading(false);
            const err = error.message;
            if (err.includes("auth/email-already-in-use")) {
              setemailerr("This email already exists");
            } else {
              toast.error("Registration failed. Try again.");
            }
          });
          // console.log("Registration done");
          
        }
    
        
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
                <h1 className="font-secondary font-bold text-[#11175D] text-[34px]">Get started with easily register</h1>
                <p className="font-secondary text-[20.6px] text-black/50 w-[319px] mt-[13px]">Free register and you can enjoy it</p>
  
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
  
                    <div className="relative my-[40px]">
                      <input onChange={handlfullname}
                      value={fullname}
                      type="text" 
                      className="py-[20px] px-[52px] border-black/40 border-2 w-[368px] rounded-[8.6px] focus:outline-0 " 
                      placeholder="Enter your full name"
                      />
                      <p className="text-red-500">{fullnameerr}</p>
                      <label className="absolute top-[-12px] left-[52.6px] bg-white px-[15px] font-secondary font-semibold tracking-[4px] text-black/50">Full name</label>
                      
                    </div>
  
                    <div className="relative w-[368px]">
                      <input onChange={handlpassword}
                      value={password}
                      type={show ? "text":"password"} 
                      className="py-[20px] px-[52px] border-black/40 border-2 w-full rounded-[8.6px] focus:outline-0 " 
                      placeholder="Enter your password"
                      />
                      {
                        show ?
                        <FaEyeSlash onClick={()=> setshow(!show)} className="absolute top-[25px] right-7" />
                        :
                        <FaEye onClick={()=> setshow(!show)} className="absolute top-[25px] right-7" />
  
                      }
  
                      <p className="text-red-500">{passworderr}</p>
                      <label className="absolute top-[-12px] left-[52.6px] bg-white px-[15px] font-secondary font-semibold tracking-[4px] text-black/50">Password</label>
                      
                    </div>
  
                    <div className="mt-[40px] w-[368px]">
                      {
                        loading ?
                          (<ColorRing
                          visible={true}
                          height="80"
                          width="80"
                          ariaLabel="color-ring-loading"
                          wrapperStyle={{}}
                          wrapperClass="color-ring-wrapper"
                          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                          />)

                        :
                        (<button 
                        onClick={handlregistration}
                        className="py-[20px]  text-white font-secondary bg-[#1E1E1E] rounded-[86px] w-full" >
                        Sign up
                        </button>)
                      }
                        
                        {/* <button 
                          onClick={handlregistration}
                          disabled={loading}
                          className={`py-[20px] text-white font-secondary rounded-[86px] w-full flex items-center justify-center gap-2 transition-all duration-300 ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#1E1E1E]"}`}
                        >
                          {loading && (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          )}
                          {loading ? "Loading..." : "Sign up"}
                        </button> */}

  
                        
                          <p className="font-sans text-[13.34px] w-[218px] text-center m-auto mt-[16px]  ">Already  have an account ?
                          <Link to="/login" className="text-[#EA6C00] font-bold">Sign In</Link>
                          </p>
                        
                    </div>
                </div>
              </div>
              <div className="w-[45%]">
                  <img className="w-full h-screen object-cover"
                   src={ragistration} alt="" />
              </div>
            </div>
        </div>
      </>
    ) 
}

export default Registration
