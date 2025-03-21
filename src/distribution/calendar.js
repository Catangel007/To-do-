



export function calendarPage(){

    const content = document.querySelector("body");
    const box = document.querySelector("#calendar-div");

    box.innerHTML= `
    
    <div class="calendar">
      <header>
        <h4></h4>
        <nav>
          <button id="prev"></button>
          <button id="next"></button>
        </nav>
      </header>
      <section>
        <ul class="days">
          <li>S</li>
          <li>M</li>
          <li>T</li>
          <li>W</li>
          <li>T</li>
          <li>F</li>
          <li>S</li>
        </ul>
        <ul class="dates"></ul>
      </section>
    </div>
    
  `

  const header = document.querySelector(".calendar h4");
  const dates = document.querySelector(".dates");
  const navs = document.querySelectorAll("#prev, #next");
  
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  let date = new Date();
  let month = date.getMonth();
  let year = date.getFullYear();
  
  function renderCalendar() {
    // first day of the month
    const start = new Date(year, month, 1).getDay();
    // last date of the month
    const endDate = new Date(year, month + 1, 0).getDate();
    // last day of the month
    const end = new Date(year, month, endDate).getDay();
    // last date of the previous month
    const endDatePrev = new Date(year, month, 0).getDate();
  
    let datesHtml = "";
  
    for (let i = start; i > 0; i--) {
      datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
    }
  
    for (let i = 1; i <= endDate; i++) {
      let className =
        i === date.getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear()
          ? ' class="today"'
          : "";
      datesHtml += `<li${className}>${i}</li>`;
    }
  
    for (let i = end; i < 6; i++) {
      datesHtml += `<li class="inactive">${i - end + 1}</li>`;
    }
  
    dates.innerHTML = datesHtml;
    header.textContent = `${months[month]} ${year}`;
  }
  
  navs.forEach((nav) => {
    nav.addEventListener("click", (e) => {
      const btnId = e.target.id;
  
      if (btnId === "prev" && month === 0) {
        year--;
        month = 11;
      } else if (btnId === "next" && month === 11) {
        year++;
        month = 0;
      } else {
        month = btnId === "next" ? month + 1 : month - 1;
      }
  
      date = new Date(year, month, new Date().getDate());
      year = date.getFullYear();
      month = date.getMonth();
  console.log(date,"hi i am date inside nav");
      renderCalendar();

      return date;

    });
    return date;
    console.log(date,"hi i am date inside navs");
  });
  console.log(date,"hi i am date outside navs");
  renderCalendar();









  return date;

}