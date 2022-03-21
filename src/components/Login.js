import React from 'react'
import {useRef, useState, useEffect,useContext} from 'react'
import AuthContext from '../context/AuthProvider'
import './Login'

const LOGIN_URL='/auth'

const Login = () => {
    const {setAuth}=useContext(AuthContext)
    const userRef=useRef()
    const errRef=useRef()

    const [user, setUser]=useState('')
    const [pwd, setPwd]=useState('')
    const [errMsg, setErrMsg]=useState('')
    const [success, setSuccess]=useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await fetch(LOGIN_URL,JSON.stringify({user,pwd}),{
                headers:{'Content-Type':'application/json'},
                withCredentials: true
            })
            console.log(JSON.stringify(response?.data))
            // console.log(JSON.stringify(response))
            const accessToken=response?.data?.accessToken
            const roles=response?.data?.roles //should array
            setAuth({user,pwd,roles,accessToken})
            setUser('')
            setPwd('')
            setSuccess(true)

        }catch(err){
            if(!err?.response){
                setErrMsg('No server response')
            }else if(err.response?.status===400){
                setErrMsg('Missing Username or Password')
            }else if(err.response?.status===401){
                setErrMsg('Unauthorized')
            }else{
                setErrMsg("Login Failed")
            }
            errRef.current.focus()
        }
    }

    return (
        <>
            {success?(
                <section className='container'>
                    <h1>You are logged in</h1> <br />
                    <p>
                        <a href="">Go to Home</a>
                    </p>
                </section>
            ):(
                <section className='container'>
                    <p ref={errRef} className={errMsg? "errmsg":"offscreen"} aria-live="assertive" >{errMsg}</p>
                    <h3 style={{textAlign:'center'}} className="h3">Log In</h3>
                    <div className='row justify-content-center'>
                        <form onSubmit={handleSubmit} style={{width:'250px'}} >
                            <div className='form-group'>
                                <label htmlFor="username" className='form-label'>Username: </label> 
                                <input className='form-control' type="text" id="username" ref={userRef} autoComplete="off" onChange={e=>setUser(e.target.value)} 
                            value={user} required />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="password" className='form-label'>Password: </label> 
                                <input className='form-control' type="password" id="password" onChange={e=>setPwd(e.target.value)} 
                                value={pwd} required />
                            </div>
                            <br />
                          <div style={{display:'flex', justifyContent:'center'}}><button className='btn btn-primary ' type="submit">Log In</button></div>  
                        </form>
                    </div>
                    <div className='row justify-content-center'>
                         <p className='form-text' style={{textAlign:'center'}}>
                            Need an Account? 
                            <span className="line">
                                <a href=""> Sign up</a>
                            </span>
                        </p>
                    </div>
                </section>
            )}
        </>
    )
}

export default Login
