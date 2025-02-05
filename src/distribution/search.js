
import search from "../images/search.svg";
import bedtime from "../images/dark_mode.svg";
import close from "../images/close.svg";
import events from "../images/calendar_add.svg";
import view from "../images/tune.svg";




    export  function searchPage(){
      const searchBtn = document.querySelector("#search-btn");
      
      searchBtn.addEventListener("click",()=>{
         const searchBox = document.createElement("div");
         
         searchBox.setAttribute("class","search-box");
         searchBox.innerHTML = `
         
           <p><img src=""${search} alt="search icon"><input id="search-inbox" name ="search-inbox" type="text" placeholder="Search and type navigations"></p><hr>
            <p>Recently viewed</p>
             <p><img src=""${search} alt="search icon"> Today</p><hr>
             <p>Navigation</p>
            <p> <img src=""${search} alt="search icon"> Go to home</p>
            <p> <img src=""${search} alt="search icon"> Go to Inbox</p>
            <p> <img src=""${search} alt="search icon"> Go to Today</p>
            <p> <img src=""${search} alt="search icon"> Go to Upcoming</p>
            <p> <img src=""${search} alt="search icon"> Go to Filters and Labels</p>
            <p> <img src=""${search} alt="search icon"> Go to Completed/p>
            <p> <img src=""${search} alt="search icon"> Go to activity</p>
             
                 `;
         content.appendChild(searchBox);
        
         searchBox.addEventListener("mouseleave", (e)=>{
            content.removeChild(searchBox)
          })
      })
    }



