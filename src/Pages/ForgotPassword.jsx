import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail, } from "firebase/auth";
import { Link } from 'react-router';


const ForgotPassword = () => {
    const auth = getAuth();

    const [email, setemail] = useState("");
    const[emailerr,setemailerr]= useState("")
    const handlemail = (e) => {
        setemail(e.target.value);
        setemailerr("")
    }
    const handlForgotPassword = () => {
        if (!email) {
            setemailerr("Please enter your email");
        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setemailerr("your email don't valid");

            }
        }
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then((user) => {
                    console.log(user);
                    
                    console.log("Send Email");
                    
                }) 
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });

        }
    }


    return (
        <div className="bg-[#1E1E1E] h-screen">
            <div className='flex justify-center items-center'>
                <div className='w-[700px] bg-white mt-[300px] p-10 rounded'>
                    <h1 className='font-primary font-bold text-2xl'>Forgot Password</h1>
                    <div className="relative w-[330px] mt-[30px]">
                        <input
                            onChange={handlemail}
                            value={email}
                            type="text"
                            className="py-[20px] px-[52px] border-black/40 border-2 w-[368px] rounded-[8.6px] focus:outline-0 "
                            placeholder="Enter your email address"
                        />
                        <p className="text-red-500">{emailerr}</p>
                        <label className="absolute top-[-12px] left-[52.6px] bg-white px-[15px] font-secondary font-semibold tracking-[4px] text-black/50">Email Address</label>

                        <div className='mt-[15px]'>
                        <Link to={"/login"}
                            // onClick={handlregistration}
                            className="py-[10px] px-4   text-white font-secondary bg-[#1E1E1E] rounded-[8px]" >
                            Back to Login
                        </Link>
                        <button
                            onClick={handlForgotPassword}
                            className=" ml-[10px] py-[10px] px-4   text-white font-secondary bg-[#1E1E1E] rounded-[8px] cursor-pointer" >
                            Reset
                        </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
