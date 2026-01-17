let newTicket=document.querySelector(".newTicket");
let ticketHolder=document.querySelector(".ticketHolder");
let modal = document.querySelector("#modalOverlay");
let form= document.querySelector("#popUpForm");
let formSubmit = document.querySelector("#modal-submit");

newTicket.addEventListener('click', ()=>{
    modal.style.display="flex";
});

let title, description, body, creator;



form.onsubmit= (e)=>{
    e.preventDefault();
    // console.log(1);
    title = document.querySelector("#ticketTitle").value;
    description = document.querySelector("#ticketDescription").value;
    body= document.querySelector("#ticketBody").value;
    creator = document.querySelector("#ticketCreator").value;
    console.log(title,description,body,creator);
    modal.style.display="none";

    //creating a ticket  
    let ticket = document.createElement("div");
    ticket.classList.add("ticket"); //adding a class to the ticket div
    let ticket_title= document.createElement("h3"); //creating a h3 element for ticket title
    ticket_title.innerText=title; //setting the value of ticket title 
    ticket.appendChild(ticket_title); //appending ticket title to the ticket
    let ticket_description = document.createElement("p");
    ticket_description.innerText="Description: "+description;
    ticket.appendChild(ticket_description);
    let ticket_creator = document.createElement("p");
    ticket_creator.innerText="Creator: "+creator;
    ticket.appendChild(ticket_creator);
    ticketHolder.appendChild(ticket); // adding ticket to the ticketHolder container in the HTML file.

    form.reset();
}
// form.onsubmit = (e) => {
//   e.preventDefault(); // Stop page from refreshing

//   const value = document.getElementById('ticketTitle').value;
//   console.log("Saving data:", value); // Handle your data creation here

//   alert("Created successfully!");
//   modal.style.display = 'none'; // Close the popup
//   form.reset(); // Clear text for next time
// };

// console.log(title,description,body,creator);