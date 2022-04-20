import React from 'react'
import { Link } from 'react-router-dom';


const ContactCard = (props) => {
  const {id, name,email} = props.contact;
  return (
    <div>
      <div className="item" >
        <div className="content">
          <Link to={{pathname: `/contact/${id}`}}>
            <div className="header">{name}</div>
            <div>{email}</div>
          </Link>
        </div>
        <i onClick={ () => props.clickHandler(id)} className='trash alternateoutline icon' style={{color: "red"}}></i>
      </div>
    </div>
  )
}

export default ContactCard