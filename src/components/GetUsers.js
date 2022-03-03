import { type } from '@testing-library/user-event/dist/type'
import React,{useState,useEffect} from 'react'
import './GetUsers.css'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import { useParams } from "react-router-dom";

const GetUsers = () => {
    //== get all users
    const [error,setError]=useState(null)
    const [isLoaded,setIsLoaded]=useState(false)
    const [user,setUser]=useState([])
    const [currentPage, setCurrentPage]=useState(1);
    const [postsPerPage, setPostsPerPage]=useState(3);

    useEffect(()=>{
        getUsers()
    },[])

    function getUsers(){
        fetch('https://travel-functionapp.azurewebsites.net/api/users')
        .then(res=>res.json())
        .then(
            (data)=>{
                //console.log(data)  // [{...},{...},{...},...]
                setUser(data)
                setIsLoaded(true)
            }
        )
    }
    if(!isLoaded){return <h3>Loading all users...</h3>}

    //== Pagination
    const indexOfLastPost=currentPage*postsPerPage
    const indexOfFirstPage=indexOfLastPost-postsPerPage
    const currentPosts=user.slice(indexOfFirstPage,indexOfLastPost)
    //change page
    const paginate=(pageNumber)=>setCurrentPage(pageNumber)

     //delete specific user
     function deleteUser(id) {
        fetch(`https://travel-functionapp.azurewebsites.net/api/deleteuser/${id}`,{method:'DELETE'})
            .then(getUsers());
    }
    return (
        <>
            <h3 className='title'>Get All Users: </h3>
            <div className="container" >
                <div className='row m-2' >
                    {currentPosts && currentPosts.map((i, index)=>(
                        <div className='col-sm-6 col-md-4 v my-2' key={i.id}>
                            <div className="card shadow-sm w-100" key={i.id} style={{minHeight:225}}>
                                <Link to={`/user/${i.id}`} >
                                    <div className="card-body" >
                                        {/* <h3 className='card-title text-center h4'>Number: {index+1}</h3> */}
                                        <p className='card-title text-center'>ID: {i.id}</p>
                                        <p className='card-text text-center'>First Name: {i.name}</p>
                                        <p className='card-text text-center'>Family Name: {i.familyname}</p>
                                    </div>
                                </Link>
                                <button onClick={()=>deleteUser(i.id)} type='button' className='btn btn-primary' >DELETE</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* pagination */}
            <div className='pagination justify-content-center'>
                <Pagination postsPerPage={postsPerPage} totalPosts={user.length} paginate={paginate} />
            </div>
        </>
    )
}

export default GetUsers