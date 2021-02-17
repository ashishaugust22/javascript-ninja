/*
    GET
    /posts
    /posts/1
    /posts/1/comments
    /comments?postId=1
*/

/*
    POST
    /posts
*/

/*
    PUT
    /posts/1
*/

/*
    PATCH
    /posts/1
*/

/*
    DELETE
    /posts/1
*/
const baseUrl = "https://jsonplaceholder.typicode.com/";

async function singleGet () {
    let response = await fetch(`${baseUrl}posts`);
    if (response.ok) {
        const result = await response.json();
        console.log(result);
        console.assert(result.length === 100, 'Unknown response');
    }
}

async function postData () {
    const todo = {
        title: 'Lets post something now.'
    };
    const response = await fetch(`${baseUrl}posts`,
        {
            method: 'post',
            body: JSON.stringify(todo),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        }
    );
    const result = await response.json();
    console.log(result);
    console.assert(result.id === 101, 'Something went wrong');
}



// singleGet();
// postData();