import bedtime from "../images/dark_mode.svg";
import close from "../images/close.svg";
import events from "../images/calendar_add.svg";
import view from "../images/tune.svg";
import inbox from "../images/inbox.svg";
import add from "../images/add.svg";
import grig2 from "../images/grig2.svg";

export  function inboxPage (){


    const content = document.querySelector("body");


  const inBox = document.querySelector("#container");

  inBox.innerHTML = "";
  inBox.innerHTML =`
   <div class="box">
         <div id="container">
             <h1>Inbox</h1>
             
             <div id="newTodo">
               <div class="task">
               <img src="${grig2}">
               <input type="checkbox" id="radio-btn" name="radio-btn" >Download OrangeTodo in all your devices and email for iphone, Android, laptops and tablets.
               </div>
             
                <p id="today-inbox"><img src="${inbox}">Today</p>
               

             </div><hr>

              <div id="newTodo">
               <div class="task">
               <img src="${grig2}">
               <input type="checkbox" id="radio-btn" name="radio-btn" >Download OrangeTodo in all your devices and email for iphone, Android, laptops and tablets.
               </div>
             
                <p id="tomorrow-inbox"><img src="${inbox}">Tomorrow</p>
               

             </div><hr>

              <div id="newTodo">
               <div class="task">
               <img src="${grig2}">
               <input type="checkbox" id="radio-btn" name="radio-btn" >Download OrangeTodo in all your devices and email for iphone, Android, laptops and tablets.
               </div>
             
                <p id="days-inbox"><img src="${inbox}">Wednesday</p>
               

             </div><hr>
             <button><img src="${add}" alt="">Add Task</button>
         </div> 
            
          
     </div>

`
}