import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    arrProduct:[],
    productDetail:{}
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getProductAction:(state,action)=>{
        //lay du lieu tu payload
        const arrProduct=action.payload;
        state.arrProduct=arrProduct;
    },
    //buoc 4 sau khi nhan duoc du lieu tu dispatch2
    getProductDetailAction:(state,action)=>{
        const productDetail=action.payload;
        state.productDetail=productDetail;
    }
  }
});
/**************action: {type,payload}*****************/
export const {getProductAction,getProductDetailAction} = productReducer.actions

export default productReducer.reducer

/**************action api*****************/
export const getProductApi=()=>{
    return async(dispatch2,getState)=>{
        // console.log(getState)
        try{
            const result=await axios({
                url:'https://shop.cyberlearn.vn/api/Product',
                method:'get'
            });
    
            const action=getProductAction(result.data.content)
            dispatch2(action)
    
        }catch(err){
            console.log({err})
        }
    }
}

export const getProductDetailApi=(id)=>{
    return async(dispatch)=>{
      //buoc 2;thuc thi thunk
        try{
            let result=await axios({
                url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
                method:'GET'
            });
            //buoc 3: sau khi co du lieu =>dispatch lan 2
            const action=getProductDetailAction(result.data.content)
            dispatch(action)
        }catch(err){
            console.log(err)
        }
    }
    }
