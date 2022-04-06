const baseurl='https://travel-functionapp.azurewebsites.net/api/'

// get all users
export async function allUsers(){
    const response=await fetch(`${baseurl}users`)
    return response.json()
}

// 
