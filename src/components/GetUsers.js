import { type } from '@testing-library/user-event/dist/type'
import React,{useState,useEffect} from 'react'
import './GetUsers.css'
import { Link } from 'react-router-dom'
//------get all users
const GetUsers = () => {
    const [error,setError]=useState(null)
    const [isLoaded,setIsLoaded]=useState(false)
    const [user,setUser]=useState([])

    useEffect(()=>{
        fetch('https://travel-functionapp.azurewebsites.net/api/users')
        .then(res=>res.json() )
        .then(
            (data)=>{
                console.log(data)  // [{...},{...},{...},...]
                setUser(data)
                setIsLoaded(true)
            },
            (error)=>{
                setIsLoaded(true)
                setError(error)
            }
        )
    },[])
    if(error){return <div>Error: {error.message}</div>}
    if(!isLoaded){return <div>Loading...</div>}

    return (
        <>
            {user && user.map((i)=>(
                <div className="container" key={i.id}>
                    <Link to={`/user/${i.id}`}>
                        <div className="wrapper" >
                            <h3>ID: {i.id}</h3>
                            <h4>First Name: {i.name}</h4>
                            <p>Family Name: {i.familyname}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default GetUsers