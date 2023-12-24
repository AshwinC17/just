const posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        if (posts.length > 0) {
            const deletedPost = posts.pop();
            resolve(deletedPost);
        } else {
            reject('No posts to delete');
        }
    });
}

Promise.all([
    createPost({ title: 'Post 1', content: 'This is the first post.' }),
    updateLastUserActivityTime(),
    createPost({ title: 'Post 2', content: 'This is the second post.' }),
    updateLastUserActivityTime(),
    createPost({ title: 'Post 3', content: 'This is the third post.' }),
    updateLastUserActivityTime()
])
    .then(() => {
        console.log('All posts:', posts);
        console.log('Last Activity Time:', lastActivityTime);
        return deletePost();
    })
    .then((deletedPost) => {
        console.log('Deleted Post:', deletedPost);
        console.log('Remaining Posts:', posts);
    })
    .catch((error) => console.log(error));
