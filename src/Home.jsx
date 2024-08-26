import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteuser } from './UserReducer';
// import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
    const users= useSelector((state)=>state.users)
     console.log(users)
     const dispatch = useDispatch();
     const handledelete=(id,e)=>{
       
        alert('are you want to delete this user')
dispatch(deleteuser({id:id}))
e.preventDefault();
     }
    
  return (
    <div className='container'>
<Link to={'/add'}><button className='btn btn-success'>Add +</button></Link> 
<table className='table table-dark table-hover mt-4'>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
        
    </thead>
    <tbody>
        {users.map((item,index)=>(
            <tr>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>
                   <Link to={`/update/${item.id}`}><button className=' btn btn-primary mx-2'><i class="bi bi-pencil"></i></button></Link> 
           <button className='btn btn-danger mx-2' onClick={()=>handledelete(item.id)}><i class="bi bi-trash3"></i></button>
                </th>
            </tr>
        ))}
    </tbody>
</table>
    </div>
  )
}

export default Home