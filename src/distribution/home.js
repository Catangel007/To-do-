
const homePage = document.querySelector("body");

const navBox = document.createElement("div");
const homeBox = document.createElement("div");

homePage.appendChild(navBox)
homePage.appendChild(homeBox)

navBox.innerHTML=`

 <div class="navigation">
        <h3>Name placeholder <img src="./images/bell.png" alt="notifications icon"></h3>
        <ul>
            <li><img src="./images/plus-thick.png" alt="add task icon">Add Task</li>
            <li><img src="./images/search.png" alt="search icon">Search              </li>
            <li><img src="./images/inbox.png" alt="inbox icon">inbox              </li>
            <li><img src="./images/calendar_today.png" alt="add task today icon">Today               </li>
            <li><img src="./images/calendar.png" alt="upcoming task icon">Upcoming                </li>
            <li><img src="./images/apps.png" alt="filters and labels icon">Filters & Labels              </li>
        </ul>
        <ul> My Projects
            <li><img src="./images/hashtag.png" alt="">Home</li>
            <li><img src="./images/plus-thick.png" alt="add team icon">Add a Team</li>
            <li><img src="./images/playing_cards.png" alt="template icon"> Browse Templates</li>
        </ul>
    </div>


`
homeBox.innerHTML=`
 
   <div class="box">
        <header>
        <img  id="mode" src="./images/bedtime.png" alt="dark mode">
           <p><img src="./images/event.png" alt="calendar icon">Calendar events | <img src="./images/close.png alt="close icon"></p>
           <p>icon View</p>
        </header>
            <h1>Today</h1>
            <radio id="taskCounter"></radio>
            <div id="newTodo">
                <radio class="task" placeholder="Download OrangeTodo in all your devices and email for iphone, Android, laptops and tablets."></radio>
               <p>inbox</p>
            </div>
           
            <p><img src="./images/plus-thick.png" alt="">Add Task</p>
        
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