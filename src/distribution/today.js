

import flag from "../images/sports_score.svg";
import arrowDown from "../images/arrow-down.svg";
import close from "../images/close.svg";
import today from "../images/today.svg";
import hidden from "../images/more_horiz.svg";
import inbox from "../images/inbox.svg";
import alarm from "../images/alarm.svg";

export  function todayPage (){

    const content = document.querySelector("body");


    const todayBox = document.querySelector("#container");

    upcomingBox.innerHTML =`
    <div class="box">
          <header>
          <img  id="mode" src="${bedtime}" alt="dark mode">
             <p id="events"><img src="${events}" alt="calendar icon">Calendar events  | <img src="${close}" alt="close icon"></p>
             <p id="view"><img src="${view}">View</p>
          </header>
          <dialog open id="container">
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
          </dialog> 
             
           
      </div>
      `
    //     </div>

}