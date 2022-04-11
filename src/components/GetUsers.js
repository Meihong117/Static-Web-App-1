import { type } from '@testing-library/user-event/dist/type'
import React,{useState,useEffect} from 'react'
import './GetUsers.css'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import {Modal, Button} from 'react-bootstrap'
import userEvent from '@testing-library/user-event'
import { BsFillTrashFill,BsPencilFill } from "react-icons/bs";
import { allUsers, deleteUserId,changeUser,searchUser,sortUser } from './api'

const GetUsers = () => {
    const [error,setError]=useState(null)
    const [isLoaded,setIsLoaded]=useState(false)

    const [user,setUser]=useState([])
    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [familyname,setFamilyname]=useState('')

    const [currentPage, setCurrentPage]=useState(1);
    const [postsPerPage, setPostsPerPage]=useState(3);

    const [openModal, setOpenModal] = useState(false);

    // const [searchName,setSearchName]= useState('')
    // const [check,seCheck]=useState(false)

    // sort
    const [sortValue,setSortValue]=useState('')

    useEffect(()=>{
        getAllUsers()
    },[])
    
    //== GET all users
    const getAllUsers=async()=>{
        setUser(await allUsers())
        for(let i in user){
            setId(user[i].id)
            setName(user[i].name)
            setFamilyname(user[i].familyname)
        }
        setIsLoaded(true)

    }
    if(!isLoaded){return <h3 className='text-center'>Loading all users...</h3>}

    //== DELETE user
    const deleteUser=async(id)=> {
        await deleteUserId(id)
        getAllUsers()
    }

    //== Pagination
    const indexOfLastPost=currentPage*postsPerPage
    const indexOfFirstPage=indexOfLastPost-postsPerPage
    const currentPosts=user.slice(indexOfFirstPage,indexOfLastPost)
    //change page
    const paginate=(pageNumber)=>setCurrentPage(pageNumber)

    //== Modal
    const handleShow=(id,name,familyname)=>{
        setOpenModal(true)
        setId(id)
        setName(name)
        setFamilyname(familyname)
    }
    const handleClose=()=>setOpenModal(false)

    //== UPDATE user
    const updateUser=async(e)=>{
        e.preventDefault();
        let data={id, name, familyname}
        
        //fetch
        await changeUser(id,data)
     
        setOpenModal(false)
        getAllUsers()
    }
    
    //== SEARCH user
    const handleSearch=async(searchName)=>{
        //fetch
        let data= await searchUser(searchName) 
        setUser(data)
        
    }
    const handleReset=()=>{
        getAllUsers()
    }

    //== sort user
    const sortOptions=['Id','First Name','Family Name']

    const handleSort=(e)=>{
        let value=e.target.value; // id name familyname
        setSortValue(value)
        if(value==="Id"){
          let sortedById=user.sort((a,b)=>a.id-b.id)
          setUser(sortedById)
        }
        
        if(value==='First Name'){
            let sortedByName=user.sort((a,b)=>a.name.toLowerCase()>b.name.toLowerCase()?1:-1)
            setUser(sortedByName)
        }
        if(value==="Family Name"){
            let sortedByFamilyname=user.sort((a,b)=>a.familyname.toLowerCase()>b.familyname.toLowerCase()?1:-1)
            setUser(sortedByFamilyname)
        }
        

    }
    return (
        <>
            <h3 className='title'>All Users: </h3>
            {/* GET /search user */}
            <div style={{display:'flex', justifyContent:'center'}} >
                <form action=""  style={{display:'flex', justifyContent:'center'}}> 
                    <input type="text" className='form-control' onChange={(e)=>handleSearch(e.target.value)} placeholder='Search with firstname...' style={{width:'300px'}}/>
                    <button className="btn btn-primary" onClick={()=>handleReset()} style={{margin:'5px'}}>Reset</button>
                </form>
            </div>
            
            {/* sort */}
            <div style={{display:'flex', justifyContent:'center', margin:'10px'}}>
                <select className="form-select" id="" style={{width:'200px', borderRadius:"20px",width:'370px'}} onChange={handleSort} value={sortValue}>
                    <option value="">Sort by options</option>
                    {sortOptions.map((item,index)=>(
                        <option value={item} key={index}>{item}</option>
                    ))}
                </select>
            </div>

            <div className="container" >
                <div className='row m-2' >
                    {/* GET /users */}
                    {currentPosts && currentPosts.map((i, index)=>(
                        <div className='col-sm-6 col-md-4 v my-2' key={i.id}>
                            <div className="card shadow-sm w-100" key={i.id} style={{minHeight:225}}>
                                {/* get specific user */}
                                <Link to={`/user/${i.id}`} >
                                    <div className="card-body" >
                                        {/* <h3 className='card-title text-center h4'>Number: {index+1}</h3> */}
                                        <p className='card-title text-center'>User ID: {i.id}</p>
                                        <p className='card-text text-center'>First Name: {i.name}</p>
                                        <p className='card-text text-center'>Family Name: {i.familyname}</p>
                                    </div>
                                </Link>
                                
                                <div className='icons'>
                                    {/* UPDATE */}
                                    <BsPencilFill type="button" className='bsPencilFill' onClick={()=>handleShow(i.id, i.name,i.familyname)}/>
                                    {/* DELETE */}
                                    <BsFillTrashFill type='button' className='bsFillTrashFill' onClick={()=>deleteUser(i.id)}/>  
                                </div> 

                                {/* modal to update user*/}
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