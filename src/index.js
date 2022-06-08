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

  commentButton.addEventListener("click", function () {
    const commentList = document.getElementById("comments");
    const bigText = document.getElementById("big-text");
    let comment = bigText.value;
    let newParagraph = document.createElement("li");
    newParagraph.innerHTML = comment;
    commentList.appendChild(newParagraph);
    bigText.value = "";
  });

  const removeCommentButton = document.getElementById("remove-comments");

  removeCommentButton.addEventListener("click", function () {
    if (confirm("Confirm")) {
      const commentList = document.getElementById("comments");
      commentList.replaceChildren();
    }
  });
}
