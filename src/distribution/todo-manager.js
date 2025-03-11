 
 import clover from "../images/clover.png";
 import mic from "../images/microphone.png";
 import paperPin from "../images/paper-pin.png";
 import puzzle from "../images/puzzle.png";
 import smile from "../images/smile.png";
 import unlock from "../images/unlock.png";
 import grig2 from "../images/grig2.svg";
 import hidden from "../images/more_horiz.svg";
 
 import thumbnail from "../images/thumbnail.svg";
 import today from "../images/today.svg";
 import checkCircle from "../images/check_circle.svg";
 import envelope from "../images/mail.svg";
 import bedtime from "../images/dark_mode.svg";
 import calendar_today from "../images/calendar_today.svg";
 import chatBubble from "../images/chat.svg";
 import calendar from "../images/calendar_month.svg";
 import close from "../images/close.svg";
 import deleteIcon from "../images/delete.svg";
 import arrowDown from "../images/arrow-down.svg";
 import dots from "../images/grip1.svg";
 import writeIcon from "../images/write.svg";
 import events from "../images/calendar_add.svg";
 import inbox from "../images/inbox.svg";
 import lightMode from "../images/light_mode.svg";
 
 import view from "../images/tune.svg";
 
 import playingCards from "../images/playing_cards.svg";
 
 export class TodoManager {
    constructor() {
      if (!TodoManager.instance) {
              this.todos = [];
              this.projects = ["Home","Today","Tomorrow","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Custom"];
              this.filters = {
                  priority: null,
                  dueDate: null,
                  completed: null
              };
              TodoManager.instance = this;
          }
         
       return TodoManager.instance;  
        }
        
          addTodo(todo) {
              this.todos.push(todo);
              this.saveTodos();
              this.renderTodos();
          }
        
          deleteTodo(id) {
              this.todos = this.todos.filter(todo => todo.id !== id);
              this.saveTodos();
              this.renderTodos();
          }
        
          toggleTodoComplete(id) {
              const todo = this.todos.find(t => t.id === id);
              if (todo) {
                  todo.completed = !todo.completed;
                  this.saveTodos();
                  this.renderTodos();
              }
          }
        
          saveTodos() {
              localStorage.setItem('todos', JSON.stringify(this.todos));
          }
        
          loadTodos() {
              const saved = localStorage.getItem('todos');
              this.todos = saved ? JSON.parse(saved) : [];
              this.renderTodos();
          }
        
          renderTodos() {
              const container = document.getElementById('newTodo');
              container.innerHTML = '';
        
              const filteredTodos = this.getFilteredTodos();
              
              filteredTodos.forEach(todo => {
                  const todoElement = this.createTodoElement(todo);
                  container.appendChild(todoElement);
              });
        
              this.updateTaskCounter();
          }
        
          getFilteredTodos() {
              return this.todos.filter(todo => {
                  if (this.filters.priority && todo.priority !== this.filters.priority) return false;
                  if (this.filters.completed !== null && todo.completed !== this.filters.completed) return false;
                  if (this.filters.dueDate) {
                      const today = new Date().toISOString().split('T')[0];
                      if (this.filters.dueDate === 'today' && todo.dueDate !== today) return false;
        
                  }
                  return true;
              });
          }
        
          updateTodo(id,updateData){
            this.todos = this.todos.map(todo => {
              if (todo.id === id){
                return{...todo,...updateData};
              }
              return todo;
            });
            this.saveTodos();
            this.renderTodos();
          }
        
           createTodoElement(todo) {
             const div = document.createElement("div");
             div.className = "task";
             div.id = `todo-${todo.id}`;
            
             
             div.innerHTML = `
                     <img src="${grig2}">
                     <input type="checkbox" ${todo.completed ? 'checked' : ''} id="radio-btn" name="radio-btn" >
                     <span class="todo-title">${todo.title}</span>
                    ${todo.description ? `<p class="todo-description">${todo.description}</p>`: ''}
                    <div class="todo-footer">
                    <span class="priority-badge priority-${todo.priority.split(" ")[1]}">${todo.priority}</span>
                    <span class="due-date"${todo.dueDate}></span>
                      
                    </div>
             `;
           
                    // Add event listeners
                      const checkbox = div.querySelector('input[type="checkbox"]');
                      checkbox.addEventListener('change', () => this.toggleTodoComplete(todo.id));
        
                      return div;  
                    }
            
        
        
          updateTaskCounter() {
              const counter = document.getElementById('taskCounter');
              const completed = this.todos.filter(todo => todo.completed).length;
              counter.innerHTML = `
                  <img src="${checkCircle}">
                  ${completed}/${this.todos.length} tasks completed
              `;
             
          }  
          
 }
 
 export const todoManager = new TodoManager();
  
  
 