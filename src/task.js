class Task {
  // let all = []
  constructor(description, list) {
    this.description = description
    this.list = list
  }
  renderEl(){
    return `<li>${this.description}</li>`
  }
  // getlist(){
  //   console.log('list method called')
  //   return this.list
  // }
}
