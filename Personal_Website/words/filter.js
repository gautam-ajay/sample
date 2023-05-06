function filterByTag(tag) {
  const postList = document.getElementById('post-list');
  const posts = postList.getElementsByTagName('li');

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const tags = post.getAttribute('data-tags').split(' ');

    if (tags.indexOf(tag) !== -1 || tag === 'all') {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  }

  const filterButtons = document.querySelectorAll('.tag-button');
  for (let i = 0; i < filterButtons.length; i++) {
    const button = filterButtons[i];
    if (button.getAttribute('data-tag') === tag) {
      button.classList.add('selected');
    } else {
      button.classList.remove('selected');
    }
  }

  const recentPosts = document.querySelector('#filter + h2');
  if (tag === 'all') {
    recentPosts.textContent = 'All words';
  } else {
    recentPosts.textContent = `${tag} words`;
  }
}
