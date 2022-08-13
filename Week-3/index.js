// call method : The  call()  allows for a function/method belonging to one object to be assigned and called for a different object.

let p1 = {
    firstName: 'John',
    lastName: 'Smith'
  };
  let p2 = {
    firstName: 'Ann',
    lastName: 'Brown'
  };
  function sayWelcome(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
  }
  sayWelcome.call(p1, 'Welcome'); // Welcome John Smith
  sayWelcome.call(p2, 'Welcome'); // Welcome Ann Brown


// Apply method : The only difference between  call  and apply  is that with  apply  you have to pass arguments as an array. Not doing so will fail with a  TypeError .

let p1 = {
    firstName: 'John',
    lastName: 'Smith'
  };
  let p2 = {
    firstName: 'Ann',
    lastName: 'Brown'
  };
  function sayWelcome(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
  }
  sayWelcome.apply(p1, ['Welcome']); // Welcome John Smith
  sayWelcome.apply(p2, ['Welcome']); // Welcome Ann Brown

  //Bind method : bind  returns a function

  let p1 = {
    firstName: 'John',
    lastName: 'Smith'
  };
  let p2 = {
    firstName: 'Ann',
    lastName: 'Brown'
  };
  function sayWelcome() {
    console.log('Welcome ' + this.firstName + ' ' + this.lastName);
  }
  let sayWelcomeJohn = sayWelcome.bind(p1);
  let sayWelcomeAnn = sayWelcome.bind(p2);
  sayWelcomeJohn(); // Welcome John Smith
  sayWelcomeAnn(); // Welcome Ann Brown

// Notes : The differences between call, apply, and bind

// Both  call  and  apply  invoke a function. Their only difference is that  call  accepts arguments in a comma-separated fashion while  
//apply  requires arguments to be passed as an array or an array-like object.

// Bind  returns a function. Examples coming up.

// When and why should I use them?
// 1.  To borrow another object’s methods or
// 2. To create a custom value of this