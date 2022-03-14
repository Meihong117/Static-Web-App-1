import React,{useState,useEffect} from 'react'

const PostUser = () => {
    const [id,setId]=useState('')
    const [name, setFirstName] = useState('');
    const [familyname, setFamilyName] = useState('');
    const [isPending,setIsPending]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        let data={id, name, familyname}
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
            <h2 style={{textAlign:'center'}}>Create new user</h2>
            <div style={{display:'flex', justifyContent:'center'}}>
                <form action="" className='form'>
                    <div className='mb-3'>
                        <label htmlFor="" className='form-label'>ID</label> 
                        <input type="number" className='form-control' id='id' value={id} onChange={(e)=>setId(e.target.value)}/> 
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='form-label'>First Name</label> 
                        <input type="text" className='form-control' id='firstname' value={name} onChange={(e)=>setFirstName(e.target.value)}/> 
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='form-label'>Last Name</label> 
                        <input type="text" className='form-control' id='familyname' value={familyname} onChange={(e)=>setFamilyName(e.target.value)}/>
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        {!isPending && <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Submit</button>}
                        {isPending && <button type='submit' onClick={handleSubmit} disabled className='btn btn-primary'>Adding Data...</button>}
                     </div>   
                </form>
            </div>
        </div>
    )
    
}

export default PostUser
