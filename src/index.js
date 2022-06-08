/*import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
*/

if (document.readyState !== "loading") {
  console.log("Document is ready");
  initialzeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready after waiting");
    initialzeCode();
  });
}

function initialzeCode() {
  const commentButton = document.getElementById("add-comment");
  /*
  commentButton.addEventListener("click", function () {
    const commentList = document.getElementById("comments");
    const bigText = document.getElementById("big-text");
    //    let comment = bigText.value;
    let newParagraph = document.createElement("li");
    //    newParagraph.innerHTML = comment;
    newParagraph.appendChild(document.createTextNode(bigText.value));
    commentList.appendChild(newParagraph);
    bigText.value = "";
  });
*/
  commentButton.addEventListener("click", function () {
    const layout = document.getElementsByClassName("menu-layout");
    const bigText = document.getElementById("big-text");
    //    const value = document.querySelector('#rating').value;
    //    const rating = document.querySelector(`#rating option[value=${value}]`).innerText;
    //  const rating = document.querySelector("#rating").getSelected()[0].textContent;
    const element = document.getElementById("rating");
    const rating = element.options[element.selectedIndex].text;
    let newParagraph = document.createElement("div");
    newParagraph.classList.add("comment");
    //  let commentRating = document.createTextNode(rating.value);
    let commentRating = document.createElement("div");
    commentRating.classList.add("comment-rating");
    commentRating.innerHTML = rating;
    //  commentRating.classList.add("comment-rating");
    let commentText = document.createElement("div");
    commentText.classList.add("comment-text");
    commentText.innerHTML = bigText.value;
    //  let commentText = document.createTextNode(bigText.value);
    //  commentText.classList.add("comment-text");
    newParagraph.appendChild(commentRating);
    newParagraph.appendChild(commentText);
    layout[0].appendChild(newParagraph);
  });

  const removeCommentButton = document.getElementById("remove-comments");

  removeCommentButton.addEventListener("click", function () {
    if (window.confirm("Confirm")) {
      const commentList = document.getElementById("comments");
      commentList.replaceChildren();
    }
  });
}
