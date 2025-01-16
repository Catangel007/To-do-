
// import Images and Icons
import bell from "../images/bell.png";
import apps from "../images/grid3.svg";
import hashtag from "../images/hashtag.png";
import orange from "../images/orange.png";
import add_circle from "../images/add_circle.svg";
import add from "../images/add.svg";
import search from "../images/search.svg";
import arrowDown from "../images/arrow-down.svg";
import grig2 from "../images/grig2.svg";
import hidden from "../images/more_horiz.svg";
import flag from "../images/sports_score.svg";
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
        <h3>Name  <img src="${bell}" alt="notifications icon"><img src="${thumbnail}"></h3>
        <ul>
            <li><img src="${add_circle}" alt="add task icon">Add Task</li>
            <li><img src="${search}" alt="search icon">Search</li>
            <li><img src="${inbox}" alt="inbox icon">inbox</li>
            <li><img src="${calendar_today}" alt="add task today icon">Today</li>
            <li><img src="${calendar}" alt="upcoming task icon">Upcoming</li>
            <li><img src="${apps}" alt="filters and labels icon">Filters & Labels</li>
        </ul>
        <ul> My Projects
            <li><img src="${hashtag}" alt="">Home</li>
            <li><img src="${add}" alt="add team icon">Add a Team</li>
            <li><img src="${playingCards}" alt="template icon"> Browse Templates</li>
        </ul>
    </div>


`
homeBox.innerHTML=`
 
   <div class="box">
        <header>
        <img  id="mode" src="${bedtime}" alt="dark mode">
           <p><img src="${events}" alt="calendar icon">Calendar events | <img src="${close}" alt="close icon"></p>
           <p><img src="${view}">View</p>
        </header>
        <div id="container">
            <h1>Today</h1>
            <p id="taskCounter"></p>
            <div id="newTodo">
              <div class="task"><img src="${grig2}">Download OrangeTodo in all your devices and email for iphone, Android, laptops and tablets.</div>
             <ul></ul>
               <p>inbox<img src="${inbox}"></p>
               

            </div><hr>
            <p><img src="${add}" alt="">Add Task</p>
        </div> 
            
          
    </div>


`



 const body = document.createElement("ul");
let list = document.createElement("li");


 function addTaskBtn (){
    const addTaskBtn = document.createElement("button");
    addTaskBtn.innerHTML=`<img src="${add_circle}">Add Task`;
  return addTaskBtn;
    
  }

class Theme {

  constructor(name,list,list1,){
  this.name = name;
  this.list = list;
  this.list1 = list1;
  }
 callTaskBtn(){
    addTaskBtn();
 }
  
}

const routines = new Theme("Routines","Do a weekly review of my tasks and goals","Add more personal routines");


// takes care of hidden icons
 
const hiddenIcons = document .querySelector(".task");
hiddenIcons.addEventListener("mouseover", (e)=>{
  const icons = document.createElement("ul");
  // <ul id="task-icons">
  // <li><img src="${writeIcon}" ></li>
  // <li><img src="${today}" ></li>
  // <li><img src="${chatBubble}" ></Li>
  // <li><img src="${hidden}" ></Li>
  //    </ul>
 hiddenIcons.appendChild("icons");
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
      image4.addEventListener("mouseover",()=>{
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



})


 }