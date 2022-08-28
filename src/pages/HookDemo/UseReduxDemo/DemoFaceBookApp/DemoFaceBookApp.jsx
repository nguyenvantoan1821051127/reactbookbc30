//rfc
import React,{useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../../../redux/reducers/facebookReducer'


export default function DemoFaceBookApp() {
    const {arrComment}=useSelector(state=>state.facebookReducer)
    console.log(arrComment)
    const userComment=useRef({name:'',content:''})
    const dispatch=useDispatch();

    const hanldeChangeInput=(e)=>{
        //lay ra id, value cua the
        const {id,value}=e.target;
        userComment.current[id]=value;
        console.log(userComment.current)
    }
    const handleSubmit=(e)=>{
        //chan su kien reload cua browser
        e.preventDefault();
        //dua du lieu len redux

        //cach 1 tu tao action
        // const action={
        //     type:'facebookReducer/addComment',
        //     paload:123
        // }
        // dispatch(action);

        //cach 2 dung action creator cua reduxslice
        const action=addComment(userComment.current);
        dispatch(action);

    }

    const renderComment=()=>{
        return arrComment.map((comment,index)=>{
            return <div className="row" key={index}>
            <div className="col-2">
                <img src={`https://i.pravatar.cc?u=${comment.name}`}alt='avatar'className='w-100' />
            </div>
            <div className="col-10">
                <h3 className='text-danger'>{comment.name}</h3>
                <p>{comment.content}</p>
            </div>
        </div>
        })
    }

  return (
    <div className='container'>
        <h3>Demo facebook app</h3>
        <div className="card">
            <div className="card-header">
                {renderComment()}
            </div>
            <div className="card-body">
                <form className="frm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <p>name</p>
                        <input className='form-control' id='name' onInput={hanldeChangeInput}/>
                    </div>
                    <div className="form-group">
                        <p>content</p>
                        <input className='form-control' id='content' onInput={hanldeChangeInput}/>
                    </div>
                    <div className="form-group">
                        <button type='submit'className='btn btn-success'>send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
