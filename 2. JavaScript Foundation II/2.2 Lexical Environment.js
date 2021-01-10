// Whenever there is execution context then there is a lexical environment.

// So, lexical can be understood as small universe carried inside other.



function a() {
    // lexical environment a
    function b() {
        // lexical environment b
    }
}



// largest lexical environment is Global lexical environment