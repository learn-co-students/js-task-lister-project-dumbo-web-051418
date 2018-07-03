const Task = (function () {
  const all = []
  return class { //actually a closure b/c the returned class is a function

    constructor(description, list, priority) {
      this.description = description
      this.list = list
      this.priority = priority
      all.push(this)
      console.log('constructor finished')
    }
    renderEl(){
      return `<li>${this.description}</li>`
    }
    static getAll(){
      return [...all]
    }
    // getlist(){
    //   console.log('list method called')
    //   return this.list
    // }
  }
})()
