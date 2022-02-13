import React,{useState,useEffect} from 'react'

//------get all users
const GetUsers = () => {
    const [error,setError]=useState(null)
    const [isLoaded,setIsLoaded]=useState(false)
    const [user,setUser]=useState([])

    useEffect(()=>{
        fetch('https://travel-functionapp.azurewebsites.net/api/users')
        .then(res=>res.text() )
        .then(
            (data)=>{
                console.log(typeof data) //string
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
    
    if(user){
        return (
            <div>
                Get All User: {user}
            </div>
        )
    }
}

export default GetUsers
