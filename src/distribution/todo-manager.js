export class TodoManager {
    constructor() {
      if (!TodoManager.instance) {
        this.todos = [];
        // Rest of your TodoManager class code
        TodoManager.instance = this;
      }
      return TodoManager.instance;
    }
    // Keep all existing methods
  }
  
  export const todoManager = new TodoManager();