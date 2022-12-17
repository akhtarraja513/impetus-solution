import React from 'react'
import './Data.css'
import jsonData from '../../userData'

const Data = ({value, num}) => {
    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Batch No</th>
                        <th>Location</th>
                        <th>Experience</th>
                        <th>Contact No</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jsonData.filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const fullName = item.name.toLowerCase();

                            return (
                                fullName.startsWith(searchTerm) && fullName !== searchTerm
                            )
                        }).slice(0, num).map((ele, idx) => (
                            <tr key={idx}>
                                <td data-label="Name">{ele.name}</td>
                                <td data-label="Batch No">{ele.batch}</td>
                                <td data-label="Location">{ele.location}</td>
                                <td data-label="Experience">{ele.experience}</td>
                                <td data-label="Contact No">{ele.contact}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Data;