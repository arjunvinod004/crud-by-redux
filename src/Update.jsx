import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateuser } from './UserReducer';
function Update() {
    const {id}=useParams();
    const navigate=useNavigate();
 const dispatch= useDispatch();
    const users= useSelector((state)=>state.users)
console.log(users)
const existinguser=users.filter(item=>item.id == id)
const {name,email}=existinguser[0];
const [uname,setName]=useState(name)
const [uemail,setEmail]=useState(email)
    const handlesubmit=(e)=>{
e.preventDefault();
dispatch(updateuser({id:id,name:uname,email:uemail}))
navigate('/')

    }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{width:'100vh'}}>
        <div className="w-50 border bg-secondary text-white p-4">
            <h3>update user</h3>
           <form action="" onSubmit={handlesubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input type="name " className='form-control' value={uname} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email " value={uemail} onChange={(e)=>setEmail(e.target.value)} className='form-control' />
            </div>

            <button className='btn btn-info mt-3'>Update</button>
           </form>
        </div>
    </div>
  )
}

export default Update