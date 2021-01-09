

function jsEngine(code) {
    return code.split(/\s+/);
}

jsengine('var a = 5');

// output
// ['var', 'a', '=', '5'];


