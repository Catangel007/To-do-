
const plus = document.createElement("img");
plus.src = "../images/plus-thick.png"
export const header = document.createElement("h1");
header.textContent = "Home"+ "&";


export const body = document.createElement("ul");
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