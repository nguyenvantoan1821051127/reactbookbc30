import React,{useState} from 'react'
export default function BaiTapChonXe() {

  const [img,setImg]=useState('./img/products/red-car.jpg')
  
  const handleChangerColor=(color)=>{
    setImg(`./img/products/${color}-car.jpg`)
  }
  return (
    <div>
        <h3>Bai tap chon xe</h3>
        <div className="row">
            <div className="col-6">
                <img src={img} alt='car' className='w-100' />
            </div>
            <div className="col-6">
                <button className='btn mx-2 ' style={{background:'red',color:'#fff'}}
                onClick={()=>{
                    handleChangerColor('red')
                }}>red</button>
                <button className='btn mx-2 ' style={{background:'silver',color:'#fff'}}
                onClick={()=>{
                    handleChangerColor('silver')
                }}>silver</button> 
                <button className='btn mx-2 ' style={{background:'black',color:'#fff'}}
                onClick={()=>{
                    handleChangerColor('black')
                }}>black</button> 
                <button className='btn mx-2 ' style={{background:'#eee',color:'#fff'}}
                onClick={()=>{
                    handleChangerColor('steel')
                }}>steel</button>  
            </div>
        </div>
    </div>
  )
}
