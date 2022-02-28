import React,{useState,useEffect} from 'react'

const PostUser = () => {
    const [id,setId]=useState('')
    const [firstname, setFirstName] = useState('');
    const [familyname, setFamilyName] = useState('');
    const [isPending,setIsPending]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        let data={id, firstname, familyname}
        setIsPending(true)

        fetch('https://travel-functionapp.azurewebsites.net/api/postuser', {
            method:'POST',
            headers:{ 'Content-Type': 'application/json' },
            body:JSON.stringify(data)
        }).then((res)=>{
            console.log(res)
            setIsPending(false)
        })
        
    }
    
    return (
        <div className='postUser'>
            <h2>Post user</h2>
            <form action="" >
                <label htmlFor="">Your ID</label> <br />
                <input type="number" id='id' value={id} onChange={(e)=>setId(e.target.value)}/> <br />
                <label htmlFor="">Your First Name</label> <br />
                <input type="text" id='firstName' value={firstname} onChange={(e)=>setFirstName(e.target.value)}/> <br />
                <label htmlFor="">Your Last Name</label> <br />
                <input type="text" id='lastName' value={familyname} onChange={(e)=>setFamilyName(e.target.value)}/> <br />

                 {!isPending && <button type='button' onClick={handleSubmit}>Submit</button>}
                 {isPending && <button type='button' onClick={handleSubmit} disabled>Adding Data...</button>}
            </form>
        </div>
    )
    
}

export default PostUser
