let addBtn = document.getElementById("addbtn");
let input = document.getElementById("inputlist");
let ul = document.getElementById("ullist");

addBtn.addEventListener("click", function () {
  let task = input.value.trim();
  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = task + " ";

  let dateSpan = document.createElement("small");
  let now = new Date();
  dateSpan.textContent = `(${now.toLocaleDateString()} ${now.toLocaleTimeString()})`;
  dateSpan.style.color = "gray";

  let checkBtn = document.createElement("button");
  checkBtn.textContent = "✔";
  checkBtn.style.marginLeft = "10px";
  checkBtn.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "5px";
  delBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(dateSpan);
  li.appendChild(checkBtn);
  li.appendChild(delBtn);

  ul.appendChild(li);

  input.value = "";
});

let style = document.createElement("style");
style.textContent = `
  li.done span {
    text-decoration: line-through;
    color: green;
  }
`;
document.head.appendChild(style);
