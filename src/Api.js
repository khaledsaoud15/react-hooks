import React,{useState,useEffect} from 'react'
import './Api.css'



const Api = () => {
    const [state,setState]= useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((state)=>{
            setState(state)
        })
    },[])
    return (
        <>
            <div className="c">
                {state.map((item) =>{
                    return (
                        <div className="dd" key={item.id}>
                            <h1>{item.name}</h1>
                            <p>{item.username}</p>
                            <p>{item.address.street}</p>
                            <p>{item.suite}</p>
                            <p>{item.email}</p>
                            <p>{item.address.zipcode}</p>
                            <p>{item.phone}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Api
