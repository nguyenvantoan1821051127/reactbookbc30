import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'



export default function Login(props) {
    // console.log(frm.values)
    //lay du lieu tu form
    const frm=useFormik({
        initialValues:{
            //du lieu ban dau mac dinh cua form
            email:'',
            password:''
        },
        validationSchema:Yup.object().shape({
            //chech validation
            email:Yup.string().required('email khong duoc bo trong').email('email khong dung dinh dang'),
            password:Yup.string().required('password khong duoc bo trong').min(6,'pass tu 6 den 32 ky tu!').max(32,'pass tu 6 den 32 ky tu!')
            // .matches(/cybersoft/,'password khong dung dinh dang!')
        }),
        onSubmit:(values)=>{
            console.log(values);
        }
    })
  return (
    <form className='container' onSubmit={frm.handleSubmit}>
        <h3>Login</h3>
        <div className='form-group'>
            <p>Email</p>
            <input className='form-control' id='email'name='email' onChange={frm.handleChange} onBlur={frm.handleBlur}/>
            {frm.errors.email ? <span className='text-danger'>{frm.errors.email}</span>:'' }
        </div>
        <div className='form-group'>
            <p>password</p>
            <input className='form-control' id='password'name='password'onChange={frm.handleChange} onBlur={frm.handleBlur}/>
            {frm.errors.password ? <span className='text-danger'>{frm.errors.password}</span>:'' }
        </div>
        <div className='form-group'>
            <button className='btn btn-success'type='submit'>login</button> 
        </div>
    </form>
  )
}
