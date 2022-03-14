import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";

//------get/:id 
const GetSpecificUrs = () => {
    const { id } = useParams(); //new version
        
    const [error,setError]=useState(null)
    const [isLoaded,setIsLoaded]=useState(false)
    const [user,setUser]=useState([])

    useEffect(()=>{
        getSpecificUser()
    },[])
    function getSpecificUser(){
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
    }

    if(error){return <div>Error: {error.message}</div>}
    if(!isLoaded){return <div>Loading...</div>}
   
   
    return (
        <>
        <div style={{display:'flex', justifyContent:'center'}}>
            { user.map(i=>(
                <div key={i.id}>
                    <h3>ID: {i.id}</h3>
                    <h3>First Name: {i.name}</h3>
                    <h3>Last Name: {i.familyname}</h3>
                </div>
            ))}
        </div>
        
        </>
    )
}

export default GetSpecificUrs

