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


  // listForm.addEventListener('submit', e => {
  //   e.preventDefault()
  //   app.createTask(app.getListTitle().value)
  // })
});
