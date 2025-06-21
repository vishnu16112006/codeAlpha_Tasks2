function createPost() {
  const feed = document.getElementById("feed");
  const postInput = document.getElementById("postInput");

  if (postInput.value.trim() === "") return;

  const postBox = document.createElement("div");
  postBox.className = "post";

  postBox.innerHTML = `
    <p>${postInput.value}</p>
    <div class="actions">
      <button class="like-btn" onclick="likePost(this)">❤️ Like</button>
      <button class="comment-btn" onclick="commentPost(this)">💬 Comment</button>
    </div>
  `;

  feed.prepend(postBox);
  postInput.value = "";
}

function likePost(btn) {
  btn.textContent = "❤️ Liked";
  btn.disabled = true;
}

function commentPost(btn) {
  const comment = prompt("Enter your comment:");
  if (comment) {
    const commentPara = document.createElement("p");
    commentPara.textContent = `💬 ${comment}`;
    btn.parentElement.parentElement.appendChild(commentPara);
  }
}
