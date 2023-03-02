import React, { useState } from 'react';
import {BsPatchCheckFill, BsFillExclamationCircleFill, BsArrowRightShort } from 'react-icons/bs';
import Customercontact from './Customercontact';
import { MdLogout } from 'react-icons/md'

function Customer() {
    const [customers] = useState([
        {
            id: 1,
            title: "Ayomikun Glory",
            link: "Add Conversation"
        },
        {
            id: 2,
            title: "Kadija Lawal",
            link: "Add Conversation"
        },
        {
            id: 3,
            title: "Samuel Samturty",
            link: "Add Conversation"
        },
        {
            id: 4,
            title: "Ifiok Etebong",
            link: "Add Conversation"
        },
        {
            id: 5,
            title: "Ogochukwu Lawerance",
            link: "Add Conversation"
        },
    ]);
  return (
    <article className='my-4 dSection'>
        <div className='overHead'>
        <h2 className='fw-bolder ms-4 pt-2'>
            3. Customer Development
        </h2>
        </div>
        <div className='d-flex ideaSection'>
            <BsPatchCheckFill className='dIcons dIcons1'/>
            <div className='dQuestion'>
                <h6 className='fw-bolder'>Build a Contact list</h6>
                <span>This is where the fun begins, start adding the names of the people you will speak to and interview about your idea.</span><br/>
                <span>Add at least one contact.</span>
            </div>
        </div>
        <div className='d-flex justify-content-between my-md-0' id='notice'>
            <div className='d-flex'>
                <BsFillExclamationCircleFill className='notice'/>
                <p className='my-auto ms-1 fs-md-4'>You’ve added some contacts. Go manage them in the contact tab:</p>
            </div>
            <div className='d-flex'>
                <p className='my-auto'>Go to contacts</p>
                <BsArrowRightShort className='notice ms-1'/>
            </div>
        </div>
        <div className='researchQuestion'>
            <h6 className='fw-bolder'>RECENT CONTACTS</h6>
            <div className='w-100 justify-content-between'>
                {customers.map((item)=> (
                    <Customercontact  key={item.id} title={item.title} link={item.link}/>
                ))}
            </div>
            <div className='d-inline-flex'>
                <button className='custBtn p-1'>New Contact</button>
                <button className='d-flex p-1 mx-3 custBtn'>
                    <MdLogout className='mdLog'/>
                    <span className='mt-1 ms-2'>Import CSV</span>
                </button>
                <button className='custBtn findBtn p-1'>Find People</button>
            </div>
        </div>
              
              
              
              
    </article>
  )
}

export default Customer