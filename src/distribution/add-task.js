
import flag from "../images/sports_score.svg";
import arrowDown from "../images/arrow-down.svg";
import close from "../images/close.svg";
import today from "../images/today.svg";
import hidden from "../images/more_horiz.svg";
import inbox from "../images/inbox.svg";
import alarm from "../images/alarm.svg";
import tomorrow from "../images/tomorrow.png";
import weekend from "../images/weekend.png";
import nextWeek from "../images/next-week.png";
import noDate from "../images/no-task.png";
import clock from "../images/clock.png";
import later from "../images/pay-later.png";
import envelope from "../images/envelope.png"
import balloon from "../images/airballoon.svg"
import add from "../images/add.svg";
import clover from "../images/clover.png";
import puzzle from "../images/puzzle.png";


import { calendarPage } from "./calendar";

export function addTaskPage(){

const content = document.querySelector("#container");
const taskBox = document.createElement("div");

// Variables to store user selections
let selectedDate = null;
let selectedPriority = "Priority 4";

 taskBox.setAttribute("class","task-box");
//  content.showPopover(taskBox);

taskBox.innerHTML =`
<form action=""> 
<input id="chores" placeholder="Send Homework by Thursday at 6pm"></input>
<input id="description" placeholder="Description"></input>
<p class="section">
<button id="today-btn" type="button" ><img src="${today}" alt="today icon"> Today <img src="${close}" alt="close icon"></button>
<button class="priority-btn" type="button"><img src="${flag}" alt="flag icon"> Priority </button>
<button class="remind-btn" type="button"><img src="${alarm}" alt="alarm icon"> Reminders </button>
<button class="more-btn" type="button"><img src="${hidden}" alt="hidden icon"></button>
</p><hr>
<div class="close-section">
<button class="project-btn" type="button"><img src="${inbox}" alt="inbox icon"> inbox <img src="${arrowDown}" alt="arrowDown icon"></button>
<div>
<button class="cancel-btn "type="reset">Cancel</button>
<button class="add-btn" type="button">Add Task</button>
</div>
</div>
</form>
`

content.appendChild(taskBox);

const cancelBtn = document.querySelector(".cancel-btn");
cancelBtn.addEventListener("click",()=>{
    content.removeChild(taskBox);
})

const btn = document.querySelector(".add-btn");
 btn.addEventListener("click",(e)=>{
  e.preventDefault();

  function populatePage(){
    let file = document.querySelector("container");
  
  }
  //Get values
  const title = document.querySelector("#chores").value;
  const description = document.querySelector("#description").value;


  //Basic validation
  if (!title){
    alert("Please enter your Project");
    return;
  }

  //Create todo object
  const newTodo = {
    id: Date.now(),
    title,
    description,
    dueDate: selectedDate || "No Date",
    priority: selectedPriority || "Priority 4",
    completed: false,
    createdAt: new Date().toISOString()
  };

   //Save to localStorage
   const todos = JSON.parse(localStorage.getItem("todos"))||[];
   todos.push(newTodo);
   localStorage.setItem("todo", JSON.stringify(todos));

   //close task box
   content.removeChild(taskBox);

   //Dispatch custom event to refresh homepage
   window.dispatchEvent(new CustomEvent("todosUpdated"));
    
 })

 todayBtnFunc()
 priorityBtnFunc()
 remindBtnFunc()
 moreBtnFunc()
 projectBtnFunc()
 
 function todayBtnFunc(){
  const todayBtn = document.querySelector("#today-btn");

  todayBtn.addEventListener("click",()=>{
   const todayBox = document.createElement("div");
   
   todayBox.setAttribute("class","today-box");
   todayBox.innerHTML = `
   
     <h3 id="date-display">29 Jan</h3><hr>
     <ul class="date-selection">
     <li id="tomorrow"><img src="${tomorrow}" alt="tomorrow icon">Tomorrow</li>
     <li id="later"><img src="${later}" alt="later icon">Later this week</li>
     <li id="weekend"><img src="${weekend}" alt="weekend icon">This weekend</li>
     <li id="next-week"><img src="${nextWeek}" alt="nextWeek icon">Next week</li>
     <li id="no-date"><img src="${noDate}" alt="noDate icon">No Date</li><hr>
     </ul>
      <div id="calendar-div"></div>
      <button><img src="${clock}" alt="clock icon"> Time </button>
   `;
   content.appendChild(todayBox);
   calendarPage();


   todayBox.addEventListener("mouseleave", (e)=>{
      content.removeChild(todayBox)
    })
})

  let todayOpt= document.querySelectorAll(".date-selection li");
  
   todayOpt.forEach((list) => {
    list.addEventListener("click", (e) => {
      let calendarTime = e.target.id;
      let date = new Date();
      let selectedDateText = "";

         if(calendarTime === "tomorrow"){
         date.setDate(date.getDate()+ 1);
         selectedDateText = "Tomorrow"
         }
     
          else if(calendarTime === "later"){
         date.setDate(date.getDate()+2);
         selectedDateText = "Later this week"
         }

         else if (calendarTime === "weekend") {
          // Find next Saturday
          const daysUntilWeekend = (6 - date.getDay()) % 7;
          date.setDate(date.getDate() + daysUntilWeekend);
          selectedDateText = "This weekend";
        } 
        
        else if (calendarTime === "next-week") {
          // Set to next Monday
          const daysUntilNextWeek = (8 - date.getDay()) % 7;
          date.setDate(date.getDate() + daysUntilNextWeek);
          selectedDateText = "Next week";
        }
        
        else if (calendarTime === "no-date") {
          selectedDate = "No Date";
          selectedDateText = "No Date";

          todayBtn.innerHTML = `<img src="${today}" alt="today icon"> ${selectedDateText} <img src="${close}" alt="close icon">`;
          content.removeChild(todayBox);
          return;
        }

      });
    });
  };

  


function priorityBtnFunc(){
    const priorityBtn = document.querySelector(".priority-btn");
       priorityBtn.addEventListener("click",()=>{

    const priorityBox = document.createElement("div");
    priorityBox.setAttribute("class","priority-box");
    priorityBox.innerHTML = `
    
      
      <ul>
      <li data-priority="Priority 1"><img src="${flag}" id="red" alt="flag icon" color="red">Priority 1 <div></div></li>
      <li data-priority="Priority 2"><img src="${flag}" id="blue" alt="flag icon" color="yellow">Priority 2<div></div></li>
      <li data-priority="Priority 3"><img src="${flag}" id="yellow" alt="flag icon"color="blue">Priority 3<div></div></li>
      <li data-priority="Priority 4"><img src="${flag}" id="white" alt="flag icon" color="white">Priority 4 <div></div></li>
     </ul>
      
    `;
    content.appendChild(priorityBox);

    // Add event listeners to priority options
    const priorityOptions = priorityBox.querySelectorAll('li');
    priorityOptions.forEach(option => {
      option.addEventListener('click', () => {
        selectedPriority = option.getAttribute('data-priority');
        priorityBtn.innerHTML = `<img src="${flag}" alt="flag icon"> ${selectedPriority}`;
        content.removeChild(priorityBox);
      });
    });

    priorityBox.addEventListener("mouseleave", (e)=>{
        content.removeChild(priorityBox)
      })
         
})

}


function remindBtnFunc(){
const remindBtn = document.querySelector(".remind-btn");
remindBtn.addEventListener("click",()=>{

    const remindBox = document.createElement("div");
    remindBox.setAttribute("class","remind-box");
    remindBox.innerHTML = `
    <h3>Reminders</h3> 
    <div class="btn">
    <button id="first">Date & time<img src="${clover}" alt="clover icon"></button>
    <button id="second">Before task</button>
    </div>
    <p>(i)  Add a time to the task first</p>
    
   <div class="p">
      <p>(?)</p><button>Add reminder</button>
    </div>
    `;
    content.appendChild(remindBox);

    // Select elements
const remindDiv = document.querySelector("#first");
const remindDivSecond = document.querySelector("#second");

function toggleActive(activeElement, inactiveElement) {
  activeElement.classList.add("active");
  inactiveElement.classList.remove("active");
   inactiveElement.classList.add("inactive");
   inactiveElement.classList.remove("active");
}

remindDiv.addEventListener("click", () => toggleActive(remindDiv, remindDivSecond));
remindDivSecond.addEventListener("click", () => toggleActive(remindDivSecond, remindDiv));
   



    remindBox.addEventListener("mouseleave", (e)=>{
        content.removeChild(remindBox)
      })
});

}


function moreBtnFunc(){
const moreBtn = document.querySelector(".more-btn");
moreBtn.addEventListener("click",()=>{

    const moreBox = document.createElement("div");
    moreBox.setAttribute("class","more-box");
    moreBox.innerHTML = `
    
      
      <ul>
      <li><img src="${envelope}" alt="label icon">Labels</li>
      <li><img src="${clover}" alt="clover icon">Location</li>
      <li><img src="${clover}" alt="clover icon">Deadline</li>
      <li><img src="${puzzle}" alt="puzzle icon">Add extension</li>
      <li>Edit task actions </li>
     </ul>
      
    `;
    content.appendChild(moreBox);

    moreBox.addEventListener("mouseleave", (e)=>{
        content.removeChild(moreBox)
      })
});

}


function projectBtnFunc(){
  const projectBtn = document.querySelector(".project-btn");
  projectBtn.addEventListener("click",()=>{
  
      const projectBox = document.createElement("div");
      projectBox.setAttribute("class","project-box");
      projectBox.innerHTML = `
      
        <input type="text" class="project-search" placeholder="Type a project name">
        <div><img src="${inbox}" alt="inbox icon">inbox</div>
        <ul>My Projects
        <li>Priority 1</li>
        <li>Priority 2</li>
        
       </ul>
        
      `;
      content.appendChild(projectBox);
  
      projectBox.addEventListener("mouseleave", (e)=>{
          content.removeChild(projectBox)
        })
  });

}

   
 


}
