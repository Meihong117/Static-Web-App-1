import React,{useState,useEffect} from 'react'
import './GetUsers.css'
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
                console.log(data) 
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
    
    // for(let i=0;i<user.length;i++){
    //     console.log(user[i])
        
        return (
            <>
                Get All User: {user}
                {user.map((i,index)=>{
                    <div className="container">
                    <div className="wrapper">
                        <h3>{i.id}</h3>
                        <h4>{i.name}</h4>
                        <p>{i.familyname}</p>
                    </div>
                </div>
                })}
                
            </>
        )
    // }
}

export default GetUsers
