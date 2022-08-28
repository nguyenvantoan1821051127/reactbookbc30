import React,{useState} from 'react'
import { useRef } from 'react';

//useState lay gia tri input =>khi co tinh nang chinh load lai form tren cung giao dien
//useReef su dung doi voi form khong bao gom chinh sua load lai
//useRef:luu lai gia tri sau cac lan render



export default function UseRefDemo(prod) {
    const [number,setNumber]=useState(1);
    const userLoginRef=useRef({
        username:'',
        password:'',
    });

    const handleChange=(e)=>{
        let{id,value}=e.target;
        userLoginRef.current[id]=value;
        // setUserLogin({
        //     ...userLogin,
        //     [id]:value
        // })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(userLoginRef.current);
    }


  return (
    <form className='container'onSubmit={handleSubmit}>
        <h3>login</h3>
        <div className="form-group">
            <p>username</p>
            <input className='form-control' id='username' onInput={handleChange} />
        </div>
        <div className="form-group">
            <p>password</p>
            <input className='form-control' id='password'type='password' onInput={handleChange}/>
        </div>
        <div className="form-group">
            <button className='btn btn-danger'type='submit'>login</button>
        </div>
    </form>
  )
}
