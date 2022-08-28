import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import useRoute from '../../../hooks/useRoute';

export default function DemoUseRoute() {
  const {navigate,searchParams,params}=useRoute('abc');
  const [search,setSearch]=searchParams;
  console.log({navigate,searchParams,params})
  return (
    
    <div>
        ffdsafda
    </div>
  )
}
