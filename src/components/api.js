const baseurl='https://travel-functionapp.azurewebsites.net/api/'

// get all users
export async function allUsers(){
    const response=await fetch(`${baseurl}users`)
    return response.json()
}

// post user
export async function postUser(data){
    const response=await fetch(`${baseurl}postuser`, {
        method:'POST',
        headers:{ 'Content-Type': 'application/json' },
        body:JSON.stringify(data)
    })
    return response.ok
}
