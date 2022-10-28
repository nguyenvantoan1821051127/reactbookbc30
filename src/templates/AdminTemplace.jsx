import React from 'react'

export default function AdminTemplace(props) {
  return (
    <div>
        <div className='d-flex' style={{minHeight:'100vh'}}>
            <div className="menu w-25 bg-dark text-light  pt-5">
                <nav className='d-flex flex-column'>
                    <a href='#'>Quản lý người dùng</a>
                    <a href='#'>Quản lý sản phẩm</a>
                </nav>
            </div>
            <div className='content w-75'>
                    <props.Component></props.Component>
                    {/* {props.Component} */}
            </div>
        </div>
    </div>
  )
}

