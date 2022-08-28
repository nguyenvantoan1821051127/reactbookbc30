//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = 1;

const numberReducer = createSlice({
  name: 'numberReducer',//ten reducer =>ghep tap thanh ten action
  initialState, //gia tri ban dau cua state
  reducers: { //ung voi ham reducer khi truoc khai bao
    changeNumber:(state,action)=>{
        state=action.payload;
        return state;
    }
  }
});

export const {changeNumber} = numberReducer.actions

export default numberReducer.reducer

