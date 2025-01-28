
import flag from "../images/sports_score.svg";
import arrowDown from "../images/arrow-down.svg";
import close from "../images/close.svg";
import today from "../images/today.svg";
import hidden from "../images/more_horiz.svg";
import inbox from "../images/inbox.svg";
import alarm from "../images/alarm.svg";

export function addTaskPage(){

 const content = document.querySelector("#container");


  const taskBox = document.createElement("div");
 taskBox.setAttribute("class","task-box");
//  content.showPopover(taskBox);
taskBox.innerHTML =`
<form>
<p id="chores" placeholder="Send Homework by Thursday at 6pm"></p>
<p id="description" placeholder="Description"></p>
<p id="section">
<button class="today-btn" ><img src="${today}" alt="today icon"> Today <img src="${close}" alt="close icon"></button>
<button class="priority-btn"><img src="${flag}" alt="flag icon"> Priority </button>
<button class="remind-btn"><img src="${alarm}" alt="alarm icon"> Reminders </button>
<button class="more-btn"><img src="${hidden}" alt="hidden icon"></button>
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


function todayBtnFunc(){
const todayBtn = document.querySelector(".today-btn");

todayBtn.addEventListener("click",()=>{
   const todayBox = document.createElement("div");
   todayBox.setAttribute("class","today-box");
   todayBox.innerHTML = `
   
     <p id="date-display"></p><hr>
     <ul>
     <li>Tomorrow</li>
     <li>Later this week</li>
     <li>This weekend</li>
     <li>Next week</li>
     <li>No Date</li><hr>
     </ul>
      <div id=""calendar-div></div>
      <button> Time</button>
   `;




})
}todayBtnFunc()


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
 
 


})
}priorityBtnFunc()


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
 
});
}remindBtnFunc()


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
 
});
}moreBtnFunc()



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
     
    });
    }inboxBtnFunc()
}