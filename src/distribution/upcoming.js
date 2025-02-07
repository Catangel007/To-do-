export  function upcomingPage (){


    const content = document.querySelector("body");


  const upcomingBox = document.querySelector("#container");

  upcomingBox.innerHTML =`
  <div class="box">
        <header>
        <img  id="mode" src="${bedtime}" alt="dark mode">
           <p id="events"><img src="${events}" alt="calendar icon">Calendar events  | <img src="${close}" alt="close icon"></p>
           <p id="view"><img src="${view}">View</p>
        </header>
        <div id="container">
            <h1>Upcoming</h1>
            <div id="calendar-upcoming">
            
            </div>

            <div id="calendarTodo">
              <p>${this.date}.${this.projects}.${this.day}</p><hr>
              <div class="task">
              <img src="${grig2}">
              <input type="checkbox" id="radio-btn" name="radio-btn" >Download OrangeTodo in all your devices and email for iphone, Android, laptops and tablets.
              </div>
            <ul class="hidden-icons"></ul>
               <p id="inbox">inbox<img src="${inbox}"></p>
              

            </div><hr>
            <button><img src="${add}" alt="">Add Task</button>
        </div> 




         <div id="calendarTodo">
              <p>${this.date}.${this.projects}.${this.day}</p><hr>
              <div class="task">
              <img src="${grig2}">
              <input type="checkbox" id="radio-btn" name="radio-btn" >take productivity method quiz.
               <p class="description">Get personalized recommendations from OrangeTodo<p>
              </div>
            <ul class="hidden-icons"></ul>
               <p id="inbox">inbox<img src="${inbox}"></p>
              

            </div><hr>
            <button><img src="${add}" alt="">Add Task</button>
        </div> 
           




         <div id="calendarTodo">
              <p>${this.date}.${this.projects}.${this.day}</p><hr>
              <div class="task">
              <img src="${grig2}">
              <input type="checkbox" id="radio-btn" name="radio-btn" >Browse Orangetodo inspiration hub.
              <p class="description">For productivity advice send us an email<p>
              </div>
            <ul class="hidden-icons"></ul>
               <p id="inbox">inbox<img src="${inbox}"></p>
              

            </div><hr>
            <button><img src="${add}" alt="">Add Task</button>
        </div> 
           




         <div id="calendarTodo">
              <p>${this.date}.${this.projects}.${this.day}</p><hr>
             
            <button><img src="${add}" alt="">Add Task</button>
        </div> 
           





         <div id="calendarTodo">
              <p>${this.date}.${this.projects}.${this.day}</p><hr>
             
            <button><img src="${add}" alt="">Add Task</button>
        </div> 
           





         <div id="calendarTodo">
              <p>${this.date}.${this.projects}.${this.day}</p><hr>
              
            <button><img src="${add}" alt="">Add Task</button>
        </div> 
           





         <div id="calendarTodo">
              <p>${this.date}.${this.projects}.${this.day}</p><hr>
             
            <button><img src="${add}" alt="">Add Task</button>
        </div> 
           






         <div id="calendarTodo">
              <p>${this.date}.${this.projects}.${this.day}</p><hr>
             
            <button><img src="${add}" alt="">Add Task</button>
        </div> 
           
           
         
    </div>
    `

    content.appendChild(upcomingBox);
}