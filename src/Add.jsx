import React, { useState } from 'react'
import { adduser } from './UserReducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Add() {
    const dispatch = useDispatch();
const users= useSelector((state)=>state.users)
console.log(users)
const navigate=useNavigate();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const handlesubmit=(e)=>{
        e.preventDefault();
        dispatch(adduser({id:users[users.length-1].id+1,name,email}))
        navigate('/')
    }
  return (
    <div className='d-flex justify-content-center align-items-center' style={{width:'100vh'}}>
        <div className="w-50 border bg-secondary text-white p-4">
            <h3>add new user</h3>
           <form action="" onSubmit={handlesubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input type="name " className='form-control' value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email " value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' />
            </div>

            <button className='btn btn-info mt-3'>Submit</button>
           </form>
        </div>
    </div>
  )
}

export default Add