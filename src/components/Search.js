import {React, useState} from 'react'

const Search = () => {
    const [name,setName]= useState([])
    const [check,seCheck]=useState(false)
    function search(name){
        fetch(`https://travel-functionapp.azurewebsites.net/api/name/${name}`,{
            method:'GET',
        }) 
        .then(res=>res.json())
        .then((data)=>{
            if(data.length>0){
                setName(data)
                seCheck(false)
            }else{
                seCheck(true)
                setName(null)
            }
            })
        }

    return (
        <div>
            <h1>Search</h1>
            <input type="text" onChange={(e)=>search(e.target.value)} placeholder='First Name'/>
            {name && name.map(i=>(
                <div key={i.id}>
                    <p>{i.id}</p>
                    <p>{i.name}</p>
                    <p>{i.familyname}</p>
                </div>
                ))
            }
            {check?<p>data not found</p>:null}
        </div>
    )
}

export default Search
