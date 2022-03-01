import { type } from '@testing-library/user-event/dist/type'
import React,{useState,useEffect} from 'react'
import './GetUsers.css'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

const GetUsers = () => {
    //== get all users
    const [error,setError]=useState(null)
    const [isLoaded,setIsLoaded]=useState(false)
    const [user,setUser]=useState([])
    const [currentPage, setCurrentPage]=useState(1);
    const [postsPerPage, setPostsPerPage]=useState(3);

    useEffect(()=>{
        fetch('https://travel-functionapp.azurewebsites.net/api/users')
        .then(res=>res.json() )
        .then(
            (data)=>{
                //console.log(data)  // [{...},{...},{...},...]
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
    if(!isLoaded){return <h3>Loading...</h3>}

    //== Pagination
    const indexOfLastPost=currentPage*postsPerPage
    const indexOfFirstPage=indexOfLastPost-postsPerPage
    const currentPosts=user.slice(indexOfFirstPage,indexOfLastPost)
    
    //change page
    const paginate=(pageNumber)=>setCurrentPage(pageNumber)
   
    return (
        <>
            <h3 className='title'>Get All Users: </h3>
            <div className="container" >
                <div className='row m-2' >
                    {currentPosts && currentPosts.map((i)=>(
                        <div className='col-sm-6 col-md-4 v my-2' >
                            <div className="card shadow-sm w-100" key={i.id} style={{minHeight:225}}>
                                <Link to={`/user/${i.id}`} >
                                    <div className="card-body" >
                                        <h3 className='card-title text-center h2'>ID: {i.id}</h3>
                                        <h4 className='card-text text-center'>First Name: {i.name}</h4>
                                        <p className='card-text text-center'>Family Name: {i.familyname}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* pagination */}
            <div className='pagination justify-content-center'>
                <Pagination postsPerPage={postsPerPage} totalPosts={user.length} paginate={paginate} />
            </div>
           
            {/* post user */}
            <div className='link_to_createuser'>
                <Link to={`postuser`}>
                    <h2>Create User</h2>
                </Link>
            </div>
            
        </>
    )
}

export default GetUsers