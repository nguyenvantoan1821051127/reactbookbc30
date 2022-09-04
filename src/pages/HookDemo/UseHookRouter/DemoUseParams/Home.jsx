import React,{useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {getProductAction, getProductApi} from '../../../../redux/reducers/productReducer'


export default function Home() {
    // const [arrProduct,setArrProduct]=useState([])
    const navigate=useNavigate();
    //su dung useSelector lay du lieu tu redux ve
    const {arrProduct} = useSelector(state=>state.productReducer);
    const dispatch=useDispatch();

    //call api
    const getAllProductApi=()=>{
        const actionThunk=getProductApi();

        dispatch(actionThunk)
    }
    //sau khi lay du lieu thi setState cho arrProduct
            // setArrProduct(result.data.content)
            
            /**
             * dang 1:action la objext
             * action={
             * type:'',
             * payload:''
             * }
             * 
             * dang 2:action la callback function
             * action=(dispatch2=>{
             *      call api a
             *      call api b
             * action={
             *  type:'',
             *  payload:''
             * }
             * dispatch2(action)
             * })
             */

    useEffect(()=>{
        getAllProductApi();
    })

    const renderProduct=()=>{
        return arrProduct.map((item,index)=>{
            return <div className="col-4 mt-2" key={index}>
                <div className="card">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="card-body bg-dark text-white">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <NavLink className='btn btn-secondary' to={`/detail/${item.id}`}>view detail</NavLink>
                    <button className='btn btn-success mx-2'onClick={()=>{
                        navigate(`/detail/${item.id}`)
                    }}>detail</button>
                </div>
            </div>
        })
    }

  return (
    <div className='container'>
        <div className="text-center">
            shope apps
        </div>
        <div className="row">
            {renderProduct()}
        </div>
    </div>
  )
}
