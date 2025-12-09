
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import grouplist from '../../assets/grouplist.png'
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from 'react-redux';

const UserList = () => {
    const data = useSelector((selector) => selector?.userinfo?.value?.user)
    console.log(data.uid, "userUid");

    const db = getDatabase();
    const [userlist, setuserlist] = useState([]);

    useEffect(() => {
        const userRef = ref(db, 'users');
        onValue(userRef, (snapshot) => {
            let arr = []
            console.log(snapshot.val(), "sldkjfls");
            snapshot.forEach((item) => {
                // console.log(item.key, 'item');
                if (data?.uid !== item.key) {
                    arr.push(item?.val());
                }

            })
            setuserlist(arr);

        })
    }, [])
    console.log(userlist,"hgvhg");

    const handleUser = (item) => {
        console.log("ok", item);
        set(push(ref(db, "FriendRequest/")), {
            senderName: data.displayName,
            receiverName: item.username
        });
    }

    return (
        <div className=' shadow-lg border-0 rounded-lg py-3 px-5 font-primary ml-[43px] mb-[43px] '>
            <div className='flex justify-between items-center'>
                <h2 className='w-[113px] font-semibold test-[20px] font-primary'>User List</h2>
                <BsThreeDotsVertical className=' font-semibold test-xl font-primary' />

            </div>
            <div className='px-1 h-[400px] overflow-y-scroll'>
                {
                    userlist.map((user) => (
                        <div className='flex justify-between items-center border-b-2 border-[#4D4D4D] pb-[13px] mt-[17px] '>
                            <div className='flex items-center'>
                                <img src={user} alt="" />
                                <div className='ml-[14px] '>
                                    <h1 className='text-[18px] font-semibold font-primary'>{user.username}</h1>
                                    <p className='text-[#4D4D4D] text-[14px] font-medium font-primary'>{user.email}</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleUser(user)}
                                    className=' bg-black rounded-[6px] px-[22px] py-[3px] text-[20px] text-white font-semibold'>+</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default UserList
