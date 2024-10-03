document.addEventListener('DOMContentLoaded', () => {
  const postsContainer = document.getElementById('posts-container');
  const postDetails = document.getElementById('post-details');
  const postContent = document.getElementById('post-content');
  const backButton = document.getElementById('back-button');


  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.textContent = post.title;
        postElement.addEventListener('click', () => showPostDetails(post.id));
        postsContainer.appendChild(postElement);
      });
    });


  function showPostDetails(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(post => {
        postContent.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        `;
        postsContainer.style.display = 'none';  
        postDetails.style.display = 'block';  
      });
  }


  backButton.addEventListener('click', () => {
    postDetails.style.display = 'none';       
    postsContainer.style.display = 'block'; 
  });
});
