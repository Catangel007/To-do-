"use strict";
// import Images and Icons
import bell from "../images/bell.png";
import apps from "../images/grid3.svg";
import hashtag from "../images/hashtag.png";
import orange from "../images/orange.png";
import add_circle from "../images/add_circle.svg";
import add from "../images/add.svg";
import search from "../images/search.svg";

import grig2 from "../images/grig2.svg";
import hidden from "../images/more_horiz.svg";

import thumbnail from "../images/thumbnail.svg";
import today from "../images/today.svg";
import checkCircle from "../images/check_circle.svg";
import envelope from "../images/mail.svg";
import bedtime from "../images/dark_mode.svg";
import calendar_today from "../images/calendar_today.svg";
import chatBubble from "../images/chat.svg";
import calendar from "../images/calendar_month.svg";
import close from "../images/close.svg";
import deleteIcon from "../images/delete.svg";
import arrowDown from "../images/arrow-down.svg";
import dots from "../images/grip1.svg";
import writeIcon from "../images/write.svg";
import events from "../images/calendar_add.svg";
import inbox from "../images/inbox.svg";
import lightMode from "../images/light_mode.svg";

import view from "../images/tune.svg";

import playingCards from "../images/playing_cards.svg";



   import {inboxPage} from "./inbox.js";
   import {searchPage} from "./search.js";
   import {todayPage} from "./today.js";
   import {upcomingPage} from "./upcoming.js";
   import {animationPage} from "./animation.js";
   import {filtersPage} from "./filters.js";
   import { addTaskPage }  from "./add-task.js";
   import { teamPage }  from "./team.js";
   import { templatePage }  from "./template.js";
   import { calendarPage } from "./calendar.js";
   

 export function homePage(){
    const content = document.querySelector("body");
    const navBox = document.createElement("div");
    const homeBox = document.createElement("div");

content.appendChild(navBox);
content.appendChild(homeBox);

navBox.setAttribute("class","navBox");
homeBox.setAttribute("class","homeBox");

navBox.innerHTML="";
navBox.innerHTML=`

 <div class="nav">
        <h3>Name  <img id="bell" src="${bell}" alt="notifications icon"><img src="${thumbnail}"></h3>
        <ul>
            <li id="0"><img src="${add_circle}" alt="add task icon">Add Task</li>
            <li id="1"><img src="${search}" alt="search icon">Search</li>
            <li id="2"><img src="${inbox}" alt="inbox icon">inbox</li>
            <li id="3"><img src="${calendar_today}" alt="add task today icon">Today</li>
            <li id="4"><img src="${calendar}" alt="upcoming task icon">Upcoming</li>
            <li id="5"><img src="${apps}" alt="filters and labels icon">Filters & Labels</li>
        </ul>
        <ul id="projects"> My Projects <img src="${add}" alt="add project icon"><img src="${arrowDown}" alt="add project icon">
            <li id="6" class="margin"><img src="${hashtag}" alt="">Home</li>
            <li id="7"><img src="${add}" alt="add team icon">Add a Team</li>
            <li id="8"><img src="${playingCards}" alt="template icon"> Browse Templates</li>
        </ul>
    </div>


`
homeBox.innerHTML=`
 
   <div class="box">
        <header>
        <img  id="mode" src="${bedtime}" alt="dark mode">
           <p id="events"><img src="${events}" alt="calendar icon">Calendar events  | <img src="${close}" alt="close icon"></p>
           <p id="view"><img src="${view}">View</p>
        </header>
        <div id="container">
            <h1>Today</h1>
            <p id="taskCounter">
            <img src="${checkCircle}">task
            </p>
            <div id="newTodo">
              <div class="task">
              <img src="${grig2}">
              <input type="checkbox" id="radio-btn" name="radio-btn" >Download OrangeTodo in all your devices and email for iphone, Android, laptops and tablets.
              
              </div>
            <ul class="hidden-icons"></ul>
               <p id="inbox">inbox<img src="${inbox}"></p>
               

            </div><hr>
            <button><img src="${add}" alt="">Add Task</button>
        </div> 
            
          
    </div>


`

 const plusBtn = document.querySelector("button");
 plusBtn.addEventListener("click",addTaskPage);


// create new todos
class TodoGen {

  constructor(title,description,dueDate,priority,notes,checklist){
    
    this.title = title,
    this.description = description,
    this.dueDate = dueDate,
    this.priority= priority,
    this.notes = notes,
    this.checklist = false;
    this.date=getday();
  }
 callTaskBtn(){
    addTaskBtn();
 }
  
}

 
  function makeProject(){
    let project=["today","tomorrow","monday","tuesday","wednesday","thursday","friday","saturday","sunday","custom"];
 
    for (let inbox of project){
      inbox =[];
      inbox.addEventListener("click",()=>{
        let routines = new TodoGen(title.value,description.value,dueDate.value,priority.value,notes.value);
        inbox.push(routines)
      });
     
return inbox;
    }
return project;
  }makeProject()



  function editProject(){

   // takes care of hidden icons
const hiddenIcons = document .querySelector(".task");

const icons = document.querySelector(".hidden-icons");
icons.style.color="#ccc";
icons.style.size="40px";
hiddenIcons.addEventListener("mouseenter", ()=>{
 
 hiddenIcons.appendChild(icons);

  const l1 = document.createElement("li"); 
      let image1 = document.createElement("img")
      image1.src = writeIcon;

      l1.appendChild(image1)
  const l2 = document.createElement("li");
  let image2 = document.createElement("img")
      image2.src = today;
     
      l2.appendChild(image2)
  const l3 = document.createElement("li");
  let image3 = document.createElement("img")
      image3.src = chatBubble;
      l3.appendChild(image3)
  const l4 = document.createElement("li");
  let image4 = document.createElement("img")
      image4.src = hidden;
      l4.appendChild(image4)
      image4.addEventListener("mouseenter",()=>{
        const moreHidden = document.createElement("ul");
                const l1 = document.createElement("li"); 
              let image1 = document.createElement("img")
              image1.src = envelope;
              l1.appendChild(image1)
              const l2 = document.createElement("li");
              let image2 = document.createElement("img")
              image2.src = deleteIcon;
              l2.appendChild(image2)
              
      })
      

  icons.appendChild(l1);
  icons.appendChild(l2);
  icons.appendChild(l3);
  icons.appendChild(l4);

 return icons;

})


hiddenIcons.addEventListener("mouseleave", (e)=>{
  icons.textContent="";
    hiddenIcons.removeChild(icons);
  });

// add html to hidden icons
 l1.addEventListener("click",()=>{
 const editBox = document.createElement("div");

 editBox.innerHTML= `
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
<button class="save-btn" type="save">Save</button>
</div>
</div>

</form>

 `;
 content.appendChild(editBox);
 })
  


 l2.addEventListener("click",()=>{
    const editBox = document.createElement("div");
   
    editBox.innerHTML= `${todayBox};
   
    `;
    content.appendChild(editBox);
    })



    l3.addEventListener("click",()=>{
        const inBox = document.createElement("dialog");
       
        inBox.innerHTML= `
       <div class="comment-modal"> 
       <div id="comment-header"><img>
       <p></p>
       <img><img><img><img>
       </div>
       <div>
       <div>
     TAsks go here
     description goes here
             <button>Add sub-task</button>
             <div class="comment-section">
             <span placeholder="Comment"><span>
             <p>
             <img>
             <img>
             <img>
             <img>
             </p>

             <p>
             <button id="delete-comment">Cancel</button>
              <button id="add-comment">Comment</button>
             </p>
             </div>
       </div>
       <div id="inbox-nav">
         <ul>
         <li>Project<li>projects go here</li></li>
          <li>Date<li>dates go here</li></li>
           <li>Deadline</li>
            <li>Priority<li>priority go here</li></li>
             <li>Labels</li>
              <li>Reminders</li>
               <li>Location</li>
         </ul>
       
       
       
       
       
       </div>
       </div>
       
       
       </div>
        `;
        content.appendChild(editBox);
        })



      l4.addEventListener("click",()=>{
            const editBox = document.createElement("div");
           
            editBox.innerHTML= `
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
           <button class="save-btn" type="save">Save</button>
           </div>
           </div>
           
           </form>
           
            `;
            content.appendChild(editBox);
            })
  }editProject()
// give priority a metric ranking system
let priority = [priority1 , priority2, priority3, priority4];

let priority1= {
  importance : 10, 
}
let priority2={
  importance: 8,
}

let priority3 = {
  importance: 5,
}

let priority4 = {
  importance :2,
}
// setting todos add complete
// changing todo priority





   const addBtn = document.querySelector(".box button");
   




// adds eventListeners to page and displays them
   function addNavListener() {
    const navList = document.querySelectorAll("li");
    
    navList.forEach((nav) => {
      nav.addEventListener("click", () => {
        displayPage(nav.id);
      });
    });
  }
  
  function displayPage(list) {
    const pages = [
      addTaskPage, searchPage, inboxPage, 
      todayPage, upcomingPage, filtersPage, 
      homePage, teamPage, templatePage
    ];
    
    // Assuming list is a string that can be converted to an index
    const pageIndex = Number(list);
    if (pageIndex >= 0 && pageIndex < pages.length) {
      pages[pageIndex]();
    }
  }
  
  addNavListener();
   

    
// function to play orange animation.
 function playAnimation(){
  animationPage()
 }
 }






















 //"use strict";

