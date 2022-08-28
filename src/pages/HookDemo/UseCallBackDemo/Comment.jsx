import React,{memo} from 'react'

 function Comment(props) {
  return (
    <div className='mt-2'>
        {props.renderLike()}
        <textarea className='form-control w-50'></textarea><br />
        <button className='btn btn-success'>gui</button>
    </div>
  );
}
export default memo(Comment)