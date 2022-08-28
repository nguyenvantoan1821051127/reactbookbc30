import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom";
export default function ReactForm(props) {
const navigate = useNavigate();
// console.log(props)
    const userLoginRef = useRef({
        userName:'',
        passWord: ''
    });
    const handleChange = (e) => {
    const {value,id} = e.target;
    userLoginRef.current[id] = value;
    console.log(userLoginRef.current);
}
    const handleSubmit = async (e) => {
        e.preventDefault(); //Chặn reload browser
        console.log(userLoginRef.current);
        let promise = new Promise ((resolve,erroFunction) => {
            setTimeout(()=> {
                console.log('dang nhap api')
                if(userLoginRef.current.userName ==='doquangkhai'){
                    resolve('Đăng nhập thành công');
                }
                else{
                    erroFunction('dang nhap that bai')
                }
                
        }, 3000);
})
    promise.then(result =>{
        console.log(result);
        //neu thanh cong chuyen huong ve home
        navigate('/');
    })
    promise.catch(err=>{
        navigate('/login')
    })

}
return (
    <div>
        <form className='container' onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className='form-group'>
                <p>username</p>
                <input className='form-control' id="userName" onChange={handleChange} />
            </div>
            <div className='form-group'>
                <p>password</p>
                <input className='form-control' id="passWord" onChange={handleChange} />
            </div>
            <div className='form-group'>
                <button className='btn btn-success'>submit</button>
            </div>
        </form>
    </div>
)
}