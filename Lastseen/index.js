let posts = [];

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function createPost(post) {
    return new Promise((resolve) => {
        posts.push(post);
        resolve(post);
    });
}

function deletePost() {
    return new Promise((resolve) => {
        posts.pop();
        resolve(posts);
    });
}

let newPost = { id: 1, content: 'Hello, world!' };

console.log('Before creating post:', new Date());

Promise.all([createPost(newPost), updateLastUserActivityTime()])
    .then(([post, lastActivityTime]) => {
        console.log('After creating post:', new Date());
        console.log('Posts:', posts);
        console.log('Last Activity Time:', lastActivityTime);

        deletePost().then((remainingPosts) => {
            console.log('Remaining Posts:', remainingPosts);
        });
    });