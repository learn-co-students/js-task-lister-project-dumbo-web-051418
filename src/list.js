const List = (function () {
  let all = []
  return class { //returning a function within our function, this is a closure
    constructor(name){
      this.name = name
      all.push(this)
    }

    // The static keyword is needed in order to make this method available to the class
    static getAll() {
      return [...all] //spread it all the way so you don't modify the existing array
    }

    static removeList(list){
      all = all.filter(item => item.name !== list)
    }
  }

})()//assigns the class to List and the class has access to all
