import { useParams } from "react-router-dom";
import React from 'react'

const DeleteUser = () => {
    const { id } = useParams(); 

    function componentDidMount() {
            fetch('https://travel-functionapp.azurewebsites.net/api/user/'+id)
                .then(() => this.setState({ status: 'Delete successful' }));
        }
    return (
        <div>
            ddd
            
            
        </div>
    )
}

export default DeleteUser
