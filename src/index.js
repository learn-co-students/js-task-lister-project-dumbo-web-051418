document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements

  const listDiv = document.getElementById("app-content");

  const app = new TaskLister();
  const listForm = document.querySelector('#create-list-form')

  listForm.addEventListener('submit', e => {
    e.preventDefault()
    const listTitle = document.querySelector('#new-list-title')
    app.createList(listTitle.value)
    app.renderListsOptions()
    e.target.reset()
  })

  const taskForm = document.querySelector('#create-task-form')
  taskForm.addEventListener('submit', e => {
    e.preventDefault()
    let descriptionEl = document.querySelector('#new-task-description')
    let priorityEl = document.querySelector('#new-task-priority')
    let listEl = document.querySelector('#parent-list')
    app.createTask(descriptionEl.value, listEl.value, priorityEl.value)
    e.target.reset()
  })


  // const deleteButton = document.querySelector('.delete-list')

  // deleteButton.addEventListener('click', e => {
  //   if e.target {
  //     const list = e.target
  //     document.querySelector(``)
  //     // .removeChild()
  //   }
  // })

  document.addEventListener('click', e => {
    if (e.target.className == "delete-list"){
      console.log('deleted, rendering list options');
      app.renderListsOptions()
    }
  })

});
