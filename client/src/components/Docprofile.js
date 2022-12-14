import React from 'react'
import { useNavigate } from 'react-router-dom'

function Docprofile({ doctor }) {
    // console.log(doctor.firstName);
    const navigate = useNavigate();
    return (
        <div className='card p-2 cursor-pointer' onClick={() => navigate(`/book-appointment/${doctor._id}`)}>
            <h1 className="card-title">
                {doctor.firstName} {doctor.lastName}
            </h1>
            <p className='card-text'><b>Email: </b>{doctor.email}</p>
            <p className='card-text'><b>Phone Number: </b>{doctor.phoneNumber}</p>
            <p className='card-text'><b>Address: </b>{doctor.address}</p>
            <p className='card-text'><b>Experience: </b>{doctor.experience}</p>
            <p className='card-text'><b>Specialization: </b>{doctor.specialization}</p>
        </div>
    )
}

export default Docprofile