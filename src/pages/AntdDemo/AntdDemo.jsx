import React from 'react'
import {Button, DatePicker} from 'antd'


export default function AntdDemo(props) {
  return (
    <div className='container'>
        demo antd
        <DatePicker></DatePicker>
        <Button size='middle' block='true'>button click</Button>
    </div>
  )
}
