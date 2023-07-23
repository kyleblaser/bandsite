/** @format */

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

function createCommentContainer(name, comment, timestamp) {
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment-container");

  const profilePicture = document.createElement("div");
  profilePicture.classList.add("profile-picture");
  const profilePictureImg = document.createElement("img");
  profilePictureImg.src = "./assets/images/Mohan-muruge.jpg";
  profilePictureImg.alt = "Profile Picture";
  profilePicture.appendChild(profilePictureImg);

  const commentContent = document.createElement("div");
  commentContent.classList.add("comment-content");

  const commentName = document.createElement("strong");
  commentName.classList.add("comment-name");
  commentName.textContent = name;

  const commentDate = document.createElement("span");
  commentDate.classList.add("comment-date");
  commentDate.textContent = formatDate(timestamp);

  const commentText = document.createElement("p");
  commentText.classList.add("comment-text");
  commentText.textContent = comment;

  commentContent.appendChild(commentName);
  commentContent.appendChild(commentDate);
  commentContent.appendChild(commentText);

  commentContainer.appendChild(profilePicture);
  commentContainer.appendChild(commentContent);

  return commentContainer;
}

const commentList = document.getElementById("commentList");

function fetchCommentsFromAPI() {
  const apiKey = "9a699568-ff10-4730-9a73-98718f36c1d9";
  const apiUrl = `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((commentsData) => {
      commentsData.reverse().forEach((commentData) => {
        const { name, comment, timestamp } = commentData;
        const commentContainer = createCommentContainer(
          name,
          comment,
          timestamp
        );
        commentList.appendChild(commentContainer);
      });
    })
    .catch((error) => {
      console.error("Error fetching comments:", error);
    });
}

function postCommentToAPI(name, comment) {
  const apiKey = "9a699568-ff10-4730-9a73-98718f36c1d9";
  const apiUrl = `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`;

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      comment: comment,
    }),
  })
    .then((response) => response.json())
    .then((newCommentData) => {
      const { name, comment, timestamp } = newCommentData;
      const commentContainer = createCommentContainer(name, comment, timestamp);
      commentList.prepend(commentContainer);
    })
    .catch((error) => {
      console.error("Error posting comment:", error);
    });
}

document
  .getElementById("commentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("nameInput").value;
    const comment = document.getElementById("commentInput").value;
    const currentDate = new Date().getTime();

    postCommentToAPI(name, comment);

    document.getElementById("nameInput").value = "";
    document.getElementById("commentInput").value = "";
  });

fetchCommentsFromAPI();
