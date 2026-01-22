let newTicket = document.querySelector("#newTicket");
let ticketHolder = document.querySelector(".ticketHolder");
let modal = document.querySelector("#modalOverlay");
let form = document.querySelector("#popUpForm");
let formSubmit = document.querySelector("#modal-submit");

const renderTicketEl = document.getElementById("renderTicket");
const addCardEl = document.querySelector("#addCard")

const creationStatusDiv= document.querySelector("#creationStatus");
const inProgressStatusDiv= document.querySelector("#inProgressStatus");
const inReviewStatusDiv= document.querySelector("#inReviewStatus");
const completedStatusDiv= document.querySelector("#completedStatus");

let dataStorage = [];      //array
let uniqueTicketId =1;
let title, description, body, creator;
let tickObj;

//creating the class
class ticketClass {
    constructor(title, discription, body, creator, status) {
        this.title = title;
        this.discription = discription;
        this.body = body;
        this.creator = creator;
        this.status= status;
    }
}

addCardEl.addEventListener('click', () => {
    modal.style.display = "flex";
});
//Modal pop-up
newTicket.addEventListener('click', () => {
    modal.style.display = "flex";
});

//Create Ticket 
function createTicket(title, description, body, creator) {
    let ticket = document.createElement("div");
    ticket.classList.add("ticket"); //adding a class to the ticket div
    
    
    
    
    ticket.setAttribute("draggable","true","id","#"+uniqueTicketId++);
    let ticket_title = document.createElement("h3"); //creating a h3 element for ticket title
    ticket_title.innerText = title; //setting the value of ticket title 
    ticket.appendChild(ticket_title); //appending ticket title to the ticket
    let ticket_description = document.createElement("p");
    ticket_description.innerText = "Description: " + description;
    ticket.appendChild(ticket_description);
    let ticket_creator = document.createElement("p");
    ticket_creator.innerText = "Creator: " + creator;
    ticket.appendChild(ticket_creator);
    ticketHolder.appendChild(ticket); // adding ticket to the ticketHolder container in the HTML file.

    //object creation
    tickObj = new ticketClass(title, description, body, creator,"created");
    // console.log(tickObj);
}


function saveTicket(tickObj) {
    //ticket_arr.push(tickObj);
    // dataStorage.push(JSON.stringify(tickObj))
    dataStorage.push(tickObj)
    
    localStorage.setItem("tickets", JSON.stringify(dataStorage));

}

function loadTicket() {

    // for (let i=0; i<localStorage.length; i++) {
    //     const key = localStorage.key(i);
    //     const value = localStorage.getItem(key);

    //     const convertData = JSON.parse(value);      // convert the json data
    //     dataStorage.push(convertData);
    // }
    // dataStorage = JSON.parse(localStorage.getItem("tickets"));
    const arrStorage = localStorage.getItem("tickets");
    const retrievedArray = JSON.parse(arrStorage || '[]');
    console.log(retrievedArray);
    
    for (let i = 0; i < retrievedArray.length; i++) {
        const temObj = retrievedArray[i];
        createTicket(temObj.title, temObj.description, temObj.body, temObj.creator);

    }

}


// renderTicketEl.addEventListener("click",()=>{
//     loadTicket();
// })

loadTicket();

form.onsubmit = (e) => {
    e.preventDefault();
    // console.log(1);
    title = document.querySelector("#ticketTitle").value;
    description = document.querySelector("#ticketDescription").value;
    body = document.querySelector("#ticketBody").value;
    creator = document.querySelector("#ticketCreator").value;
    console.log(title, description, body, creator);
    modal.style.display = "none";

    createTicket(title, description, body, creator);

    saveTicket(tickObj);

    form.reset();
}


//KK's personel try
//1: Added ids to status column divs as well as ticket div in createTicket function
//2: trying drag event
// let draggedDiv;

// function dragAndDrop (statusDiv, name){
//     statusDiv.addEventListener("dragstart", (event)=>{
//             draggedDiv= event.target;
//             draggedDiv.classList.add("dragging");
//     })
//     statusDiv.addEventListener("drag", ()=>{
//         console.log("dragging");
//     })
//     statusDiv.addEventListener("dragenter", ()=>{
//         console.log("Entered "+name);
//     })
//     statusDiv.addEventListener("dragover", (event)=>{
//         event.preventDefault();
//         console.log("drag over"+name);
//     })
//     statusDiv.addEventListener("dragleave", ()=>{
//         console.log("drop zone exited"+name);
//     })
//     statusDiv.addEventListener("drop", (event)=>{
//         event.preventDefault();
//         console.log("ticket dropped");
//         // draggedDiv.classList.remove("dragging");
//         draggedDiv.classList.add("dropped");
//         // inProgressStatusDiv.appendChild(draggedDiv);
//     })
//     statusDiv.addEventListener("dragend", ()=>{
//         console.log("drag ended");
//         //need to be changed
//         draggedDiv.style.opacity="100%";
//     })
// }

// dragAndDrop(creationStatusDiv,1);
// dragAndDrop(inProgressStatusDiv,2);
// dragAndDrop(inReviewStatusDiv,3);
// dragAndDrop(completedStatusDiv,4);
// console.log(draggedDiv);
const kanbanBoard = document.querySelector(".kanban-canvas");
let draggedDiv;

kanbanBoard.addEventListener("dragstart", (event)=>{
        draggedDiv= event.target;
        draggedDiv.classList.add("dragging");
})
kanbanBoard.addEventListener("drag", ()=>{
    console.log("dragging");
})
kanbanBoard.addEventListener("dragenter", ()=>{
    console.log("Entered "+name);
})
kanbanBoard.addEventListener("dragover", (event)=>{
    event.preventDefault();
    console.log("drag over"+name);
})
kanbanBoard.addEventListener("dragleave", ()=>{
    console.log("drop zone exited"+name);
})
kanbanBoard.addEventListener("drop", (event)=>{
    event.preventDefault();
    console.log("ticket dropped");
    // draggedDiv.classList.remove("dragging");
    draggedDiv.classList.add("dropped");
    event.target.appendChild(draggedDiv);
})
kanbanBoard.addEventListener("dragend", ()=>{
    console.log("drag ended");
    //need to be changed
    draggedDiv.style.opacity="100%";
})