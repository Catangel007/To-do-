"use strict";
// import Images and Icons
import bell from "../images/bell.png";
import apps from "../images/grid3.svg";
import hashtag from "../images/hashtag.png";
import orange from "../images/orange.png";
import add_circle from "../images/add_circle.svg";
import add from "../images/add.svg";
import search from "../images/search.svg";


import clover from "../images/clover.png";
import mic from "../images/microphone.png";
import paperPin from "../images/paper-pin.png";
import puzzle from "../images/puzzle.png";
import smile from "../images/smile.png";
import unlock from "../images/unlock.png";
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
    const addBtn = document.querySelector(".box button");

    
    content.appendChild(navBox);
    content.appendChild(homeBox);

    navBox.setAttribute("class","navBox");
    homeBox.setAttribute("class","homeBox");

    navBox.innerHTML="";
    navBox.innerHTML=`

 <div class="nav">
        <h3>Name  <img id="bell" src="${bell}" alt="notifications icon"><img src="${thumbnail}"></h3>
        <ul>
            <li class="nav-li" id="0"><img src="${add_circle}" alt="add task icon">Add Task</li>
            <li class="nav-li" id="1"><img src="${search}" alt="search icon">Search</li>
            <li class="nav-li" id="2"><img src="${inbox}" alt="inbox icon">inbox</li>
            <li class="nav-li" id="3"><img src="${calendar_today}" alt="add task today icon">Today</li>
            <li class="nav-li" id="4"><img src="${calendar}" alt="upcoming task icon">Upcoming</li>
            <li class="nav-li" id="5"><img src="${apps}" alt="filters and labels icon">Filters & Labels</li>
        </ul>
        <ul id="projects"> My Projects &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="${add}" alt="add project icon"><img src="${arrowDown}" alt="add project icon">
            <li class="nav-li" id="6" class="margin"><img src="${hashtag}" alt="">Home</li>
            <li class="nav-li" id="7"><img src="${add}" alt="add team icon">Add a Team</li>
            <li class="nav-li" id="8"><img src="${playingCards}" alt="template icon"> Browse Templates</li>
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
            <p id="taskCounter"></p>

            <div id="newTodo">
              <div class="task">
              <img src="${grig2}">
              <input type="checkbox" id="radio-btn" name="radio-btn" >Download OrangeTodo in all your devices and email for iphone, Android, laptops and tablets. 
              </div>
            </div>
            <br>
            <hr>
            <button class="add"><img src="${add}" alt="">Add Task</button>
        </div> 
            
          
    </div>

`

 const plusBtn = document.querySelector(".add");
 plusBtn.addEventListener("click",addTaskPage);


 // adds eventListeners to page and displays them
 function addNavListener() {
  const navList = document.querySelectorAll(".nav-li");
  console.log("you are inside navList function");
  navList.forEach((nav) => {
    nav.addEventListener("click", () => {
      displayPage(nav.id);
    });
  });
}
addNavListener();

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


// manage new todo and old ones
class TodoManager {

  constructor() {
      this.todos = [];
      this.projects = ["Home","Today","Tomorrow","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Custom"];
      this.filters = {
          priority: null,
          dueDate: null,
          completed: null
      };
  }

  addTodo(todo) {
      this.todos.push(todo);
      this.saveTodos();
      this.renderTodos();
  }

  deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.saveTodos();
      this.renderTodos();
  }

  toggleTodoComplete(id) {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
          todo.completed = !todo.completed;
          this.saveTodos();
          this.renderTodos();
      }
  }

  saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadTodos() {
      const saved = localStorage.getItem('todos');
      this.todos = saved ? JSON.parse(saved) : [];
      this.renderTodos();
  }

  renderTodos() {
      const container = document.getElementById('newTodo');
      container.innerHTML = '';

      const filteredTodos = this.getFilteredTodos();
      
      filteredTodos.forEach(todo => {
          const todoElement = this.createTodoElement(todo);
          container.appendChild(todoElement);
      });

      this.updateTaskCounter();
  }

  getFilteredTodos() {
      return this.todos.filter(todo => {
          if (this.filters.priority && todo.priority !== this.filters.priority) return false;
          if (this.filters.completed !== null && todo.completed !== this.filters.completed) return false;
          if (this.filters.dueDate) {
              const today = new Date().toISOString().split('T')[0];
              if (this.filters.dueDate === 'today' && todo.dueDate !== today) return false;

          }
          return true;
      });
  }

  updateTodo(id,updateData){
    this.todos = this.todos.map(todo => {
      if (todo.id === id){
        return{...todo,...updateData};
      }
      return todo;
    });
    this.saveTodos();
    this.renderTodos();
  }

   createTodoElement(todo) {
     const div = document.createElement("div");
     div.className = "task";
     div.id = `todo-${todo.id}`;
    
     
     div.innerHTML = `
             <img src="${grig2}">
             <input type="checkbox" ${todo.completed ? 'checked' : ''} id="radio-btn" name="radio-btn" >
             <span class="todo-title">${todo.title}</span>
            ${todo.description ? `<p class="todo-description">${todo.description}</p>`: ''}
            <div class="todo-footer">
            <span class="priority-badge priority-${todo.priority.split(" ")[1]}">${todo.priority}</span>
            <span class="due-date"${todo.dueDate}></span>
              
            </div>
     `;
   
// Add event listeners
const checkbox = div.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', () => this.toggleTodoComplete(todo.id));

   return div;  
   }
    


  updateTaskCounter() {
      const counter = document.getElementById('taskCounter');
      const completed = this.todos.filter(todo => todo.completed).length;
      counter.innerHTML = `
          <img src="${checkCircle}">
          ${completed}/${this.todos.length} tasks completed
      `;
  }
}


// Initialize TodoManager
const todoManager = new TodoManager();
todoManager.loadTodos();


// Add drag and drop functionality
function enableDragAndDrop() {
  const tasks = document.querySelectorAll('.task');
  tasks.forEach(task => {
      task.setAttribute('draggable', true);
      task.addEventListener('dragstart', handleDragStart);
      task.addEventListener('dragover', handleDragOver);
      task.addEventListener('drop', handleDrop);
  });
}enableDragAndDrop();

function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  e.target.classList.add('dragging');
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  const draggedId = e.dataTransfer.getData('text/plain');
  const droppedOn = e.target.closest('.task');
  if (droppedOn && draggedId !== droppedOn.id) {
      // Reorder logic here
       todoManager.reorderTasks(draggedId, droppedOn.id);
   }
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
   if (e.ctrlKey && e.key === 'n') {
       e.preventDefault();
       addTaskPage();
   }
});




