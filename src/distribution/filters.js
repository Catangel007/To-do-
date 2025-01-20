
export  function filtersPage(){

    
    const content = document.querySelector("body");


    const FiltersBox = document.querySelector("#container");
    

    upcomingBox.innerHTML =`
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
}