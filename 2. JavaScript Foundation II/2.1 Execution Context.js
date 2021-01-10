sayHello(); // local execution context
printHello(); // local execution context

// all these run in Global Execution Context
// this is why this points to Window in Global Execution Context
// this === Window
// output => true