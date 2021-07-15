const Posts = [
  {
    title: 'Post1 title',
    detail: 'Post1 detail'
  },
  {
    title: 'Post2 title',
    detail: 'Post2 detail'
  }
]

const listPosts = () => {
  Posts.map((post) => {
    console.log(post)
  })
}
/* listPosts() */

//Promise
const addPost = (newPost) => {
  const promiseAddPost = new Promise((resolve, reject) => {
    Posts.push(newPost);
    resolve(Posts);
    reject('adding new post error')
  })
  return promiseAddPost;
}

/* addPost({title: 'PostPromise title', detail: 'PostPromise detail'})
  .then(() => {
    console.log(listPosts())
  })
  .catch((err) => {
    console.log(err)
  })
 */

//async-await
async function showPosts() {
  try {
    await addPost({title: 'PostAsync title', detail: 'PostAsync detail'});
    listPosts();
  } catch (error) {
    console.log(error)
  }
}

showPosts()
