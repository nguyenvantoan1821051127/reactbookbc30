import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

export default function DemoUseSearchParams(props) {

  let keywordRef=useRef('');
  let timeoutRef=useRef({});
  let [searchParams,setSearchParams]=useSearchParams();
  let [arrProduct,setArrProduct]=useState([]);
  const getProductByKeyword=async()=>{
        try{
            //lay keyword tu tren url: url?keyword=abc&type=nike
            let keyword=searchParams.get('keyword');
            if(keyword.trim() !== '' && keyword != null){
                let result=await axios({
                    url:'https://shop.cyberlearn.vn/api/Product?keyword='+keyword,
                    method:'GET'
                })
                console.log(result.data.content);
                setArrProduct(result.data.content);
                clearTimeout(timeoutRef.current);
            }else{
                setArrProduct([]);
            }
            
        }catch(err){
            console.log(err)
        }
  }
  
  useEffect(()=>{
    getProductByKeyword();
  },[keywordRef.current]);
  
  const handleChange=(e)=>{
    //moi lam nguoi dung go phim => dua vao keywordRef
    keywordRef.current=e.target.value;
    timeoutRef.current=setTimeout(()=>{
        setSearchParams({keyword:keywordRef.current})
    },1000)
  }
  const handleSublit=(e)=>{
    e.preventDefault();
    //dua du lieu keyword nguoi dung nhap len url
    setSearchParams({keyword:keywordRef.current});
    
  }
  const renderProductByKeyword=()=>{
    return arrProduct.map((item,index)=>{
        return <div className="col-3"key={index}>
            <img src={item.image} alt='...' className='w-100' />
            <div className="card-body bg-dark text-white">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <NavLink className='btn btn-success'to={`/detail/${item.id}`}>view detail</NavLink>
            </div>
        </div>
    })
  }

  return (
    <form className="container" onSubmit={handleSublit}>
      <h3>Search</h3>
      <div className="form-group">
        <p>Nhập từ khoá</p>
        <div className="input-group-prepend">
          <input
            className="form-control"
            id="keywordRef"
            onChange={handleChange}
          />
          <button className="btn bg-dark text-white">Search</button>
        </div>
      </div>
      <div className="mt-2">
        <p>Kết quả tìm kiếm</p>
        <div className="row">
            {renderProductByKeyword()}
        </div>
      </div>
    </form>
  );
}