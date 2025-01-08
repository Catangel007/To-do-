
// import Images and Icons
import bell from "../images/bell.png";
import apps from "../images/apps.png";
import hashtag from "../images/hashtag.png";
import orange from "../images/orange.png";
import plus from "../images/plus-thick.png";
import search from "../images/search.png";

import envelope from "../images/envelope.png";
import bedtime from "../images/bedtime.png";
import calendar_today from "../images/calendar_today.png";
import chatBubble from "../images/chat_bubble.png";
import calendar from "../images/calendar.png";
import close from "../images/close.png";
import deleteIcon from "../images/delete.png";

import dots from "../images/dots.png";
import writeIcon from "../images/edit.png";
import events from "../images/event.png";
import inbox from "../images/inbox.png";
import lightMode from "../images/light_mode.png";

import notifications from "../images/notifications.png";

import playingCards from "../images/playing_cards.png";
import toggleOff from "../images/toggle_off.png";
import toggleOn from "../images/toggle_on.png";



  // import {inboxPage} from "./distribution/inbox.js";
 //  import {searchPage} from "./distribution/search.js";
 //  import {todayPage} from "./distribution/today.js";
 //  import {upcomingPage} from "./distribution/upcoming.js";
 //  import {animationPage} from "./distribution/animation.js";
 //  import {filtersPage} from "./distribution/filters.js";

 export function homePage(){
    const content = document.querySelector("body");

const navBox = document.createElement("div");
const homeBox = document.createElement("div");

content.appendChild(navBox);
content.appendChild(homeBox);

navBox.innerHTML=`

 <div class="navigation">
        <h3>Name placeholder <img src="${notifications}" alt="notifications icon"></h3>
        <ul>
            <li><img src="${plus}" alt="add task icon">Add Task</li>
            <li><img src="${search}" alt="search icon">Search</li>
            <li><img src="${inbox}" alt="inbox icon">inbox</li>
            <li><img src="${calendar_today}" alt="add task today icon">Today</li>
            <li><img src="${calendar}" alt="upcoming task icon">Upcoming</li>
            <li><img src="${apps}" alt="filters and labels icon">Filters & Labels</li>
        </ul>
        <ul> My Projects
            <li><img src="${hashtag}" alt="">Home</li>
            <li><img src="${plus}" alt="add team icon">Add a Team</li>
            <li><img src="${playingCards}" alt="template icon"> Browse Templates</li>
        </ul>
    </div>


`
homeBox.innerHTML=`
 
   <div class="box">
        <header>
        <img  id="mode" src="${bedtime}" alt="dark mode">
           <p><img src="${events}" alt="calendar icon">Calendar events | <img src="./images/close.png" alt="close icon"></p>
           <p>icon View</p>
        </header>
            <h1>Today</h1>
            <radio id="taskCounter"></radio>
            <div id="newTodo">
                <radio class="task" placeholder="Download OrangeTodo in all your devices and email for iphone, Android, laptops and tablets."></radio>
               <p>inbox</p>
            </div>
           
            <p><img src="${plus}" alt="">Add Task</p>
        
    </div>


`



 const body = document.createElement("ul");
let list = document.createElement("li");


 function addTaskBtn (){
    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent= plus + " Add Task";
    list.appendChild(addTaskBtn);
    
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
 }