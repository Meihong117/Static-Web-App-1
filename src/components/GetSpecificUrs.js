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
        .then(res=>res.json() )
        .then(
            (data)=>{
                //console.log(data) 
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
            {user && user.map(i=>(
                <div key={i.id}>
                    <h3>{i.id}</h3>
                    <h3>{i.name}</h3>
                    <h3>{i.familyname}</h3>
                </div>
            ))}
        </>
    )
}

export default GetSpecificUrs

