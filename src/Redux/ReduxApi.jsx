import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../features/ApiSlice';

export default function ReduxApi() {
    const dispatch = useDispatch();

    useEffect(() => {
          dispatch(fetchApi())
    }, [])

    const record = useSelector((state) => {
        return state.apikey
    })

  return (
    <div>
        <center><h1>ReduxApi</h1></center>
        {
            record.data &&
            record.data.map((e,i) => {
                return <ul key={i}>
                       <li>{e.title}</li>
                       <li>{e.pirce}</li>
                </ul>
            })

        }
    
    </div>
   
  )
}
