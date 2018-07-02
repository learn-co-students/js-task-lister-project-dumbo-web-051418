class TaskLister {

  // constructor() {
  //   this.listTitle = document.querySelector('#new-list-title')
  // }
  //
  // getListTitle() {
  //   return this.listTitle
  // }

  createList(name){
    // const newList = new List(name)
    const lists = document.querySelector('#lists')
    let listDiv = document.createElement("div")
    let listH = document.createElement("h2")
    let listButton = document.createElement("button")
    listH.innerHTML = name + ' '
    listDiv.appendChild(listH)
    listButton.className +=
    listButton.setAttribute("data-title", `${name}`)
    listButton.setAttribute("class", "delete-list")
    listButton.innerHTML = 'X'
    listH.appendChild(listButton)
    lists.appendChild(listDiv)
  }

  createTask(description){
    const newTask = new Task(description)
    // document.querySelector('#app-content').innerHTML +=
  }

  renderListsOptions(){
    const parentList = document.querySelector('#parent-list')
    // for (var i = 0; i < List.all.length; i++) {
    //
    //   const op = document.createElement('option')
    //   op.innerHTML = List.all[i].name
    //   parentList.appendChild(op)
      // }

  }

  // render() {
  //   return (`<h1>Welcome to Flavortown</h1>`);
  // }

}
