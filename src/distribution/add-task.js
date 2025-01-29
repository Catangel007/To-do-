
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



import { calendarPage } from "./calendar";

export function addTaskPage(){

 const content = document.querySelector("#container");


  const taskBox = document.createElement("div");
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
<button class="inbox-btn"><img src="${inbox}" alt="inbox icon"> inbox <img src="${arrowDown}" alt="arrowDown icon"></button>
<div>
<button class="cancel-btn "type="reset">Cancel</button>
<button class="add-btn" type="submit">Add Task</button>
</div>
</div>

</form>



`
content.appendChild(taskBox);



  

const cancelBtn =document.querySelector(".cancel-btn");
cancelBtn.addEventListener("click",()=>{
    content.removeChild(taskBox);
})

const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click",()=>{
    let list = taskBox.value;
})

 todayBtnFunc()
 priorityBtnFunc()
 remindBtnFunc()
  inboxBtnFunc()
 
 function todayBtnFunc(){
const todayBtn = document.querySelector("#today-btn");

todayBtn.addEventListener("click",()=>{
   const todayBox = document.createElement("div");
   
   todayBox.setAttribute("class","today-box");
   todayBox.innerHTML = `
   
     <h3 id="date-display">29 Jan</h3><hr>
     <ul>
     <li><img src="${tomorrow}" alt="tomorrow icon">Tomorrow</li>
     <li><img src="${later}" alt="later icon">Later this week</li>
     <li><img src="${weekend}" alt="weekend icon">This weekend</li>
     <li><img src="${nextWeek}" alt="nextWeek icon">Next week</li>
     <li><img src="${noDate}" alt="noDate icon">No Date</li><hr>
     </ul>
      <div id="calendar-div"></div>
      <button><img src="${clock}" alt="clock icon"> Time</button>
   `;
   content.appendChild(todayBox);
   calendarPage();
   todayBox.addEventListener("mouseleave", (e)=>{
      content.removeChild(todayBox)
    })
})

 }


function priorityBtnFunc(){
const priorityBtn = document.querySelector(".priority-btn");
priorityBtn.addEventListener("click",()=>{

    const priorityBox = document.createElement("div");
    priorityBox.setAttribute("class","priority-box");
    priorityBox.innerHTML = `
    
      
      <ul>
      <li>Priority 1</li>
      <li>Priority 2</li>
      <li>Priority 3</li>
      <li>Priority 4</li>
     </ul>
      
    `;
    content.appendChild(priorityBox);

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
    <h6>Reminders</h6> 
    <div>
    <button>Date & time</button>
    <button>Before task</button>
    </div>
    <p>Add a time to the task first</p>
    <p>
     <button>Add reminder</button>
    </p>
    `;
    content.appendChild(remindBox);

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
      <li>Priority 1</li>
      <li>Priority 2</li><hr>
      <li>Priority 3</li><hr>
      <li>Priority 4</li>
     </ul>
      
    `;
    content.appendChild(moreBox);

    moreBox.addEventListener("mouseleave", (e)=>{
        content.removeChild(moreBox)
      })
});

}// moreBtnFunc()



function inboxBtnFunc(){
    const inboxBtn = document.querySelector(".inbox-btn");
    inboxBtn.addEventListener("click",()=>{
    
        const inboxBox = document.createElement("div");
        inboxBox.setAttribute("class","inbox-box");
        inboxBox.innerHTML = `
        
          <p><input name="search-project" id="search-project" placeholder="Type a project name"></p>
          <ul>
          <li>Inbox</li>
          <li>My Projects
          <li>Routines</li>
          <li>Inspiration</li>
          </li>
          
         </ul>
          
        `;
        content.appendChild(inboxBox );

        inboxBox.addEventListener("mouseleave", (e)=>{
            content.removeChild(inboxBox)
          })
    });
   
 } 


   
}