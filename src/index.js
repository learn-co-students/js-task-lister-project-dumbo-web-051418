document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");

  const app = new TaskLister();

  const listForm = document.getElementById("create-list-form");

  const appContent = document.getElementById('app-content');


  appContent.addEventListener("click", function(event){

    if(event.target.classList.contains("delete-list")){
      let id = app.lists.findIndex(list => list.title === event.target.dataset.title);
      app.lists.splice(id, 1);
      event.target.parentElement.parentElement.remove();
      appContent.innerHTML = app.render();
    } else if(event.target.classList.contains("delete-task")){
      let list = app.getListByTitle(event.target.dataset.listTitle);
      let id = list.tasks.findIndex(task => task.description === event.target.dataset.title);
      list.tasks.splice(id, 1);
      event.target.parentElement.remove();
      // debugger
    }
  });

  function submitFunction(event) {
    event.preventDefault();
    let description = document.getElementById("new-task-description").value;
    let priority = document.getElementById('new-task-priority').value;

    let list = app.getListByTitle(document.getElementById('parent-list').value);
    let task = new Task(list, description, priority);

    appContent.innerHTML = app.render();
    let taskForm = document.getElementById('create-task-form');

    taskForm.onsubmit = submitFunction;

  }

  listForm.addEventListener("submit", function(event){
    event.preventDefault();

    let title = document.getElementById("new-list-title").value;

    // let list = new List(title);
    // app.lists.push(list);
    let list = app.getListByTitle(title);
    if (list) {
      alert('List titles must be unique!!!1one1');
      return;
    }

     list = new List(title);
    app.lists.push(list);
    list.id = app.lists.length - 1;

    appContent.innerHTML = app.render();
    let taskForm = document.getElementById('create-task-form');


    taskForm.onsubmit = submitFunction;

    listForm.reset()

  });



});
