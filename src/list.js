class List {
  // your code here
  constructor(title){
    this.title = title;
    this.tasks = [];
  }

  render(){
    let result = `<div>
      <h2>${this.title}<button data-title="${this.title}" class="delete-list">X</button></h2>
      <ul>

      `
    this.tasks.forEach(function(task){
      result += task.render();
    });

    result += '</ul></div>';
    return result;
  }
}
