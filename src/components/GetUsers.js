import { type } from '@testing-library/user-event/dist/type'
import React,{useState,useEffect} from 'react'
import './GetUsers.css'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
// import Modal from './Modal'
import {Modal, Button} from 'react-bootstrap'
import userEvent from '@testing-library/user-event'


const GetUsers = () => {
    //== GET all users
    const [error,setError]=useState(null)
    const [isLoaded,setIsLoaded]=useState(false)

    const [user,setUser]=useState([])
    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [familyname,setFamilyname]=useState('')

    const [currentPage, setCurrentPage]=useState(1);
    const [postsPerPage, setPostsPerPage]=useState(3);
    const [openModal, setOpenModal] = useState(false);
    const [isPending,setIsPending]=useState(false)




    useEffect(()=>{
        getAllUsers()
    },[])

    function getAllUsers(){
        fetch('https://travel-functionapp.azurewebsites.net/api/users')
        .then(res=>res.json())
        .then(
            (data)=>{
                for(let i in data){
                    setId(data[i].id)
                    setName(data[i].name)
                    setFamilyname(data[i].familyname)
                    // console.log(data[i].name)
                    
                }
                // console.log(data[i].name)  // [{...},{...},{...},...]
                setUser(data)
                setIsLoaded(true)
            }
        )
    }
    if(!isLoaded){return <h3>Loading all users...</h3>}

    function refreshPage() {
        window.location.reload(false);
      }

    //== DELETE user
    function deleteUser(id) {
        fetch(`https://travel-functionapp.azurewebsites.net/api/deleteuser/${id}`,{
            method:'DELETE',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
        .then(res=>res.json())
        .then(
            (result)=>{
                // console.log(result)
                getAllUsers()
            }
        )
        
    }

    //== Pagination
    const indexOfLastPost=currentPage*postsPerPage
    const indexOfFirstPage=indexOfLastPost-postsPerPage
    const currentPosts=user.slice(indexOfFirstPage,indexOfLastPost)
    //change page
    const paginate=(pageNumber)=>setCurrentPage(pageNumber)

    //modal
    const handleShow=(i)=>{
        setOpenModal(true)
        console.log(user[i])
        let item=user[i]
        setId(item.id)
        setName(item.name)
        setFamilyname(item.familyname)
    }
    const handleClose=()=>setOpenModal(false)

    // update user
    const updateUser=(e)=>{
        e.preventDefault();
        let data={id, name, familyname}
        fetch(`https://travel-functionapp.azurewebsites.net/api/updateuser/${id}`,{
            method:'PUT',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify(data)
        })
        .then((result)=>{
                // console.log(result)
                getAllUsers()
            }
        )
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
                                {/* DELETE */}
                                <div className='btn justify-content-center'><button onClick={()=>deleteUser(i.id)} type='button' className='btn btn-danger' style={{width:'100px'}}>DELETE</button></div>  

                                {/* UPDATE */}
                                <div className='btn justify-content-center'>
                                    <button type="button" className="btn btn-primary" onClick={()=>handleShow(index)} >UPDATE</button>
                                </div> 
                                {/* modal */}
                                <Modal show={openModal} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Update User</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form action="" className='form'>
                                            <div className='mb-3'>
                                                <label htmlFor="" className='form-label'>ID</label> 
                                                <input type="text" className='form-control' id='id' value={id}  onChange={e=>setId(e.target.value)}/> 
                                            </div>
                                            <div className='mb-3'>
                                                <label htmlFor="" className='form-label'>New First Name</label> 
                                                <input type="text" className='form-control' id='firstname' value={name} onChange={e=>setName(e.target.value)}/> 
                                            </div>
                                            <div className='mb-3'>
                                                <label htmlFor="" className='form-label'>New Last Name</label> 
                                                <input type="text" className='form-control' id='familyname' value
                                                ={familyname} onChange={e=>setFamilyname(e.target.value)}/>
                                            </div>
                                        </form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                                        <Button variant="primary" onClick={updateUser}>Save Changes</Button>
                                    </Modal.Footer>
                                </Modal>   
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