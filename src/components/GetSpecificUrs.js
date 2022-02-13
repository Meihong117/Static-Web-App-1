import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";

//------get/:id 
const GetSpecificUrs = () => {
    const { id } = useParams(); //new version
        
    const [error,setError]=useState(null)
    const [isLoaded,setIsLoaded]=useState(false)
    const [user,setUser]=useState([])

    useEffect(()=>{
        fetch('https://travel-functionapp.azurewebsites.net/api/user/'+id)
        .then(res=>res.text() )
        .then(
            (data)=>{
                console.log(data) //get data from backend
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
                Specific User Name: {user}
            </div>
        )
    }

}

export default GetSpecificUrs

// https://travel-functionapp.azurewebsites.net/api/user/{id}?