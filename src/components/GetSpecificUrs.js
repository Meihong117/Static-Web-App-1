import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { getUserId } from './api';

//------get/:id 
const GetSpecificUrs = () => {
    const { id } = useParams(); //new version
        
    const [isLoaded,setIsLoaded]=useState(false)
    const [user,setUser]=useState([])

    useEffect(()=>{
        getSpecificUser()
    },[])
    const getSpecificUser=async()=>{
        let data=await getUserId(id)
            
        setUser(data)
        setIsLoaded(true)
    }

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

