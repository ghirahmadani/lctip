import React, { useEffect } from 'react'
import axios from 'axios'

const Validation = (props) => {
    useEffect(() => {
        handleUsername()
    },[props])

    const handleUsername = async() => {
        const form = new FormData()
        form.append('username', props.username)

        await axios.post(`${process.env.REACT_APP_REGISTRATION_URL}/validate-username`, form, 
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            props.handleValidation(res.data.status)
            
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
}

export default Validation