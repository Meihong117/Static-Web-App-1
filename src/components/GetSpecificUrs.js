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
                console.log(data) 
                setUser(data.res)
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

    // let itemsToRender;  
    // if (user) {    
    //     itemsToRender = user.map(item => {      
    //         return <div>{item.name}</div>;    
    //     });  
    // }
    return (
        
            <div>
                {user && user.map((i)=>(
                    <div className="container">
                        <div className="wrapper">
                            <h3>{i}</h3>
                            {/* <h4>{i.name}</h4> */}
                            {/* <p>{i.familyname}</p> */}
                        </div>
                    </div>
                ))}
                
                
            </div>
       
    )
}

export default GetSpecificUrs

// https://travel-functionapp.azurewebsites.net/api/user/{id}?