class SmartCalculator {
  constructor(initialValue) {
      this.initialValue = initialValue.toString();
      
    // your implementation
  }

  add(number) {
      this.initialValue = this.initialValue + '+' + number;
      return this
    // your implementation
  }
  
  subtract(number) {
      this.initialValue = this.initialValue + '-' + number;
      return this
    
    // your implementation
  }

  multiply(number) {
     this.initialValue = this.initialValue + '*' + number;
      return this
    // your implementation
  }

  devide(number) {
    this.initialValue = this.initialValue + '/' + number;
      return this
    // your implementation
  }

  pow(number) {
     this.initialValue = this.initialValue + '**' + number;
      return this
    // your implementation
  }
toString(){
          return eval(this.initialValue);
      }
}

module.exports = SmartCalculator;
