const baseurl='https://travel-functionapp.azurewebsites.net/api/'

// GET/ all users
export async function allUsers(){
    const response=await fetch(`${baseurl}users`)
    return response.json()
}
// GET/ user/{id}
export async function getUserId(id){
    const res=await fetch(`${baseurl}user/${id}`)
    return res.json()
}

// POST/ user
export async function postUser(data){
    const response=await fetch(`${baseurl}postuser`, {
        method:'POST',
        headers:{ 'Content-Type': 'application/json' },
        body:JSON.stringify(data)
    })
    return response.ok
}

// GET/ search user by name
export async function searchUser(name){
    const res=await fetch(`${baseurl}name/${name}`)
    return res.json()
}