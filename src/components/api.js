const baseurl='https://travel-functionapp.azurewebsites.net/api/'

// GET/ all users
export async function allUsers(){
    const res=await fetch(`${baseurl}users`)
    return res.json()
}
// GET/ user/{id}
export async function getUserId(id){
    const res=await fetch(`${baseurl}user/${id}`)
    return res.json()
}

// GET/ search user/{name}
export async function searchUser(name){
    const res=await fetch(`${baseurl}name/${name}`)
    return res.json()
}

// GET/ sort by name
export async function sortUser(){
    const res=await fetch(`${baseurl}sort`)
    return res.json()
}

// POST/ user
export async function postUser(data){
    const res=await fetch(`${baseurl}postuser`, {
        method:'POST',
        headers:{ 'Content-Type': 'application/json' },
        body:JSON.stringify(data)
    })
    return res.ok
}

//DELETE/ user/{id}
export async function deleteUserId(id){
    const res=await fetch(`${baseurl}deleteuser/${id}`,{
        method:'DELETE',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    })
    return res.ok
}

//PUT/ user/{id}
export async function changeUser(id,data){
    const res=await fetch(`${baseurl}updateuser/${id}`, {
        method:'PUT',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
        body: JSON.stringify(data)
    })
    return res.ok
}