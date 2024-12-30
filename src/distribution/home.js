
const homePage = document. querySelector("body");

const navBox = document.createElement("div");
const homeBox = document.createElement("div");

homePage.appendChild(navBox)
homePage.appendChild(homeBox)

navBox.innerHTML=`

 <div class="navigation">
        <h3>Name placeholder <img src="./images/bell.png" alt=""></h3>
        <ul>
            <li><img src="./images/plus-thick.png" alt="">Add Task</li>
            <li><img src="./images/search.png" alt="">Search              </li>
            <li><img src="./images/orange.png" alt="">inbox              </li>
            <li><img src="./images/orange.png" alt="">Today               </li>
            <li><img src="./images/orange.png" alt="">Upcoming                </li>
            <li><img src="./images/apps.png" alt="">Filters & Labels              </li>
        </ul>
        <ul> My Projects
            <li><img src="./images/hashtag.png" alt="">Home</li>
            <li>Add a Team</li>
            <li>Browse Templates</li>
        </ul>
    </div>


`
homeBox.innerHTML=`
 
   <div class="box">
        <header><input><p>icon</p></header>
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