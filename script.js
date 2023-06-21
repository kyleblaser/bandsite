/** @format */

// Function to format the date in a numeric format
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

// Function to create a comment container element
function createCommentContainer(name, comment, date) {
  // Create a new comment container element
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment-container");

  // Create a new profile picture element
  const profilePicture = document.createElement("div");
  profilePicture.classList.add("profile-picture");
  const profilePictureImg = document.createElement("img");
  profilePictureImg.src = "./assets/images/Mohan-muruge.jpg"; // Replace with the actual profile picture URL
  profilePictureImg.alt = "Profile Picture";
  profilePicture.appendChild(profilePictureImg);

  // Create a new comment content element
  const commentContent = document.createElement("div");
  commentContent.classList.add("comment-content");

  // Create a new comment name element
  const commentName = document.createElement("strong");
  commentName.classList.add("comment-name");
  commentName.textContent = name;

  // Create a new comment date element
  const commentDate = document.createElement("span");
  commentDate.classList.add("comment-date");
  commentDate.textContent = formatDate(date);

  // Create a new comment text element
  const commentText = document.createElement("p");
  commentText.classList.add("comment-text");
  commentText.textContent = comment;

  // Append the name and date to the comment content
  commentContent.appendChild(commentName);
  commentContent.appendChild(commentDate);

  // Append the comment text to the comment content
  commentContent.appendChild(commentText);

  // Append the profile picture and comment content to the comment container
  commentContainer.appendChild(profilePicture);
  commentContainer.appendChild(commentContent);

  return commentContainer;
}

// Get the comment list element
const commentList = document.getElementById("commentList");

// Pre-defined comments
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

// Loop through the pre-defined comments
prePopulatedComments.forEach((commentData) => {
  const { name, comment, date } = commentData;

  // Create a comment container element
  const commentContainer = createCommentContainer(name, comment, date);

  // Append the comment container to the comment list
  commentList.insertBefore(commentContainer, commentList.firstChild);
});

// Handle form submission
document
  .getElementById("commentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the values from the form inputs
    const name = document.getElementById("nameInput").value;
    const comment = document.getElementById("commentInput").value;
    const currentDate = new Date();

    // Create a comment container element for the new comment
    const commentContainer = createCommentContainer(name, comment, currentDate);

    // Append the new comment container to the comment list at the top
    commentList.insertBefore(commentContainer, commentList.firstChild);

    // Clear the form inputs
    document.getElementById("nameInput").value = "";
    document.getElementById("commentInput").value = "";
  });
