import React,{useState,useEffect} from 'react'


const GetSpecificUrs = (props) => {
    console.log(props) 
    var id=props.match.params.id
        
    const [error,setError]=useState(null)
    const [isLoaded,setIsLoaded]=useState(false)
    const [user,setUser]=useState([])

    useEffect(()=>{
        fetch('https://travel-functionapp.azurewebsites.net/api/user/'+id)
        .then(res=>res.text() )
        .then(
            (data)=>{
                console.log(data) //first
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
                username: {user}
            </div>
        )
    }

}

export default GetSpecificUrs
