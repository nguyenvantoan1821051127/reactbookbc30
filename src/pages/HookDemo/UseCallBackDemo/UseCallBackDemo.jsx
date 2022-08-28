import React,{useState} from 'react'
import { useCallback } from 'react';
import Comment from './Comment';
export default function UseCallBackDemo() {
    const [like,setLike]=useState(1);
    const [number,setNumber]=useState(1);
    const renderLike=()=>{
        return <span>ban da tha {like}<i className='fa fa-heart text-danger'>!</i></span>
    }
    //userCallback dung de giu lai gia tri cua ham da render truoc do
    const callBackRenderLike=useCallback(renderLike,[like]);
  return (
    <div className="container">
        <h3>Number:{number}</h3>
        <button className='btn btn-danger' onClick={()=>{setNumber(number+1)}}>number</button>
        <div className='card w-25'>
            <img src="https://i.pravatar.cc"alt='avatar' />
            <div className="card-body">
                <p>like:{like}<i className='fa fa-heart text-danger'></i></p>
                <button className='btn btn-danger text-white'
                onClick={()=>{
                    setLike(like+1)

                }}><i className='fa fa-heart'></i></button>
            </div>
        </div>
        <Comment renderLike={callBackRenderLike}></Comment>
    </div>
  )
}
