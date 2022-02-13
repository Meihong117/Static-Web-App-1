import React,{useState,useEffect} from 'react'

const PostUser = () => {
    const [error,setError]=useState(null)
    const [isLoaded,setIsLoaded]=useState(false)
    const [postUser, setPostUser] = useState(null);
    

    useEffect(()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('https://travel-functionapp.azurewebsites.net/api/user',requestOptions)
        .then(res=>res.json() )
        .then(
            (data)=>{
                console.log(data) 
                postUser(data.name)
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
        <div>
            post user {postUser}
        </div>
    )
    
}

export default PostUser
