
import search from "../images/search.svg";
import bedtime from "../images/dark_mode.svg";
import close from "../images/close.svg";
import events from "../images/calendar_add.svg";
import view from "../images/tune.svg";

import home from "src/images/home.svg";
import inbox from "../images/inbox.svg";
import today from "../images/calendar_today.svg";
import upcoming from "../images/calendar_month.svg";
import filters from "../images/grid3.svg";
import complete from "../images/check_circle.svg";
import activity from "../images/tune.svg";

    export  function searchPage(){
      const searchBtn = document.querySelector("#search-btn");
      
      searchBtn.addEventListener("click",()=>{
         const searchBox = document.createElement("div");
         
         searchBox.setAttribute("class","search-box");
         searchBox.innerHTML = `
         
           <p><img src=""${search} alt="search icon"><input id="search-inbox" name ="search-inbox" type="text" placeholder="Search and type navigations"></p><hr>
            <p>Recently viewed</p>
             <p><img src=""${today} alt="search icon"> Today</p><hr>
             <p>Navigation</p>
            <p> <img src=""${home} alt="search icon"> Go to home</p>
            <p> <img src=""${inbox} alt="search icon"> Go to Inbox</p>
            <p> <img src=""${today} alt="search icon"> Go to Today</p>
            <p> <img src=""${upcoming} alt="search icon"> Go to Upcoming</p>
            <p> <img src=""${filters} alt="search icon"> Go to Filters and Labels</p>
            <p> <img src=""${complete} alt="search icon"> Go to Completed/p>
            <p> <img src=""${activity} alt="search icon"> Go to activity</p>
             
                 `;
         content.appendChild(searchBox);
        
         searchBox.addEventListener("mouseleave", (e)=>{
            content.removeChild(searchBox)
          })
      })
    }



