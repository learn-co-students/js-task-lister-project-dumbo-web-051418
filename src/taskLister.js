class TaskLister {
  // your solution here
  constructor(){
    this.lists = [];
  }

  getListByTitle(title) {
    return this.lists.filter(list => list.title === title)[0]

  }

  render() {
    let result = "";
    if(this.lists.length > 0){
      result = `
      <form id="create-task-form">
        <label for="parent-list">Select List:</label>
        <select id="parent-list">
        `;
        this.lists.forEach(function(list){
          result += `<option value="${list.title}">
            ${list.title}
          </option>`
        });
        result += `
        </select>

        <label for="new-task-description">Task description:</label>
        <input required type="text" id="new-task-description" placeholder="description">

        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
        <input type="submit" value="Create New Task">
      </form>
      <div id='lists'>
      `;

      this.lists.forEach(function(list){
        result += list.render();
      });
    }
    result += '</div>';


    return result;

  }
}
