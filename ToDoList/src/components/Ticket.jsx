import React from 'react'

const Ticket = (props) => {
    console.log("ticket called");
    console.log(props.title,props.description,props.creator);

  return (
    <div className="ticket">
      <h3>Title: {props.title}</h3>
      <p>Desription: {props.description}</p>
      {/* <p>Body:</p> */}
      <h4>Creator:{props.creator}</h4>
    </div>
  )
}

export default Ticket