function editProject(){
  //Initialize action icons container
  const container = document.querySelector("#container");

  //Event delegation for hover actions
  container.addEventListener("mouseover", (e)=>{
    const task = e.target.closest(".task");
    if (!task) return;

    const taskId = task.id.split("-")[1];
    const icons = task.querySelector(".hidden-icons");

    icons.style.color= "gray";
    icons.style.size= "40px";
    //Create icons if they don't exist
    if(!icons){
      const iconsContainer = document.createElement("div");
      iconsContainer.className = "hidden-icons";
      iconsContainer.innerHTML = `
      <img src="${writeIcon}" class="edit-icon" data-id="${taskId}">
      <img src="${today}" class="date-icon" data-id="${taskId}">
      <img src="${hidden}" class="more-icon" data-id="${taskId}">
      <img src="${deleteIcon}" class="delete-icon" data-id="${taskId}">
     
      `;
      task.appendChild(iconsContainer);
    }
  });

  //handle icon clicks
  container.addEventListener("click", (e)=>{
    const taskId = e.target.dataset.id;

    if(e.target.classList.contains("edit-icon")){
    openEditForm(taskId);
    }
    else if(e.target.classList.contains("delete-icon")){
      todoManager.deleteTodo(Number(taskId));
    }
    else if(e.target.classList.contains("more-icon")){
      moreIconFunctionality(taskId);
      }
      else if(e.target.classList.contains("date-icon")){
        openInputForm(taskId);
        }
  })

function moreIconFunctionality(){
   const div = document.createElement("div");
   const divList = document.createElement("ul");
   divList.className = "more-func";
    divList.innerHTML = `
              <li> <img src="${clover}" alt="clover icon">Edit</li>
              <li> <img src="${clover}" alt="clover icon">Go to Project</li>
              <li>Date
             <img src="${clover}" alt="clover icon">
             <img src="${clover}" alt="clover icon">
             <img src="${clover}" alt="clover icon">
             <img src="${clover}" alt="clover icon">
             <img src="${noDate}" alt="clover icon">
             <img src="${hidden}" alt="clover icon">
              </li>
              <li>Priority
             <img id="red" src="${flag}" alt="flag icon">
             <img id="blue" src="${flag}" alt="flag icon">
             <img id="yellow" src="${flag}" alt="flag icon">
             <img id="white" src="${flag}" alt="flag icon">
              </li>
              <li><img src="${clover}" alt="clover icon">Reminders</li>
              <li><img src="${clover}" alt="clover icon">Move to</li>
              <li><img src="${clover}" alt="clover icon">Duplicate</li>
              <li><img src="${clover}" alt="clover icon">Copy link to task</li>
              <li><img src="${clover}" alt="clover icon">Add extension...</li>
              <li><img src="${clover}" alt="clover icon">Delete</li>
    `
}
  //Modal creation function
  function openEditForm(taskId){
    const todo = todoManager.todos.find(t => t.id === Number(taskId));

    const editBox = document.createElement("div");
   
    editBox.innerHTML= `
   <form action=""> 
   <input id="chores" >
   <input id="description" placeholder="Description">
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
  
  }


    function openInputForm(){
        const inBox = document.createElement("dialog");
       
        inBox.innerHTML= `
       <div class="comment-div"> 
       <div id="comment-header"><img>
       <p>${this.projects}</p>
       <img src="${add_circle}" alt="add task icon">
       <img src="${add_circle}" alt="add task icon">
       <img src="${hidden}" alt="add task icon">
       <img src="${close}" alt="add task icon">
       </div>
       <div>
       <div>
     Tasks go here
     description goes here
             <button> <img src="${add}" alt="add icon">Add sub-task</button>
             <div class="comment-section">
             <span placeholder="Comment"><span>
             <p>
              <img src="${paperPin}" alt="pin icon">
              <img src="${mic}" alt="mic icon">
              <img src="${smile}" alt="smile icon">
              <img src="${puzzle}" alt="add task icon">
             </p>

             <p>
             <button id="delete-comment">Cancel</button>
              <button id="add-comment">Comment</button>
             </p>
             </div>
       </div>
       <div id="inbox-nav">
         <ul>
         <li>Project<li><img>${this.projects}projects go here<img></li></li><hr>
          <li>Date<li>${this.date}dates go here</li></li><hr>
           <li>Deadline<img src="${clover}" alt="clover icon"><img src="${unlock}" alt="unlock icon"></li><hr>
            <li>Priority<li>${this.priority}priority go here</li></li><hr>
             <li>Labels <img src="${add}" alt="add task icon"></li><hr>
              <li>Reminders<img src="${add}" alt="add task icon"></li><hr>
               <li>Location<img src="${clover}" alt="clover icon"><img src="${unlock}" alt="unlock icon"></li><hr>
         </ul>
          
       </div>
       </div>
         
       </div>
        `;
        content.appendChild(inBox);
        }

          }
          editProject()

// setting todos add complete
// changing todo priority


// function to play orange animation.
 function playAnimation(){
  animationPage()
 }




window.addEventListener("todosUpdated", ()=> {
  todoManager.loadTodos();
  todoManager.renderTodos();
});

return {
  todoManager,
};

 }

























   