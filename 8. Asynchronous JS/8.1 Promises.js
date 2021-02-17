/*
    A promise is an object that may produce a single value some time in the future.
    states => fulfilled, rejected, or pending
    Once settled, a promise can not be resettled
    Calling resolve() or reject() again will have no effect
    The immutability of a settled promise is an important feature
*/

/*
    Promises following the spec must follow a specific set of rules:
    A promise or “thenable” is an object that supplies a standard-compliant .then() method.
    A pending promise may transition into a fulfilled or rejected state.
    A fulfilled or rejected promise is settled, and must not transition into any other state.
    Once a promise is settled, it must have a value (which may be undefined). That value must not change.
*/


// ==============================================

const wait = time => new Promise((resolve) => setTimeout(resolve, time));

wait(3000).then(() => console.log('Hello!')); // 'Hello!'


// ==============================================
/*
    Assuming each of the functions, fetch(), process(), and save() return promises, 
    process() will wait for fetch() to complete before starting, and save() will wait for process() to complete before starting. 
    handleErrors() will only run if any of the previous promises reject.
*/
fetch(url)
    .then(process)
    .then(save)
    .catch(handleErrors);

// ==============================================

const wait = time => new Promise(
    res => setTimeout(() => res(), time)
);

wait(200)
    // onFulfilled() can return a new promise, `x`
    .then(() => new Promise(res => res('foo')))
    // the next promise will assume the state of `x`
    .then(a => a)
    // Above we returned the unwrapped value of `x`
    // so `.then()` above returns a fulfilled promise
    // with that value:
    .then(b => console.log(b)) // 'foo'
    // Note that `null` is a valid promise value:
    .then(() => null)
    .then(c => console.log(c)) // null
    // The following error is not reported yet:
    .then(() => { throw new Error('foo'); })
    // Instead, the returned promise is rejected
    // with the error as the reason:
    .then(
        // Nothing is logged here due to the error above:
        d => console.log(`d: ${d}`),
        // Now we handle the error (rejection reason)
        e => console.log(e)) // [Error: foo]
    // With the previous exception handled, we can continue:
    .then(f => console.log(`f: ${f}`)) // f: undefined
    // The following doesn't log. e was already handled,
    // so this handler doesn't get called:
    .catch(e => console.log(e))
    .then(() => { throw new Error('bar'); })
    // When a promise is rejected, success handlers get skipped.
    // Nothing logs here because of the 'bar' exception:
    .then(g => console.log(`g: ${g}`))
    .catch(h => console.log(h)) // [Error: bar]
    ;

/*
    Promise {<pending>}
    VM223:13 foo
    VM223:16 null
    VM223:25 Error: foo
    at <anonymous>:18:22
    VM223:27 f: undefined
    VM223:35 Error: bar
    at <anonymous>:31:23
*/

// ==============================================

// Error Handling
// Note that promises have both a success and an error handler, and it’s very common to see code that does this:
save().then(
    handleSuccess,
    handleError
);

// But what happens if handleSuccess() throws an error? 

save()
    .then(handleSuccess)
    .catch(handleError)
    ;