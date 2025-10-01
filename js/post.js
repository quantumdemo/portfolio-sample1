document.addEventListener("DOMContentLoaded", function () {
      const urlParams = new URLSearchParams(window.location.search);
      const slug = urlParams.get("slug");

      fetch("/data/posts.json")
        .then((res) => res.json())
        .then((posts) => {
          const post = posts.find((p) => p.slug === slug);
          if (post) {
            fetch(post.contentFile)
              .then((res) => res.text())
              .then((html) => {
                document.getElementById("post-content").innerHTML = html;
              });
          } else {
            document.getElementById("post-content").innerHTML = "<p>Post not found.</p>";
          }
        });
    });