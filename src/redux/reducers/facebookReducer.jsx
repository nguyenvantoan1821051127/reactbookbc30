//rxslice
import { createSlice } from '@reduxjs/toolkit'


//state.facebookReducer
const initialState = {
    arrComment:[
        {name:'toan',content:'hihi 123'},
        {name:'long',content:'hihi 456'}
    ]
}

const facebookReducer = createSlice({
  name: 'facebookReducer', //ten noi voi ten action
  initialState,
  reducers: {
    addComment:(state,action)=>{
        //buoc 1:lay du lieu action gui len
        const userComment=action.payload;
        //b2:cap nhat state
        //vi userComment.current 2 lan push la giong nhau vung nho =>clone ra truoc khi push
        state.arrComment.push({...userComment})
    }
  }
});

export const {addComment} = facebookReducer.actions

export default facebookReducer.reducer