// Existing imports remain the same...

// export function homePage() {
//     class TodoManager {
//         constructor() {
//             this.todos = [];
//             this.projects = new Map();
//             this.projects.set(["tomorrow","monday","tuesday","wednesday","thursday","friday","saturday","sunday"]);
//             this.filters = {
//                 priority: null,
//                 dueDate: null,
//                 completed: null
//             };
//         }

//         addTodo(todo) {
//             this.todos.push(todo);
//             this.saveTodos();
//             this.renderTodos();
//         }

//         deleteTodo(id) {
//             this.todos = this.todos.filter(todo => todo.id !== id);
//             this.saveTodos();
//             this.renderTodos();
//         }

//         toggleTodoComplete(id) {
//             const todo = this.todos.find(t => t.id === id);
//             if (todo) {
//                 todo.completed = !todo.completed;
//                 this.saveTodos();
//                 this.renderTodos();
//             }
//         }

//         saveTodos() {
//             localStorage.setItem('todos', JSON.stringify(this.todos));
//         }

//         loadTodos() {
//             const saved = localStorage.getItem('todos');
//             this.todos = saved ? JSON.parse(saved) : [];
//             this.renderTodos();
//         }

//         renderTodos() {
//             const container = document.getElementById('newTodo');
//             container.innerHTML = '';

