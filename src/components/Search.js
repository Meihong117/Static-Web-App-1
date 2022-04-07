import {React, useState} from 'react'
import { searchUser } from './api'

const Search = () => {
    const [name,setName]= useState([])
    const [check,seCheck]=useState(false)

    const search=async(name)=>{
        //fetch
        let data= await searchUser(name) 
        if(data.length>0){
            setName(data)
            seCheck(false)
        }else{
            seCheck(true)
            setName(null)
        }
            
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
