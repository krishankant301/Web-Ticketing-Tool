import React from 'react'
import { useState, useEffect, useRef } from "react";
import './Kanban.css';
import { data } from 'react-router-dom';
import Ticket from './Ticket';


const Kanban = () => {
  const id = useRef(0);

  const [dataStorage, setDataStorage] = useState([]);  //array k liyea hai

  const [poolStorage, setpoolStorage] = useState({    //yea object k liyea hai
    id: '',
    title: '',
    description: '',
    creator: ''
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
    
    id.current += 1;
    setpoolStorage({ id: 1, title: "New Task", description: 'Nothing', creator: 'NK' });
    setDataStorage([...dataStorage, poolStorage]);

    modalRef.current.style.display = 'flex';
  }

  
  return (
    <>
      <div className="modal-container" id="modalOverlay" ref={modalRef}>
        <div className="modal-content">
          <h4>New Ticket</h4>
          <form id="popUpForm">
            <div className="form-div">
              <label for="ticketTitle">Title</label>
              <input type="text" className="input-box" name="username" id="ticketTitle" placeholder="Title" />
            </div>
            <br />
            <div className="form-div">
              <label for="ticketDescription">Description</label>
              <input type="text" className="input-box" name="description" id="ticketDescription" placeholder="Description" />
            </div>
            <br />
            <div className="form-div">
              <label for="ticketBody">Body</label>
              <input type="text" className="input-box" name="createdBy" id="ticketBody" placeholder="Created By" />
            </div>
            <br />
            <div className="form-div">
              <label for="ticketCreator">Created By</label>
              <input type="text" className="input-box" name="createdBy" id="ticketCreator" placeholder="Created By" />
            </div>
            <br />
            <button type="submit" id="modal-submit">Submit</button>
          </form>
        </div>
      </div>
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
                  dataStorage.map((ticket) => {
                    console.log("map is working properly.")
                    console.log(ticket);
                    const prop = ticket;
                    // <Ticket title={ticket.title} description={ticket.description} creator={ticket.creator} />
                    return  <Ticket title={"new"} description={"test1"} creator={"kk"} />
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

