
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


projectBtnFunc()
 todayBtnFunc()
 priorityBtnFunc()
 remindBtnFunc()
 moreBtnFunc()

 
 function todayBtnFunc(){
const todayBtn = document.querySelector("#today-btn");

todayBtn.addEventListener("click",()=>{
   const todayBox = document.createElement("div");
   
   todayBox.setAttribute("class","today-box");
   todayBox.innerHTML = `
   
     <h3 id="date-display">29 Jan</h3><hr>
     <ul>
     <li id="tomorrow"><img src="${tomorrow}" alt="tomorrow icon">Tomorrow</li>
     <li id="later"><img src="${later}" alt="later icon">Later this week</li>
     <li id="weekend"><img src="${weekend}" alt="weekend icon">This weekend</li>
     <li id="next-week"><img src="${nextWeek}" alt="nextWeek icon">Next week</li>
     <li id="no-date"><img src="${noDate}" alt="noDate icon">No Date</li><hr>
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

  let todayOpt= document.querySelectorAll("li");
  
   todayOpt.forEach((list) => {
    list.addEventListener("click", (e) => {
      let calendarTime = e.target.id;
      let date = new Date();
         if(calendarTime === "tomorrow"){
          let nextDay = date.getDay() + 1;
          return nextDay;
         }
     
         if(calendarTime === "later"){
          let twoDay = date.getDay() + 2;
           return twoDay
         }

         if(calendarTime === "weekend"){
          let weekEndDay = date.getDay();
          return weekEndDay
         }

         if(calendarTime === "next-week"){
          let nextWeekDay = date.getDay();
          return nextWeekDay
         }

         if(calendarTime === "no-date"){
          let noDay = null;
          return noDay;
         }
      return {todayBtn,nextDay,twoDay,weekEndDay,nextWeekDay,noDay}
    });
  });

 console.log(nextDay)
 console.log(twoDay)
  console.log(weekEndDay)
   console.log(nextWeekDay)
    console.log(noDay)

  let tomorrowInput = document.querySelector("#tomorrow");
  let laterInput = document.querySelector("#later");
  let weekendInput = document.querySelector("#weekend");
  let nextWeekInput = document.querySelector("#next-week");
  let noDateInput = document.querySelector("#no-date");
 }


function priorityBtnFunc(){
const priorityBtn = document.querySelector(".priority-btn");
priorityBtn.addEventListener("click",()=>{

    const priorityBox = document.createElement("div");
    priorityBox.setAttribute("class","priority-box");
    priorityBox.innerHTML = `
    
      
      <ul>
      <li><img src="${flag}" id="red" alt="flag icon" color="red">Priority 1 <div></div></li>
      <li><img src="${flag}" id="blue" alt="flag icon" color="yellow">Priority 2<div></div></li>
      <li><img src="${flag}" id="yellow" alt="flag icon"color="blue">Priority 3<div></div></li>
      <li><img src="${flag}" id="white" alt="flag icon">Priority 4 <div></div></li>
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
   





}