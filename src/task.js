class Task {
  // your code here
  constructor(list, description, priority){
      // list.push(Task)
      this.description = description;
      this.priority = priority;
      this.list = list;
      this.list.tasks.push(this);
  }

  render(){
      return `<li>
        Task: ${this.description}
        <button data-list-title="${this.list.title}" data-task-name="${this.description}" class="delete-task">
          X
        </button>
        <br>
        Priority: ${this.priority}
      </li>`;
  }
}
