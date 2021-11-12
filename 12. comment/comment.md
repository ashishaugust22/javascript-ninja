https://stackabuse.com/commenting-code-in-javascript-types-and-best-practices/

Single Line Comment
```javascript
// Print "Hello World" in the console
console.log("Hello World");
```

Single Line Comment
```javascript
// Print "Hello World" in the console
console.log("Hello World");
```
```javascript
let c = a + b; // Assign sum of a, b to c
```


Multi-Line Comments and JavaScript DocStrings

```javascript
/* The following program contains source code for a game called Tic-tac-toe.
It is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. 
The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner
*/
```

```javascript
/**
* The following program contains source code for a game called Tic-tac-toe.
* It is a paper-and-pencil game for two players, X and O, who take turns marking the
* spaces in a 3×3 grid. 
* The player who succeeds in placing three of their marks in a horizontal, vertical, or 
* diagonal row is the winner
*/
```

```javascript
/**
* Function that greets a user
* @author   John
* @param    {String} name    Name of the user
* @return   {String}         Greeting message
*/
function greetUser(name) {
    return `Greetings, ${name}!`;
}
```