/** @format */

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

function createCommentContainer(name, comment, date) {
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
  commentDate.textContent = formatDate(date);

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

const prePopulatedComments = [
  {
    name: "Connor Walton",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains",
    date: "06/19/2023",
  },
  {
    name: "Emilie Beach",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day",
    date: "06/20/2023",
  },
  {
    name: "Miles Acosta",
    comment:
      "I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    date: "06/21/2023",
  },
];

prePopulatedComments.forEach((commentData) => {
  const { name, comment, date } = commentData;

  const commentContainer = createCommentContainer(name, comment, date);

  commentList.insertBefore(commentContainer, commentList.firstChild);
});

document
  .getElementById("commentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("nameInput").value;
    const comment = document.getElementById("commentInput").value;
    const currentDate = new Date();

    const commentContainer = createCommentContainer(name, comment, currentDate);

    commentList.insertBefore(commentContainer, commentList.firstChild);

    document.getElementById("nameInput").value = "";
    document.getElementById("commentInput").value = "";
  });