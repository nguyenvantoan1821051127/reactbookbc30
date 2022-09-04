import React,{useState} from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {getProductDetailApi} from '../../../../redux/reducers/productReducer'

export default function Detail() {
    // const [productDetail,setProductDetail]=useState({});
    const params =useParams()
    const {productDetail} = useSelector(state=>state.productReducer);
    const dispatch=useDispatch();
    // console.log('productDetail',productDetail);

    
    useEffect(()=>{
        //call api
        let {id}=params;
        //buoc 1:Dispatch action thunk
        const action=getProductDetailApi(id);
        dispatch(action)
    },[params.id]);
  return (
    <div className='container'>
        <h3>Params Product-{params.id}</h3>
        <div className="row">
            <div className="col-4">
                <img src={productDetail.image} alt={productDetail.name} />
            </div>
            <div className="col-4">
                <h3>{productDetail.name}</h3>
            </div>
        </div>
        <h3>related Product</h3>
        <div className="row mt-2">
            {productDetail.relatedProducts?.map((item,index)=>{
                return <div className="col-3" key={index}>
                    <div className="card">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="card-body bg-dark text-white">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <NavLink className='btn btn-secondary' to={`/detail/${item.id}`}>view detail</NavLink>
                    
                </div>
                </div>
            })}
        </div>
    </div>
  )
}