//             const filteredTodos = this.getFilteredTodos();
            
//             filteredTodos.forEach(todo => {
//                 const todoElement = this.createTodoElement(todo);
//                 container.appendChild(todoElement);
//             });

//             this.updateTaskCounter();
//         }

//         getFilteredTodos() {
//             return this.todos.filter(todo => {
//                 if (this.filters.priority && todo.priority !== this.filters.priority) return false;
//                 if (this.filters.completed !== null && todo.completed !== this.filters.completed) return false;
//                 if (this.filters.dueDate) {
//                     const today = new Date().toISOString().split('T')[0];
//                     if (this.filters.dueDate === 'today' && todo.dueDate !== today) return false;
//                 }
//                 return true;
//             });
//         }

//         createTodoElement(todo) {
//             const div = document.createElement('div');
//             div.className = 'task';
//             div.innerHTML = `
//                 <div class="task-header ${todo.completed ? 'completed' : ''}">
//                     <img src="${grig2}">
//                     <input type="checkbox" ${todo.completed ? 'checked' : ''}>
//                     <span class="todo-title">${todo.title}</span>
//                     <span class="priority-badge priority-${todo.priority}">${todo.priority}</span>
//                 </div>
//                 ${todo.description ? `<p class="todo-description">${todo.description}</p>` : ''}
//                 <div class="todo-footer">
//                     <span class="due-date">${todo.dueDate}</span>
//                     <div class="todo-actions"></div>
//                 </div>
//             `;

//             // Add event listeners
//             const checkbox = div.querySelector('input[type="checkbox"]');
//             checkbox.addEventListener('change', () => this.toggleTodoComplete(todo.id));

//             return div;
//         }

//         updateTaskCounter() {
//             const counter = document.getElementById('taskCounter');
//             const completed = this.todos.filter(todo => todo.completed).length;
//             counter.innerHTML = `
//                 <img src="${checkCircle}">
//                 ${completed}/${this.todos.length} tasks completed
//             `;
//         }
//     }

//     // Initialize the page
//     const content = document.querySelector("body");
//     const navBox = document.createElement("div");
//     const homeBox = document.createElement("div");

//     // ... (rest of your existing HTML setup)

//     // Initialize TodoManager
//     const todoManager = new TodoManager();
//     todoManager.loadTodos();

//     // Add event listeners
//     const plusBtn = document.querySelector("button");
//     plusBtn.addEventListener("click", () => {
//         addTaskPage();
//     });

//     // Add drag and drop functionality
//     function enableDragAndDrop() {
//         const tasks = document.querySelectorAll('.task');
//         tasks.forEach(task => {
//             task.setAttribute('draggable', true);
//             task.addEventListener('dragstart', handleDragStart);
//             task.addEventListener('dragover', handleDragOver);
//             task.addEventListener('drop', handleDrop);
//         });
//     }

//     function handleDragStart(e) {
//         e.dataTransfer.setData('text/plain', e.target.id);
//         e.target.classList.add('dragging');
//     }

//     function handleDragOver(e) {
//         e.preventDefault();
//     }

//     function handleDrop(e) {
//         e.preventDefault();
//         const draggedId = e.dataTransfer.getData('text/plain');
//         const droppedOn = e.target.closest('.task');
//         if (droppedOn && draggedId !== droppedOn.id) {
//             // Reorder logic here
//             todoManager.reorderTasks(draggedId, droppedOn.id);
//         }
//     }

//     // Add keyboard shortcuts
//     document.addEventListener('keydown', (e) => {
//         if (e.ctrlKey && e.key === 'n') {
//             e.preventDefault();
//             addTaskPage();
//         }
//     });

//     return {
//         todoManager,
//         enableDragAndDrop
//     };
// }