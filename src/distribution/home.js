
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
   import { addTaskPage }  from "./addtask.js";
   import { teamPage }  from "./team.js";
   import { templatePage }  from "./template.js";



 export function homePage(){
    const content = document.querySelector("body");

const navBox = document.createElement("div");
const homeBox = document.createElement("div");

content.appendChild(navBox);
content.appendChild(homeBox);

navBox.setAttribute("class","navBox");
homeBox.setAttribute("class","homeBox");

navBox.innerHTML=`

 <div class="nav">
        <h3>Name  <img id="bell" src="${bell}" alt="notifications icon"><img src="${thumbnail}"></h3>
        <ul>
            <li id="1"><img src="${add_circle}" alt="add task icon">Add Task</li>
            <li id="2"><img src="${search}" alt="search icon">Search</li>
            <li id="3"><img src="${inbox}" alt="inbox icon">inbox</li>
            <li id="4"><img src="${calendar_today}" alt="add task today icon">Today</li>
            <li id="5"><img src="${calendar}" alt="upcoming task icon">Upcoming</li>
            <li id="6"><img src="${apps}" alt="filters and labels icon">Filters & Labels</li>
        </ul>
        <ul id="projects"> My Projects
            <li id="7" class="margin"><img src="${hashtag}" alt="">Home</li>
            <li id="8"><img src="${add}" alt="add team icon">Add a Team</li>
            <li id="9"><img src="${playingCards}" alt="template icon"> Browse Templates</li>
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



 const body = document.createElement("ul");
let list = document.createElement("li");


//  function addTaskBtn (){
//     const addTaskBtn = document.createElement("button");
//     addTaskBtn.innerHTML=`<img src="${add_circle}">Add Task`;
//   return addTaskBtn;
    
//   }

class Theme {

  constructor(name,list){
  this.name = name;
  this.list = [];
  
  }
 callTaskBtn(){
    addTaskBtn();
 }
  
}

const routines = new Theme("Routines","Do a weekly review of my tasks and goals","Add more personal routines");


// takes care of hidden icons
 
const hiddenIcons = document .querySelector(".task");
const icons = document.querySelector(".hidden-icons");
hiddenIcons.addEventListener("mouseenter", ()=>{
 
  // <ul id="task-icons">
  // <li><img src="${writeIcon}" ></li>
  // <li><img src="${today}" ></li>
  // <li><img src="${chatBubble}" ></Li>
  // <li><img src="${hidden}" ></Li>
  //    </ul>
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
              
      },{once:true})
      

  icons.appendChild(l1);
  icons.appendChild(l2);
  icons.appendChild(l3);
  icons.appendChild(l4);

 return icons;

})


hiddenIcons.addEventListener("mouseleave", (e)=>{
  icons.textContent="";
    hiddenIcons.removeChild(icons)
  },{once:true})

   const addBtn = document. querySelector(".box button");
   




// adds eventListeners to page and displays them
   function addNavListener() {
    const navList = document.querySelectorAll("li");
    
    navList.forEach((nav) => {
      nav.addEventListener("click", () => {
        alert(nav.id);
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