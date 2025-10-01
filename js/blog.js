document.addEventListener("DOMContentLoaded", function () {
  const blogContainer = document.getElementById("blog-posts");

  fetch("/data/posts.json")
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        const postCard = document.createElement("div");
        postCard.className = `blog-post ${post.category.toLowerCase()}`;

        postCard.innerHTML = `
          <div class="blog-entry">
            <a href="post.html?slug=${post.slug}" class="img img-2" style="background-image: url('${post.image}');"></a>
            <div class="text text-2 pt-2 mt-3">
              <span class="category mb-3 d-block"><a href="#">${formatCategory(post.category)}</a></span>
              <h3 class="mb-4"><a href="post.html?slug=${post.slug}">${post.title}</a></h3>
              <p class="mb-4">${post.excerpt}</p>
              <div class="author mb-4 d-flex align-items-center">
                <a href="#" class="img" style="background-image: url('${post.authorImage}')"></a>
                <div class="ml-3 info">
                  <span>Written by</span>
                  <h3><a href="#">${post.author}</a>, <span>${post.date}</span></h3>
                </div>
              </div>
            </div>
          </div>
        `;
        blogContainer.appendChild(postCard);
      });
    });

  window.filterSelection = function (category) {
    const posts = blogContainer.querySelectorAll(".blog-post");
    posts.forEach((post) => {
      if (category === "all" || post.classList.contains(category)) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  };

  // Helper
  function formatCategory(cat) {
    return cat
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  // Initial display
  filterSelection("all");
});


