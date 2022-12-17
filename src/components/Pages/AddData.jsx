import React, { useState } from 'react'
import './AddData.css'
import userData from '../../userData'
import { useNavigate } from 'react-router-dom'


const AddData = () => {
    const navigate = useNavigate();

    const userInfo = {
        name: "",
        batch: "",
        location: "",
        experience: "",
        contact: ""
    }

    const [user, setUser] = useState({
        name: "",
        batch: "",
        location: "",
        experience: "",
        contact: ""
    })

    // const [show, setShow] = useState(false);

    const handleInput = (e) => {
        // console.log(e.target.value);
        userInfo[e.target.id] = e.target.value;
    }

    const handleForm = (e) => {
        e.preventDefault();
        // console.log("Submit")
        setUser(userInfo);
        // setShow(true);
        userData.push(user);
    }

    const handlePopup = () => {
        navigate("/");
    }
    return (
        <>
            
            <div className="wrapper_add">
                <button onClick={handlePopup}>close</button>
                <form onSubmit={(e) => handleForm(e)}>
                    <div>
                        <label htmlFor="name">Name </label>
                        <input id='name' type="text" onChange={(e) => handleInput(e)} />
                    </div>
                    <div>
                        <label htmlFor="batch">Batch No </label>
                        <input id='batch' type="text" onChange={(e) => handleInput(e)} />
                    </div>
                    <div>
                        <label htmlFor="location">Location </label>
                        <input id='location' type="text" onChange={(e) => handleInput(e)} />
                    </div>
                    <div>
                        <label htmlFor="expe">Experience </label>
                        <input id='experience' type="text" onChange={(e) => handleInput(e)} />
                    </div>
                    <div>
                        <label htmlFor="contact">Contact No </label>
                        <input id='contact' type="text" onChange={(e) => handleInput(e)} />
                    </div>
                    <input type="submit" />
                </form>
                
            </div>
        </>
    )
}

export default AddData