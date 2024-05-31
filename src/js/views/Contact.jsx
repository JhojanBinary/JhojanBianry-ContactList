import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faPhoneFlip, faEnvelope, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
library.add(faLocationDot, faPhoneFlip, faEnvelope, faPencil, faTrashCan);

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';



export const Contact = () => {

    const { store, actions } = useContext(Context); 


    useEffect(() => {
        actions.getContact();
        console.log(store.contacts); 
    }, []);

    const deleteContact = index => {
        actions.deleteContact(index);
    };



    return (
        <div className='container'>
            <div className='d-flex justify-content-end mb-3'>
                <Link to="/AddContact">
                    <button className='btn btn-success'>Add new contact</button>
                </Link>

            </div>

            <div>
                {Array.isArray(store.contacts) && store.contacts.length > 0 ? (
                    store.contacts.filter(contact => Object.keys(contact).length > 0)
                        .map((contact, index) => (
                            <div key={index} className='card py-3 px-5'>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex flex-row align-items-center'>
                                        <div className='me-5'>
                                            <img src="https://th.bing.com/th/id/OIP._xe6q606bS0YchYtRynVGQAAAA?rs=1&pid=ImgDetMain" alt=""
                                                className='rounded-circle'
                                                style={{ width: "130px", height: "150px" }}
                                            />
                                        </div>
                                        <div>
                                            <h4>{contact.name}</h4>
                                            <div>
                                                <FontAwesomeIcon icon="location-dot" className='me-3' />
                                                <span>{contact.address}</span>
                                            </div>
                                            <div>
                                                <FontAwesomeIcon icon="phone-flip" className='me-3' />
                                                <span>{contact.phone}</span>
                                            </div>
                                            <div>
                                                <FontAwesomeIcon icon="envelope" className='me-3' />
                                                <span>{contact.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Link to={`/EditContact/${contact.id}`}>
                                            <FontAwesomeIcon icon="pencil" className='me-5' />
                                        </Link>
                                        <FontAwesomeIcon icon="trash-can" onClick={() => deleteContact(index)} />
                                    </div>
                                </div>
                            </div>
                        ))

                ) : (
                    ""
                )}
            </div>

        </div>
    )

}

