class DynamicArray {

  constructor(defaultSize=4) {

    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity)
  }


  read(index) {

    if (index >= this.length) {
      return undefined;
    }
    return this.data[index]
  }


  push(val) {

    // Your code here
    this.data[this.length] = val;
    this.length++;

  }


  pop() {

    // Your code here
    let last = this.data[this.length-1];
    this.data[this.length-1] = undefined;
    this.length--;
    return last;
  }
  

  shift() {
    // Your code here
    let first = this.data[0];
    for (let i = 0; i < this.length; i++){
      this.data[i] = this.data[i+1];
    }
    this.length--;
    this.data[this.length] = undefined;
    return first;
  }


  unshift(val) {

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i-1];
    }
    this.data[0] = val;
    this.length++;
  }


  indexOf (val) {

    // Your code here
    for (let i = 0; i < this.length; i++) {
      if(this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }


  resize () {

    // Your code here
    if (this.length === this.capacity) {     
    let tmp = new Array(this.length)
    for (let i = 0; i < this.length; i++) {
      tmp[i] = this.data[i];
    }        
    this.capacity = this.capacity * 2 
    this.data = new Array(this.capacity);
        
    for (let i = 0; i < this.length; i++) {
      this.data[i] = tmp[i];
    }    
  }

  }


};


module.exports = DynamicArray;