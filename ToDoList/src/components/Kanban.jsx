import React from 'react'
import { useState, useEffect, useRef } from "react";
import './Kanban.css';
import { data } from 'react-router-dom';
import Ticket from './Ticket';


const Kanban = () => {
  
  const id = useRef(0);

  const [dataStorage, setDataStorage] = useState([]);  //array k liyea hai

  const [poolStorage, setpoolStorage] = useState({    //yea object k liyea hai
    // id: '',
    // title: '',
    // description: '',
    // body: '',
    // creator: ''
  });

  useEffect(() => {
    // const arrStorage = localStorage.getItem("tickets");             
    setDataStorage(JSON.parse(localStorage.getItem("tickets") || '[]'));      //data hum localstorage se array me daal rhe hain
  }, []);


  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(dataStorage));   //local storage me add krane k liyea
  }, [dataStorage]);


  const modalRef = useRef();

  function addTicket() {
    // id.current += 1;
    // setpoolStorage({ id: 1, title: "New Task", description: 'Nothing', creator: 'NK' });
    // setDataStorage([...dataStorage, poolStorage]);

    modalRef.current.style.display = 'flex';
  }

  
  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent the browser relaod on submit
    
    //collects the all inouts from the inputs
    const formValues = new FormData(e.currentTarget);
    console.log(formValues);
    
    // Convert to a normal JS object
    const formDataObj = Object.fromEntries(formValues.entries());
    console.log("Form Data Object:", formDataObj);

    
    const newData = { id: id.current, ...formDataObj };
    id.current += 1;
    console.log("New object to store:", newData);

    
    setpoolStorage({id: id.current})
    // setpoolStorage(formValues);
    // Update poolStorage
    // setpoolStorage(formDataObj);
    // setDataStorage([...dataStorage, poolStorage]);

    // Update poolStorage (optional, stores latest submission)
    setpoolStorage(formDataObj);

    setDataStorage(prev => [...prev, newData]); // use formDataObj directly
    // setDataStorage(prev => [...prev, formDataObj]);

    console.log("-------------------------------------------------")
    console.log(dataStorage);
    console.log(poolStorage);

  };


  return (
    <>
       {/* Modal section */}
      <div className="modal-container" id="modalOverlay" ref={modalRef}>
        <div className="modal-content">
          <h4>New Ticket</h4>
          
          {/* POP-UP form */}
          <form id="popUpForm" onSubmit={handleSubmit}>
            <div className="form-div">
              <label for="ticketTitle">Title</label>
              <input type="text" className="input-box" name="title" id="ticketTitle" placeholder="Title" />
            </div>
            
            <br/>
            
            <div className="form-div">
              <label for="ticketDescription">Description</label>
              <input type="text" className="input-box" name="description" id="ticketDescription" placeholder="Description" />
            </div>
            
            <br/>
            
            <div className="form-div">
              <label for="ticketBody">Body</label>
              <input type="text" className="input-box" name="body" id="ticketBody" placeholder="Created By" />
            </div>
            
            <br/>
            
            <div className="form-div">
              <label for="ticketCreator">Created By</label>
              <input type="text" className="input-box" name="creator" id="ticketCreator" placeholder="Created By" />
            </div>
            
            <br/>
            
            <button type="submit" id="modal-submit">Submit</button>
          
          </form>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="container">
        <div className="side-bar">
          <div className="upper-side-bar"></div>
          <div className="lower-side-bar"></div>
        </div>

        <div className="main-container">
          <div className="tab-bar">
            <input type="text" name="" id="workspaceName" placeholder="Project Tracker" />
          </div>

          <div className="kanban-canvas">
            <div className="status" id="creationStatus">
              <h3>Creation  <button id="newTicket">+</button></h3>
              <div className="ticketHolder">
                {
                  dataStorage.map((eleTicket) => {
                    console.log("map is working properly.")
                    console.log(eleTicket);
                    // const prop = ticket;
                    // <Ticket title={ticket.title} description={ticket.description} creator={ticket.creator} />
                    return (
                      < Ticket key={eleTicket.id} title={eleTicket.title} description={eleTicket.description} creator={eleTicket.creator} />
                      // <Ticket title={"new"} description={"test1"} creator={"kk"} />
                    )
                  })

                }
              </div>
              <button id="addCard" onClick={addTicket}>Add Card</button>
            </div>

            <div className="status" id="inProgressStatus">In Progress</div>
            <div className="status" id="inRiviewStatus">In Review</div>
            <div className="status" id="completedStatus">Completed</div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Kanban;

