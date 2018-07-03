class TaskLister {

  static slugify(text){
    return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
  }
  // constructor() {
  //   this.listTitle = document.querySelector('#new-list-title')
  // }
  //
  // getListTitle() {
  //   return this.listTitle
  // }

  createList(name){
    const newList = new List(name)
    const lists = document.querySelector('#lists')
    let listDiv = document.createElement("div")
    // debugger
    // slugify('text in a senctence')
    const nameSlug = TaskLister.slugify(`${name}`)
    listDiv.setAttribute("class", nameSlug)
    let listH = document.createElement("h2")
    let listButton = document.createElement("button")
    listH.innerHTML = name + ' '
    listDiv.appendChild(listH)
    listButton.setAttribute("data-title", `${name}`)
    listButton.setAttribute("class", "delete-list")
    listButton.innerHTML = 'X'
    listH.appendChild(listButton)
    lists.appendChild(listDiv)

    listButton.addEventListener('click', e => {
      e.target.parentElement.parentElement.remove()
      List.removeList(name)
    })
  }

  createTask(description, list, priority){
    const newTask = new Task(description, list, priority)
    const listSlugged = TaskLister.slugify(list)
    const listDiv = document.querySelector(`.${listSlugged}`)
    let li = document.createElement("li")
    li.innerHTML = `Task: ${description} `
    const button = document.createElement("button")
    button.setAttribute("data-list-title", `${list}`)
    button.setAttribute("data-task-name", `${description}`)
    button.setAttribute("class", `delete-task`)
    button.innerHTML = "X"
    li.appendChild(button)
    listDiv.appendChild(li)
    li.appendChild(document.createElement("br"))

    let priorityEl = document.createElement("span")
    priorityEl.innerHTML = `Priority: ${priority}`
    li.appendChild(priorityEl)

    button.addEventListener('click', e => {
      e.target.parentElement.remove()
    })
  }

  renderListsOptions(){
    const parentList = document.querySelector('#parent-list')
    while (parentList.firstChild) {
      parentList.removeChild(parentList.firstChild);
    }
    for (let i = 0; i < List.getAll().length; i++) {
      let optionEl = document.createElement("option")
      optionEl.innerHTML = List.getAll()[i].name
      parentList.appendChild(optionEl)
    }
  }


  // render() {
  //   return (`<h1>Welcome to Flavortown</h1>`);
  // }

}
