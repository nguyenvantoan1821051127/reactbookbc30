//rfc
import React,{useState} from 'react'
import BaiTapChonXe from './BaiTapChonXe'

export default function UseStateDemo() {
  
      // useState la ham cua react cung cap
      //luu y: khong goi ham nay trong if else hay switch...
      //[giatriThayDoi,hamSetLaiGiaTriMoi]=useState (gia tri mac dinh ban dau)

  
  const [like,setLike]=useState(1)

  return (
    <div className='container'>
      <div className="card w-25">
        <img src="https://i.pravatar.cc?u=1" alt='avatar' />
        <div className="card-body">
          <h3>ho ten: Nguyen Toan</h3>
          <p>tuoi:18</p>
          <p>like:{like}</p>
          <button className='btn btn-danger' onClick={()=>{
            setLike(like+1)
          }}>like</button>
        </div>
        <hr />
      </div>
      <BaiTapChonXe></BaiTapChonXe>
    </div>
  )
}
